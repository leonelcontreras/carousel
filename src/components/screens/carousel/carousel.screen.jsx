import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CarouselView } from '../../views'

const CarouselScreen = () => {
  const dispatch = useDispatch()
  const { item, last, first } = useSelector(state => state.carouselReducer)

  const handleOnClickPrev = () => dispatch({type: 'GET_PREV_ITEM'})
  const handleOnClickNext = () => dispatch({type: 'GET_NEXT_ITEM'})

  useEffect(() => {
    dispatch({type: 'GET_ITEM'})
  }, [])

  return (
    <CarouselView
      item={item}
      first={first}
      last={last}
      handleOnClickNext={handleOnClickNext}
      handleOnClickPrev={handleOnClickPrev}
    />
  )
}

export default CarouselScreen

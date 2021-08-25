import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CarouselView } from '../../views'
import { CAROUSEL } from '../../../redux/action-types'

const CarouselScreen = () => {
  const dispatch = useDispatch()
  const { item, last, first } = useSelector(state => state.carouselReducer)

  const handleOnClickPrev = () => dispatch({type: CAROUSEL.GET_PREV_ITEM})
  const handleOnClickNext = () => dispatch({type: CAROUSEL.GET_NEXT_ITEM})

  useEffect(() => {
    dispatch({type: CAROUSEL.GET_ITEM})
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

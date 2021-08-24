import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CarouselView } from '../../views'
import { CAROUSEL } from '../../../redux/action-types'

const CarouselScreen = () => {
  const dispatch = useDispatch()
  const { item, last, first } = useSelector(state => state.carouselReducer)
  const [ loading, setLoading ] = useState(true)
  const [ count, setCount ] = useState(0)

  const handleOnClickPrev = () => dispatch({type: CAROUSEL.GET_PREV_ITEM})
  const handleOnClickNext = () => dispatch({type: CAROUSEL.GET_NEXT_ITEM})

  const handleOnLoadEnd = () => {
    setCount(count + 1)

    if (count === (item.images.length - 1)) {
      setLoading(false)
    }
  }

  const handleOnLoadStart = () => {
    setLoading(true)
    setCount(0)
  }

  useEffect(() => {
    dispatch({type: CAROUSEL.GET_ITEM})
  }, [])

  return (
    <CarouselView
      item={item}
      first={first}
      last={last}
      loading={loading}
      handleOnClickNext={handleOnClickNext}
      handleOnClickPrev={handleOnClickPrev}
      handleOnLoadEnd={handleOnLoadEnd}
      handleOnLoadStart={handleOnLoadStart}
    />
  )
}

export default CarouselScreen

import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { CarouselView } from '../../views'

const CarouselScreen = () => {
  const carousel = useSelector(state => state.carouselReducer)
  console.log('carousel ->', carousel)

  return <CarouselView item={carousel[0]} />
}

export default CarouselScreen

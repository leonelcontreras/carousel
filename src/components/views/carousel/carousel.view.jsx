import React from 'react'
import { View } from 'react-native'
import { ItemPure, ButtonPure } from '../../pures'
import styles from './carousel.style'

const CarouselView = ({ item }) => {
  return (
    <View style={styles.container}>
      <ItemPure item={item}/>
      <View style={styles.acctionContainer}>
        <ButtonPure label='Prev' />
        <ButtonPure label='Next' />
      </View>
    </View>
  )
}

export default CarouselView

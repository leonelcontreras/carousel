import React from 'react'
import { View } from 'react-native'
import { ItemPure, ButtonPure } from '../../pures'
import styles from './carousel.style'

const CarouselView = (props) => {
  const {
    item,
    first,
    last,
    loading,
    handleOnClickNext,
    handleOnClickPrev,
    handleOnLoadEnd,
    handleOnLoadStart,
  } = props

  return (
    <View style={styles.container}>
      <ItemPure 
        item={item}
        attr='id'
        handleOnLoadEnd={handleOnLoadEnd} 
        handleOnLoadStart={handleOnLoadStart}
      />
      <View style={styles.acctionContainer}>
        <ButtonPure 
          label='Prev'
          disabled={first}
          onPress={handleOnClickPrev} 
        />
        <ButtonPure 
          label='Next'
          disabled={last}
          onPress={handleOnClickNext}
        />
      </View>
    </View>
  )
}

export default CarouselView

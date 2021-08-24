import React from 'react'
import { View, Text } from 'react-native'
import { ListPure } from '../../pures'

const CarouselView = ({data, attribute}) => {
  console.log('Hey', attribute)
  return (
    <View>
      <ListPure data={data} attribute={attribute} />        
    </View>
  )
}

export default CarouselView

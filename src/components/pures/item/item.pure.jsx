import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './item.style'

const ItemPure = ({item}) => {
  return (
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.container}>
        {item?.images?.map((image, index) => {
          return (
            <View key={index}>
              <Image
                style={styles.image}
                source={{uri: image}}
              />
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default ItemPure

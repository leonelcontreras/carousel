import React from 'react'
import { View, Text, Image } from 'react-native'
import { useAnimation } from '../../../hooks'
import styles from './item.style'

const ItemPure = ({ item, attr, handleOnLoadEnd, handleOnLoadStart }) => {
  const {Animated, animation } = useAnimation(item[attr])

  return (
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.container}>
        {item?.images?.map((image, index) => {
          return (
            <Animated.View key={index} style={{opacity: animation }}>
              <Image
                style={styles.image}
                source={{uri: image}}
                onLoadStart={handleOnLoadStart}
                onLoadEnd={handleOnLoadEnd}
              />
            </Animated.View>
          )
        })}
      </View>
    </View>
  )
}

export default ItemPure

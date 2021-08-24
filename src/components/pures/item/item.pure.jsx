import React, { useEffect, useRef } from 'react'
import { View, Text, Image, Animated } from 'react-native'
import styles from './item.style'

const ItemPure = ({ item, attr, handleOnLoadEnd, handleOnLoadStart }) => {
  const animationValue = useRef(new Animated.Value(0)).current
  
  useEffect(() => {
    animationValue.setValue(0)
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }, [item[attr]])

  return (
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.container}>
        {item?.images?.map((image, index) => {
          return (
            <Animated.View key={index} style={{opacity: animationValue }}>
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

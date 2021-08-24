import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

const useAnimation = (item) => {
  const animation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    animation.setValue(0)

    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start()
  }, [item])

  return {
    animation,
    Animated
  }
}

export default useAnimation

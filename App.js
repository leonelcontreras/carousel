import React from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
import { CarouselScreen } from './src/components/screens'
import { StoreProvider } from './src/providers'

const Application = () => {
  return (
    <View style={styles.container}>
      <CarouselScreen />
    </View>
  )
}

export default () => {
  return (
    <StoreProvider>
      <Application />
    </StoreProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

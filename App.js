import React from 'react'
import { StyleSheet, View } from 'react-native'
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

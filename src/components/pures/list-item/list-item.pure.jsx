import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const ListItemPure = ({item}) => {
  console.log('Item -->', item)
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.container}>
        {item.images.map((image, index) => {
          return (
            <View key={index} style={styles.imageContainer}>
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

const styles = StyleSheet.create({
  card: {
    marginTop: 100,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    borderColor: 'blue'
  },
  imageContainer: {
    borderColor: 'red', 
  },
  image: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').height * 0.2,
  },
  title: {
    padding: 10,
    color: 'black',
    fontSize: 30,
    alignSelf: 'center',
    textDecorationLine: 'underline'
  }
})

export default ListItemPure

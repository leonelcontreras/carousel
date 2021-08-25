import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').height * 0.2,
    margin: 2,
  },
  title: {
    padding: 10,
    color: '#000',
    fontSize: 30,
    alignSelf: 'center',
    textDecorationLine: 'underline'
  }
})
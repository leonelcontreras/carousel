import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './button.style'

const ButtonPure = (props) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPure

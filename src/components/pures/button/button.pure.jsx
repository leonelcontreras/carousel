import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './button.style'

const ButtonPure = (props) => {
  const { label, disabled } = props
  return (
    <TouchableOpacity style={[styles.button, disabled && styles.disabled]} {...props}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPure

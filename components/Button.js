import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
// import { Image } from 'expo-image';
import { Welcome, ellipse } from '../assets/images';
const Button = ({text, width, handleClick, color, backgroundColor}) => {
  return (
    <TouchableOpacity style={{width: width, borderRadius: 10, backgroundColor: backgroundColor, height: 56, alignItems: 'center', justifyContent: 'center'}} onPress={handleClick}>
      <Text style={{color: color, textAlign: 'center', fontSize: 16}}>{text}</Text>
    </TouchableOpacity>
  )
}



export default Button
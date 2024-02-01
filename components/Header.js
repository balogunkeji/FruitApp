import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BackBtn } from './Button'

const Header = ({text, onClick}) => {
  return (
    <View style={styles.header}>
          <BackBtn onClick={onClick}/>
          <Text style={{fontSize: 24, fontWeight: 500, color: '#fff'}}>{text}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#FFA451",
      height: 166,
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      paddingHorizontal: 30,
      paddingTop: 80,
      gap: 32,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      
    },
})

export default Header
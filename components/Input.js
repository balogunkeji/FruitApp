import React from 'react'
import { TextInput, View, Text, StyleSheet, Image } from 'react-native'
import { biSearch } from '../assets/images'

const Input = ({labelColor, label, icon, placeholder, backgroundColor, width}) => {

  return (
    <View style={[styles.input, { width: width ?? "100%", backgroundColor: backgroundColor ?? "rgba(245, 245, 245, 1)"}]}>
        {label && <Text style={{color: labelColor, marginVertical: 10, fontSize: 16, fontWeight: 400}}>{label}</Text>}
        <View style={styles.input}>
        {icon && <Image source={icon}/>}
        <TextInput placeholder={placeholder} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        height: 56,
        borderRadius: 10,
        borderColor: "transparent",
        paddingLeft: 10,
        color: "#1D1C1A",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: 10,
      },
})
export default Input
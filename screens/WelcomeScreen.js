import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
// import { Image } from 'expo-image';
import { Welcome, ellipse } from '../assets/images';
const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={Welcome} resizeMode='cover' style={styles.img}/>
        <Image source={ellipse}/>
      </View>
      <View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      
    },
    image: {
        backgroundColor: '#FFA451',
        width: '100%',
        alignItems: 'center',
        paddingTop: 120,
        paddingBottom: 30,

    }, 
    img: {
       marginBottom: 10, 
    }
  });

export default WelcomeScreen
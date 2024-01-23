import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { Image } from 'expo-image';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        {/* <Image /> */}
      </View>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        backgroundColor: '#FFA451'
    }
  });

export default WelcomeScreen
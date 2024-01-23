import React from 'react'
import { View, Text, StyleSheet, Image, TextInput} from 'react-native'
// import { Image } from 'expo-image';
import { authImage, ellipse } from '../assets/images';
import Button from '../components/Button';
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={authImage} resizeMode='cover' style={styles.img}/>
        <Image source={ellipse}/>
      </View>
      <View style={styles.body}>
        <Text style={{fontSize: 16, fontWeight: 'bold', paddingVertical: 10}}>What is your firstname?</Text>
        <TextInput placeholder='Chris' style={styles.input}/>
      </View>
      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', padding:24}}>
      <Button text="Start Ordering" width={327} backgroundColor={'#FFA451'} color={'#fff'} handleClick={() => navigation.navigate('Home')}/>
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
    }, 
    body: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 24,
    },
    input: {
        width: '96%',
        height: 56,
        borderRadius: 10,
        borderColor: 'transparent',
        backgroundColor: '#F7F5F5',
        paddingLeft: 10,
        color: '#1D1C1A',
        marginTop: 10,

    }

  });

export default Login
import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { Welcome, ellipse } from '../assets/images';
import {Button} from '../components/Button';
const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={Welcome} resizeMode='cover' style={styles.img}/>
        <Image source={ellipse}/>
      </View>
      <View style={styles.body}>
        <Text style={{fontSize: 16, fontWeight: 'bold', paddingVertical: 10}}>Get The Freshest Fruit Salad Combo</Text>
        <Text style={{fontSize: 16, color: '#5D577E'}}>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</Text>
      </View>
      <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', padding:24}}>
        <Button text="Let's Continue" width={327} backgroundColor={'#FFA451'} color={'#fff'} handleClick={() => navigation.navigate('Login')}/>
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
    }

  });

export default WelcomeScreen
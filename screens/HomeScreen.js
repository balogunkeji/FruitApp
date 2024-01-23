import React from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { cart, menu, search, biSearch } from '../assets/images';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{flexDirection: 'row', gap: 50, paddingTop: 40}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 16, marginTop: '-17%'}}>
          <Image source={menu}/>
          <Text style={{fontSize: 16, fontWeight: 400, paddingVertical: 10, color: '#27214D'}}>Welcome, Chris.</Text>
        </View>
        <View>
        <Image source={cart} resizeMode='contain'/>
        </View>
        </View>
        <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'row', gap: 10}}>
          <View style={styles.input}>
            <Image source={biSearch}/>
          <TextInput placeholder='Chris' />
          </View>
        <Image source={search}/>
        </View>
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
      paddingHorizontal: 24,
      alignItems: 'center',

  },
  input: {
      width: '90%',
      height: 56,
      borderRadius: 10,
      borderColor: 'transparent',
      backgroundColor: '#F7F5F5',
      paddingLeft: 10,
      color: '#1D1C1A',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      gap: 10,

  }

});

export default HomeScreen
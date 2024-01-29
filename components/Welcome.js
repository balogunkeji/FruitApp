import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import { cart,menu, biSearch, search } from '../assets/images';

export const WelcomeHeaderLeft = ({handleClick}) => {
  return (
    
      <TouchableOpacity onPress={handleClick}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 16, marginTop: '-17%'}}>
          <Image source={menu}/>
          <Text style={{fontSize: 16, fontWeight: 400, paddingVertical: 10, color: '#27214D'}}>Welcome, Chris.</Text>
        </View>
        </TouchableOpacity>
    
  )
}

export const WelcomeHeaderRight = ({handleClick}) => {
    return (
      
        <TouchableOpacity onPress={handleClick}>
          <Image source={cart} resizeMode='contain'/>
          </TouchableOpacity>
      
    )
  }
  
export const Welcome = () => {
    return (
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10}}>
            <View style={styles.input}>
              <Image source={biSearch}/>
            <TextInput placeholder='Chris' />
            </View>
          <Image source={search}/>
          </View>
    )
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column'
    
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

},
});

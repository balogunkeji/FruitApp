import React from 'react'
import { View, Text, StyleSheet, Image, TextInput} from 'react-native'
import { cart,menu, biSearch, search } from '../assets/images';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', paddingTop: 40, alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 16, marginTop: '-17%'}}>
          <Image source={menu}/>
          <Text style={{fontSize: 16, fontWeight: 400, paddingVertical: 10, color: '#27214D'}}>Welcome, Chris.</Text>
        </View>
        <Image source={cart} resizeMode='contain'/>
        </View>
        <View>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 10}}>
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

export default Welcome
import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { cart,menu } from '../assets/images';

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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column'
    
  },
});

export default Welcome
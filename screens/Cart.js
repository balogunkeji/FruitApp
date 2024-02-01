import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn, Button } from '../components/Button';

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BackBtn/>
          <Text style={{fontSize: 24, fontWeight: 500, color: '#fff'}}>My Basket</Text>
        </View>
        <View style={styles.footer}>
          <View>
            <Text>Total:</Text>
            <Text>Total:</Text>
          </View>
          <Button text='Checkout' color='#fff' width='199' backgroundColor={'#FFA451'}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header:{
    backgroundColor: "#FFA451",
    height: 166,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 40,
    paddingTop: 80,
    gap: 32,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    
  },
  body:{
  },
  footer:{
    backgroundColor: 'rgba(250,250,250,1)',
    height: 166,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center'
  }
});

export default Cart
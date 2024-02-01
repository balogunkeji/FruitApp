import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn, Button } from '../components/Button';
import Header from '../components/Header';

const OrderList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Header text={'Delivery Status'} onClick={() => navigation.goBack()}/>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
  }
});

export default OrderList
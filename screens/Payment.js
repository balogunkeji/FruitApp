import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Button } from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';

const Payment = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header text='Delivery Details'/>
        <View style={{marginHorizontal: 30, justifyContent: 'flex-start'}}>
          <Input placeholder='10th avenue, Lekki, Lagos.'   label='Your delivery address'/>
          <Input placeholder='09090909090'   label='Number we can call'/>
          <View style={{marginVertical: 40, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button backgroundColor={'rgba(252, 246, 240, 1)'} width={156} color={'rgba(240, 134, 38, 1)'} text={'Pay on delivery'}/>
            <Button backgroundColor={'rgba(252, 246, 240, 1)'} width={156} color={'rgba(240, 134, 38, 1)'} text={'Pay with card'} handleClick={() => navigation.navigate('Payment')}/>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: 'center',
    },
  });
export default Payment
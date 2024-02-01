import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Button } from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';

const Payment = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header text='Add Card' onClick={() => navigation.goBack()}/>
        <View style={{marginHorizontal: 30, justifyContent: 'flex-start', gap: 20}}>
          <Input placeholder='10th avenue, Lekki, Lagos.'   label='Card holder’s name'/>
          <Input placeholder='09090909090'   label='Card number'/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Input placeholder='MM/YY'   label='Date' width={156}/>
          <Input placeholder='057'   label='CVC' width={156}/>
          </View>
        </View>
        <View style={{justifyContent: 'center', marginTop: 40, alignSelf: 'center'}}>
            <Button text='Continue' color='#fff' width={242} backgroundColor={'#FFA451'} handleClick={() => navigation.navigate('TrackOrder')}/>
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
import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { calls, customer, delivery, dot, line, map, order, orderTaken, tick } from '../assets/images';

const OrderList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Header text={'Delivery Status'} onClick={() => navigation.goBack()}/>
        <View style={styles.body}>
          <View style={styles.card}>
            <View style={styles.cardImg}>
              <View style={{width: 65, height: 64, borderRadius: 10, backgroundColor: 'rgba(255, 250, 235, 1)', alignItems: 'center', justifyContent: 'center'}} >
              <Image source={customer}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 500}}>Order Taken</Text>
            </View>
            <Image source={tick}/>
          </View>
          <Image source={line} style={{marginLeft: 30}}/>
          <View style={styles.card}>
            <View style={styles.cardImg}>
              <View style={{width: 65, height: 64, borderRadius: 10, backgroundColor: 'rgba(241, 239, 246, 1)', alignItems: 'center', justifyContent: 'center'}} >
              <Image source={order}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 500}}>Order is being processed</Text>
            </View>
            <Image source={tick}/>
          </View>
          <Image source={line} style={{marginLeft: 30}}/>
          <View style={styles.card}>
            <View style={styles.cardImg}>
              <View style={{width: 65, height: 64, borderRadius: 10, backgroundColor: 'rgba(254, 240, 240, 1)', alignItems: 'center', justifyContent: 'center'}} >
              <Image source={delivery}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 500}}>Order is being processed</Text>
            </View>
            <Image source={calls}/>
          </View>
          <Image source={line} style={{marginLeft: 30}}/>
          <Image source={map}/>
          <Image source={line} style={{marginLeft: 30}}/>
          <View style={styles.card}>
            <View style={styles.cardImg}>
              <View style={{width: 65, height: 64, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}} >
              <Image source={orderTaken} style={{width: 65, height: 64}}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 500}}>Order Received</Text>
            </View>
            <Image source={dot}/>
          </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body:{
    marginTop: 150,
    marginHorizontal: 30,
  },
  card:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImg:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
});

export default OrderList
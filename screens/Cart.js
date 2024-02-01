import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import Header from '../components/Header';
import { VarietiesCard } from '../utilities';
import { minus } from '../assets/images';

const Cart = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Header text={'My Basket'} onClick={() => navigation.goBack()}/>
        
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
          {VarietiesCard.map((item) => {
            return (
              <View key={item.id} style={styles.card}>
                <View style={{flexDirection: 'row', gap: 20}}>
                  <View style={{width: 65, height: 64, borderRadius: 10, backgroundColor: item.bg, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={item.img} resizeMode='contain' style={{width: 40, height: 40}}/>
                  </View>
                  <View style={{gap: 3}}>
                    <Text style={{color: 'rgba(51, 51, 51, 1)', fontWeight: 500, fontSize: 16}}>{item.text}</Text>
                    <Text style={{fontSize: 12, fontWeight: 300}}>2 packs</Text>
                    <Text style={{color: 'rgba(51, 51, 51, 1)', fontWeight: 500, fontSize: 16}}>{item.price}</Text>
                  </View>
                </View>
                <View>
                  <Image source={minus}/>
                </View>
              </View>
            )
          })}
          </View>
          </ScrollView>
        
        <View style={styles.footer}>
          <View>
            <Text style={{color: 'rgba(51, 51, 51, 1)'}}>Total:</Text>
            <Text style={{color: 'rgba(39, 33, 77, 1)', fontSize: 24, fontWeight: 500}}>₦60,000:</Text>
          </View>
          <Button text='Checkout' color='#fff' width={199} backgroundColor={'#FFA451'} handleClick={() => navigation.navigate('Checkout')}/>
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
    marginHorizontal: 30,
    justfySelf:'flex-start',
    marginTop: 160,
    gap: 50,
  },
  card:{
   flexDirection: 'row',
   justifyContent: 'space-between', 
   alignItems: 'center',
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

export default Cart
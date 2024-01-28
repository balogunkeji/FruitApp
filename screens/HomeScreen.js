import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, FlatList, ScrollView } from 'react-native'
import { cart,search, biSearch, menu } from '../assets/images';
import { Menu, Menu2, RecommendedCard } from '../utilities/index';
import { RecommendedCards } from '../components/Cards';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.body}>
        <View style={{flexDirection: 'row', gap: 50, paddingTop: 40, alignItems: 'center'}}>
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
        <View style={styles.menu}>
            <FlatList data={Menu} keyExtractor={item => item} renderItem={({item}) => <View style={[styles.list, styles.shadowProp]}><Text style={{color: '#333333'}}>{item}</Text></View>} horizontal scrollEnabled showsHorizontalScrollIndicator={false}/>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'flex-start', gap: 10}}>
        <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10}}>
          <Text style={{color:'rgba(39, 33, 77, 1)', fontSize: 18}}>Recommended Combo</Text>
          <View style={{width: 70, height: 2, backgroundColor: 'rgba(255, 164, 81, 1)'}}></View>
        </View> 
        <View style={{alignItems: 'center', gap: 10, marginTop: 10 }}>
        <FlatList data={RecommendedCard} keyExtractor={item => item.id} renderItem={({item}) => <View style={{marginLeft: 10}}><RecommendedCards icon={item.icon} img={item.img} text={item.text} price={item.price} icon2={item.icon2}/></View> } horizontal/> 
        </View>
        </View>
        <View>
        <FlatList data={Menu2} keyExtractor={item => item} renderItem={({item}) => <View><Text style={{color: '#333333'}}>{item}</Text></View>} horizontal scrollEnabled showsHorizontalScrollIndicator={false}/>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
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
      width: '100%',
      paddingHorizontal: 24,
      // alignItems: 'center',

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
  menu: {
    height: 40,
    background: '#fafafa',
    marginVertical: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },

  list: {
    marginLeft: 8,
    height: 32,
    backgroundColor: '#fff',
    alignSelf: 'center',
    paddingHorizontal: 16,
    padding: 8,
    borderRadius: 10,
    fontSize: 16,
  },
  shadowProp: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

});

export default HomeScreen
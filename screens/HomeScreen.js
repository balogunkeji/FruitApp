import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, FlatList, ScrollView, SafeAreaViewBase } from 'react-native'
import { cart,search, biSearch, menu } from '../assets/images';
import { Menu, Menu2, RecommendedCard } from '../utilities/index';
import { RecommendedCards } from '../components/Cards';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Recommended, Welcome } from '../components/Welcome';
const HomeScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 24}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome/>
        <Recommended RecommendedCard={RecommendedCard} Menu={Menu} styles={styles}/>
        <Recommended RecommendedCard={RecommendedCard} Menu={Menu} styles={styles}/>
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    
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
  
  
  menu: {
    marginTop: 30,
    marginBottom: 50,
  },

  list: {
    marginLeft: 8,
    height: 35,
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
import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, FlatList, ScrollView, SafeAreaViewBase } from 'react-native'
import { cart,search, biSearch, menu } from '../assets/images';
import { Menu, Menu2, RecommendedCard, VarietiesCard } from '../utilities/index';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Recommended, Varieties, Welcome, WelcomeHeaderLeft, WelcomeHeaderRight } from '../components/Welcome';
const HomeScreen = ({navigation}) => {
  const objectFromArr = RecommendedCard.reduce((acc, cur, index) => {
    acc[index] = cur;
    return acc;
  }, {});
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 24, paddingTop: 40}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30}}>
          <WelcomeHeaderLeft/>
          <WelcomeHeaderRight/>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome/>
        <Recommended RecommendedCard={RecommendedCard} Menu={Menu} styles={styles} onClick={() => navigation.navigate('Detail', {item: objectFromArr})}/>
        <Varieties VarietiesCard={VarietiesCard} styles={styles} onClick={() => navigation.navigate('Detail', {item: VarietiesCard})}/>
      </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: '100%',
    
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
    marginTop: 20,
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
import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, FlatList, ScrollView } from 'react-native'
import { cart,search, biSearch, menu } from '../assets/images';
import { Menu, Menu2, RecommendedCard } from '../utilities/index';
import { RecommendedCards } from '../components/Cards';
import { SafeAreaView } from 'react-native-safe-area-context';
import Welcome from '../components/Welcome';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Welcome/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100%'
    
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
    // height: 40,
    // background: 'red',
    marginVertical: 50,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
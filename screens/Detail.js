import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { breakfast, minus, plus } from '../assets/images';
import Footer from '../components/Footer';
import { BackBtn } from '../components/Button';

const Detail = ({route, navigation}) => {
    const { item } = route.params
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.img}>
            <BackBtn onClick={() => navigation.goBack()}/>
            <View style={{alignSelf:'center'}}>
                <Image source={breakfast}/>
            </View>
        </View>
        <View style={styles.info}>
            <ScrollView  showsVerticalScrollIndicator={false}>
            <View style={[styles.infoHeader,{marginBottom: 30}]}>
                <Text style={{fontSize: 24, fontWeight: 500, color: 'rgba(39, 33, 77, 1)', textTransform: 'capitalize'}}>{item.text}</Text>
                <View style={{flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', marginTop: 30,}}>
                    <View style={{flexDirection: 'row', gap: 24, alignItems: "center"}}>
                        <Image source={minus}/>
                        <Text style={{fontSize: 24, fontWeight: 500, color: 'rgba(39, 33, 77, 1)', textTransform: 'capitalize'}}>1</Text>
                        <Image source={plus}/>
                    </View>
                    <Text style={{fontSize: 24, fontWeight: 500, color: 'rgba(39, 33, 77, 1)', textTransform: 'capitalize'}}>{item.price}</Text>
                </View>
            </View>
            <View style={styles.infoBody}>
            <View
          
        >
          <Text style={{ color: "rgba(39, 33, 77, 1)", fontSize: 18, fontWeight: 400, lineHeight: 30 }}>
            This combo contains:
          </Text>
          <View
            style={{
              width: 70,
              height: 2,
              backgroundColor: "rgba(255, 164, 81, 1)",
            }}
          ></View>
        </View>
        <View style={styles.combo}>
            {item.combo.map((text, index) => (
                <View style={styles.list} key={index}>
                    <Text style={{color: 'rgba(64, 62, 62, 1)'}}>{text}</Text>
                </View>
            ))}
        </View>
            </View>
            <View style={{marginVertical: 10}}>
                <Text style={{color: 'rgba(51, 51, 51, 1)', fontSize: 14, lineHeight: 24, fontWeight: 300}}>{item.inst}</Text>
            </View>
            </ScrollView>
            <Footer onClick={() => {navigation.navigate('Cart'); console.log('clicked')}}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      backgroundColor: 'rgba(255, 164, 81, 1)',
    },
    img: {
        paddingVertical: 40,
        paddingHorizontal: 30,
    },
    button: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 85,
        height: 32,
        paddingHorizontal: 8,
        borderRadius: 100,
        marginBottom: 30,
    },
    info:{
        backgroundColor: '#fff',
        height: 500,
        borderRadius: '16 16 0 0',
        paddingHorizontal: 30,
        paddingVertical: 30,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    infoBody:{
      borderBottomColor: 'rgba(243, 243, 243, 1)',
      borderTopColor: 'rgba(243, 243, 243, 1)',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      paddingVertical: 15
    },
    combo:{
        flexDirection: 'row',
        marginTop: 25,
        flexWrap: 'wrap',
        gap: 10,
    },
    list:{
    height: 35,
    backgroundColor: '#f3f3f3',
    alignSelf: 'center',
    padding: 8,
    borderRadius: 10,
    fontSize: 16,
    }
  });
  

export default Detail;
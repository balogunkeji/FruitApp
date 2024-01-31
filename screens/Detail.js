import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { breakfast } from '../assets/images';

const Detail = ({navigation, route}) => {
    const { item } = route.params
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.img}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                <Text>{'<'}</Text>
                <Text>Go Back</Text>
            </TouchableOpacity>
            <View style={{alignSelf:'center'}}>
                <Image source={breakfast}/>
            </View>
        </View>
        <View style={styles.info}>

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
    }
  });
  

export default Detail;
import React, {useRef} from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { orderTaken } from '../assets/images';
import { Button } from '../components/Button';
import LottieView from 'lottie-react-native';


const TrackOrder = ({navigation}) => {
  const animation = useRef(null);
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 300,
          height: 300,
        }}
        source={require('../assets/lottie/order.json')}
      />
        <View style={{marginVertical: 30, justifyContent: 'center', gap: 10}}>
            <Text style={{fontSize: 24, fontWeight: 500, color: 'rgba(39, 33, 77, 1)', textAlign: 'center'}}>Order Taken</Text>
            <Text style={{fontSize: 16, fontWeight: 300, color: 'rgba(17, 17, 17, 1)', textAlign: 'center', width: 250}}>Your order have been taken and is being attended to</Text>
        </View>
        <View style={{justifyContent: 'center', gap: 15, marginTop: 20}}>
            <Button text='Track Order' color='#fff' width={208} backgroundColor={'#FFA451'} handleClick={() => navigation.navigate('OrderList')}/>
            <Button text='Continue Shopping' color='rgba(240, 134, 38, 1)' width={208} backgroundColor={'rgba(252, 246, 240, 1)'} handleClick={() => navigation.navigate('Home')}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: 'center',
      alignItems: 'center'
    },
  });
export default TrackOrder
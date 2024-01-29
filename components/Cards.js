import { Image, View, Text, StyleSheet } from "react-native"
export const RecommendedCards = ({icon, img, text, price, icon2}) => {
    return (
        <View style={[styles.card, styles.shadowProp]}>
           <View style={{alignSelf: 'flex-end'}}>
            <Image source={icon} />
           </View>
            <Image source={img}/>
            <Text style={{fontWeight: 500, color: 'rgba(39, 33, 77, 1)'}}>{text}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 40}}>
                <Text style={{fontWeight: 500, color: 'rgba(240, 134, 38, 1)'}}>{price}</Text>
                <Image source={icon2}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        width: 153,
        height: 183,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
        gap: 10
    },
    shadowProp: {
        shadowColor: 'rgba(32, 32, 32, 0.05)',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 1.5,
        shadowRadius: 3,
      },
})
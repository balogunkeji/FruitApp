import { StyleSheet, View, Image } from "react-native";
import { loveGroup } from "../assets/images";
import {Button} from "./Button";

const Footer = ({onClick}) => {
    return (
      <View style={styles.container}>
        <Image source={loveGroup}/>
        <Button text="Add To Basket" width={219} backgroundColor={'#FFA451'} color={'#fff'} onClick={() => onClick()}/>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
  });
  
  export default Footer;
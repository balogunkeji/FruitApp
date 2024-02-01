import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { loveGroup } from "../assets/images";
import { Button } from "./Button";

const Footer = ({ onClick }) => {
  return (
    <View style={styles.container}>
      <Image source={loveGroup} />
      <TouchableOpacity
        onPress={onClick}
        style={{
          width: 250,
          borderRadius: 10,
          backgroundColor: "#FFA451",
          height: 56,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 16 }}>
          Add to Basket
        </Text>
      </TouchableOpacity>
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

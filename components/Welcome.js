import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { cart, menu, biSearch, search } from "../assets/images";
import { RecommendedCards } from "./Cards";

export const WelcomeHeaderLeft = ({ handleClick }) => {
  return (
    <TouchableOpacity onPress={handleClick}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          marginTop: "-17%",
        }}
      >
        <Image source={menu} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            paddingVertical: 10,
            color: "#27214D",
          }}
        >
          Welcome, Chris.
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const WelcomeHeaderRight = ({ handleClick }) => {
  return (
    <TouchableOpacity onPress={handleClick}>
      <Image source={cart} resizeMode='contain' />
    </TouchableOpacity>
  );
};

export const Welcome = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <View style={styless.input}>
        <Image source={biSearch} />
        <TextInput placeholder='Chris' />
      </View>
      <Image source={search} />
    </View>
  );
};

export const Recommended = ({ RecommendedCard, Menu, styles }) => {
  return (
    <View style={styless.container}>
      <View style={styles?.menu}>
        <FlatList
          data={Menu}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={[styles?.list, styles?.shadowProp]}>
              <Text style={{ color: "#333333" }}>{item}</Text>
            </View>
          )}
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        style={{ justifyContent: "center", alignItems: "flex-start", gap: 10 }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 10,
          }}
        >
          <Text style={{ color: "rgba(39, 33, 77, 1)", fontSize: 18 }}>
            Recommended Combo
          </Text>
          <View
            style={{
              width: 70,
              height: 2,
              backgroundColor: "rgba(255, 164, 81, 1)",
            }}
          ></View>
        </View>
        <View style={{ alignItems: "center", gap: 10, marginTop: 10 }}>
          <FlatList
            data={RecommendedCard}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ marginLeft: 10 }}>
                <RecommendedCards
                  icon={item.icon}
                  img={item.img}
                  text={item.text}
                  price={item.price}
                  icon2={item.icon2}
                />
              </View>
            )}
            horizontal
          />
        </View>
      </View>
    </View>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 24,
    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  input: {
    width: "90%",
    height: 56,
    borderRadius: 10,
    borderColor: "transparent",
    backgroundColor: "#F7F5F5",
    paddingLeft: 10,
    color: "#1D1C1A",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 10,
  },
});

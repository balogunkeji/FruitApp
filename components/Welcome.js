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
import { RecommendedCards, VarietiesCards } from "./Cards";
import Input from "./Input";

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
      <Image source={cart} resizeMode='contain' style={{ marginTop: -20 }} />
    </TouchableOpacity>
  );
};

export const Welcome = () => {
  return (
    <View
      style={{
        
        flexDirection: "row",
        gap: 10,
      }}
    >
      <Input placeholder='chris' icon={biSearch} width={290}/>
      <Image source={search} />
    </View>
  );
};

export const Recommended = ({ RecommendedCard, Menu, styles, onClick }) => {
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
            marginTop: 10,
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
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <FlatList
            data={RecommendedCard}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={{ marginLeft: 8, marginRight: 10 }} onPress={onClick}>
                <RecommendedCards
                  icon={item.icon}
                  img={item.img}
                  text={item.text}
                  price={item.price}
                  icon2={item.icon2}
                />
              </TouchableOpacity>
            )}
            horizontal
          />
        </View>
      </View>
    </View>
  );
};

export const Varieties = ({ VarietiesCard, onClick }) => {
  const [menu, setMenu] = React.useState({
    Hottest: true,
    Popular: false,
    New: false,
  });
  return (
    <View style={styless.container}>
      <View
        style={{ justifyContent: "center", alignItems: "flex-start", gap: 10 }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 30,
            flexDirection: "row",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              setMenu({ Hottest: true, Popular: false, New: false })
            }
          >
            <Text
              style={{
                color: menu.Hottest ? "rgba(39, 33, 77, 1)" : "rgba(180, 180, 192, 1)",
                fontSize: 18,
                paddingBottom: 5,
              }}
            >
              Hottest
            </Text>
            <View
            style={{
              width: 50,
              height: 4,
              backgroundColor: menu.Hottest? "rgba(255, 164, 81, 1)" : 'transparent',
            }}
          ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setMenu({ Hottest: false, Popular: true, New: false })
            }
          >
            <Text
              style={{
                color: menu.Popular ? "rgba(39, 33, 77, 1)" : "rgba(180, 180, 192, 1)",
                fontSize: 18,
                paddingBottom: 5,
              }}
            >
              Popular
            </Text>
            <View
            style={{
              width: 50,
              height: 4,
              backgroundColor: menu.Popular ? "rgba(255, 164, 81, 1)" : 'transparent',
            }}
          ></View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setMenu({ Hottest: false, Popular: false, New: true })
            }
          >
            <Text
              style={{
                color: menu.New ? "rgba(39, 33, 77, 1)" : "rgba(180, 180, 192, 1)",
                fontSize: 18,
                paddingBottom: 5,
              }}
            >
              New Combo
            </Text>
            <View
            style={{
              width: 50,
              height: 4,
              backgroundColor: menu.New ? "rgba(255, 164, 81, 1)" : 'transparent',
            }}
          ></View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <FlatList
            data={VarietiesCard}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={{ marginLeft: 8, marginRight: 10 }} onPress={onClick}>
                <VarietiesCards
                  icon={item.icon}
                  img={item.img}
                  text={item.text}
                  price={item.price}
                  icon2={item.icon2}
                  bg={item.bg}
                />
              </TouchableOpacity>
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
    marginVertical: 20,
  },
  
});

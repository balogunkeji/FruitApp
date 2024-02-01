import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, Login, WelcomeScreen, Detail, Cart, Checkout, TrackOrder, Payment  } from "./screens";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "red" },
          }}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#FFA451" },
          }}
        />
         <Stack.Screen
          name='Detail'
          component={Detail}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#FFA451" },
          }}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#FFA451" },
          }}
        />
        <Stack.Screen
          name='Checkout'
          component={Checkout}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#FFA451" },
          }}
        />
          <Stack.Screen
          name='TrackOrder'
          component={TrackOrder}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#FFA451" },
          }}
        />
        <Stack.Screen
          name='Payment'
          component={Payment}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#FFA451" },
          }}
        />
        <Stack.Screen
          name='WelcomeScreen'
          component={WelcomeScreen}
          options={{ headerShown: false, title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, Login, WelcomeScreen, Detail  } from "./screens";
import Basket from "./screens/Cart";

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
          name='Basket'
          component={Basket}
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


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, Login, WelcomeScreen } from './screens';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false,  headerStyle: { backgroundColor: '#FFA451'} }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false,  headerStyle: { backgroundColor: '#FFA451'} }}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, title: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

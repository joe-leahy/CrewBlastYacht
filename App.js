import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login_1 from './screens/Login_1';
import Login_2 from './screens/Login_2';
import Home from './screens/Home';
import Register_1 from './screens/Register_1'
import RegisterCrew from './screens/RegisterCrew'
import RegisterManagement from './screens/RegisterManagement';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"/>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name ='Login_1' component={Login_1}/>
        <Stack.Screen options={{headerShown: false}} name ='Login_2' component={Login_2}/>
        <Stack.Screen options={{headerShown: false}} name ='Register_1' component={Register_1}/>
        <Stack.Screen options={{headerShown: false}} name ='RegisterCrew' component={RegisterCrew}/>
        <Stack.Screen options={{headerShown: false}} name ='RegisterManagement' component={RegisterManagement}/>
        <Stack.Screen options={{headerShown: false}} name ='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

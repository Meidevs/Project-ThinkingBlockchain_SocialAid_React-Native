import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './screens/MainScreen';
import AddSocialScreen from './screens/AddSocialScreen';
import SocialNowScreen from './screens/SocialNowScreen';
import MyinfoScreen from './screens/MyinfoScreen';

const Tabs = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tabs.Navigator initialRouteName="Main">
      <Tabs.Screen
        name='Main'
        component={MainScreen}
        options={{
          tabBarLabel: 'Main',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }} />
      <Tabs.Screen
        name='Add'
        component={AddSocialScreen}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="form" color={color} size={size} />
          ),
        }} />
      <Tabs.Screen
        name='Now'
        component={SocialNowScreen}
        options={{
          tabBarLabel: 'Now',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="barschart" color={color} size={size} />
          ),
        }} />
        <Tabs.Screen
        name='Myinfo'
        component={MyinfoScreen}
        options={{
          tabBarLabel: 'Myinfo',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }} />
    </Tabs.Navigator>
  )
}


const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode='none'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Main' component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
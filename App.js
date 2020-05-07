import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions, Button } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './screens/MainScreen';
import AddSocialScreen from './screens/AddSocialScreen';
import SocialNowScreen from './screens/SocialNowScreen';
import MyinfoScreen from './screens/MyinfoScreen';
import SearchScreen from './screens/SearchScreen';

const AuthStack = createStackNavigator()
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const MyinfoStack = createStackNavigator();

function LeftTitle() {
  return (
    <AntDesign name="form" size={24} />
  );
}

const MainStackScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Main'
        component={MainScreen}
      />
      <Drawer.Screen name='Search' component={SearchScreen} />
    </Drawer.Navigator >
  )
}

function MainTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="Main">
      <Tabs.Screen
        name='Main'
        component={MainStackScreen}
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

function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="Login">
        <AuthStack.Screen name='Login' component={LoginScreen} options={{ title: 'Sign In', headerShown: false }} />
        <AuthStack.Screen name='Register' component={RegisterScreen} options={{ title: 'Create Account' }} />
        <AuthStack.Screen name='MainTabs' component={MainTabs} options={{ headerShown: false }} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
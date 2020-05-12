import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions, Button } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
import DetailsScreen from './screens/DetailsScreen';
import AlarmSetScreen from './screens/AlarmSetScreen';
import NowDetailsScreen from './screens/NowDetailsScreen';
import NowShowDetailsScreen from './screens/NowShowDetailsScreen';


const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator();
const NowStack = createStackNavigator();
const MyinfoStack = createStackNavigator();

function getTabBarVisible(route) {
  if (route.state == undefined) {
    return true;
  } else {
    if (route.state.index !== 0) {
      return false;
    }
    return true;
  }
}
const MyinfoStackScreen = () => {
  return (
    <MyinfoStack.Navigator>
      <MyinfoStack.Screen
        name='Myinfo'
        component={MyinfoScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#F2F2F2',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: null,
          headerLeft: null,
          headerRight: () =>
            <Octicons name='bell' size={20} style={{ marginRight: 20, }} />
        })}
      />
      <MyinfoStack.Screen
        name='Alarm'
        component={AlarmSetScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#F2F2F2',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: null,
        })}
      />
    </MyinfoStack.Navigator>
  )
}

const NowStackScreen = () => {
  return (
    <NowStack.Navigator>
      <NowStack.Screen
        name='SocialNow'
        component={SocialNowScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#7A8CAB',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: null,
          headerLeft: null,
          headerRight: () =>
            <Octicons name='bell' size={20} style={{ marginRight: 20, }} />
        })}
      />
      <NowStack.Screen 
        name='NowDetails'
        component={NowDetailsScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#F2F2F2',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: null,
        })}
      />
      <NowStack.Screen 
        name='NowShowDetails'
        component={NowShowDetailsScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#F2F2F2',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: null,
        })}
      />
    </NowStack.Navigator>
  )
}
const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='Main'
        component={MainScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#FFFFFF',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: null,
          headerLeft: null,
          headerRight: () =>
            <View style={{flexDirection : 'row',}}>
              <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{padding : 10,}}>
                <Octicons name='search' size={20} />
              </TouchableOpacity>
              <Octicons name='bell' size={20} style={{ padding : 10, }} />
            </View>
        })}
      />
      <MainStack.Screen
        name='Search'
        component={SearchScreen}
        options={{
          headerStyle: {
            backgroundColor: '#F2F2F2',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: null,
        }}
      />
      <MainStack.Screen
        name='Details'
        component={DetailsScreen} 
        options={{
          headerStyle: {
            backgroundColor: '#7E90AE',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: null,
        }}/>
    </MainStack.Navigator >
  )
}

function MainTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="Main"
      drawerPosition="right">
      <Tabs.Screen
        name='Main'
        component={MainStackScreen}
        options={({ route }) => ({
          tabBarLabel: 'Main',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={24} />
          ),
          tabBarVisible: getTabBarVisible(route)
        })} />
      <Tabs.Screen
        name='Add'
        component={AddSocialScreen}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="form" color={color} size={24} />
          ),
        }} />
      <Tabs.Screen
        name='Now'
        component={NowStackScreen}
        options={({ route }) => ({
          tabBarLabel: 'Now',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="barschart" color={color} size={24} />
          ),
          tabBarVisible: getTabBarVisible(route)
        })} />
      <Tabs.Screen
        name='Myinfo'
        component={MyinfoStackScreen}
        options={({ route }) => ({
          tabBarLabel: 'Myinfo',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color="black" />
          ),
          tabBarVisible: getTabBarVisible(route)
        })} />
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
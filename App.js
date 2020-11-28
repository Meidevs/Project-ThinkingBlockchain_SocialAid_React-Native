import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import AddSocialScreen from './screens/AddSocialScreen';
import SocialNowScreen from './screens/SocialNowScreen';
import MyinfoScreen from './screens/MyinfoScreen';
import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';
import AlarmSetScreen from './screens/AlarmSetScreen';
import NowDetailsScreen from './screens/NowDetailsScreen';
import NowShowDetailsScreen from './screens/NowShowDetailsScreen';
import NoticeScreen from './screens/NoticeScreen';

const AuthStack = createStackNavigator()
const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator();
const NowStack = createStackNavigator();
const MyinfoStack = createStackNavigator();


// When the user pushes a tab, the pushed tab passes parameters to MyTabBar via MainTabs.Tabs.Navigator.tabBar(props).;
function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  //state : Array [Name, Params of BottomTabNavigation Component]
  //descriptor : navigation.Functions, Options, render(?) What is Render?
  return (
    <View style={{ flexDirection: 'row' }}>
      {/* state.routes[state.index].state.index == 0  */}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // Label is the Way to Put Name on BottomTabNavigator using Route Name
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        // change icons on/off
        const icons =
          options.tabBarLabel == '계모임'
            ? [require('./assets/images/ico_botNav_home.png'), require('./assets/images/ico_botNav_home_on.png')]
            : options.tabBarLabel == '만들기'
              ? [require('./assets/images/ico_botNav_make.png'), require('./assets/images/ico_botNav_make_on.png')]
              : options.tabBarLabel == '모임현황'
                ? [require('./assets/images/ico_botNav_state.png'), require('./assets/images/ico_botNav_current_on.png')]
                : [require('./assets/images/ico_botNav_more.png'), require('./assets/images/ico_botNav_more_on.png')]
        
        // "isFocused : true" means do nothing when the user presses the same tab button;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        // icon and text render area;
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginBottom: 5, }}
          >{isFocused ? <Image source={icons[1]} style={{ marginTop: 10, width: 20, height: 20, resizeMode: 'contain' }} /> : <Image source={icons[0]} style={{ marginTop: 10, width: 20, height: 20, resizeMode: 'contain' }} />}
            <Text style={{ fontSize: 12, color: isFocused ? '#4F79D5' : '#000000' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

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

// MyinfoStackScreen has a MyinfoScreen that shows information of user;
// AlarmSetScreen shows the lists of alarms that the user has earned;
// NoticeScreen shows a list of official announcements;

const MyinfoStackScreen = () => {
  return (
    <MyinfoStack.Navigator>
      <MyinfoStack.Screen
        name='Myinfo'
        component={MyinfoScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#F7F7F7',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: null,
          headerLeft: () => <Image source={require('./assets/images/logo_main.png')} style={{ width: 30, height: 30, resizeMode: 'contain', marginLeft: 10, }} />,
          headerRight: () =>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ padding: 8 }}>
                <Image source={require('./assets/images/ico_bell.png')} style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 10, }} />
              </View>
            </View>
        })}
      />
      <MyinfoStack.Screen
        name='Alarm'
        component={AlarmSetScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#F7F7F7',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: null,
        })}
      />
      <MyinfoStack.Screen
        name='Notice'
        component={NoticeScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#F7F7F7',
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

// NowStackScreen has a SocialNowScreen that shows information of user such as total engaged token count, revenue, etc..;
// NowDetailsScreen shows a list of the groups that have joined;
// NowShowDetailsScreen shows the details of the groups the user has joined;

const NowStackScreen = () => {
  return (
    <NowStack.Navigator>
      <NowStack.Screen
        name='SocialNow'
        component={SocialNowScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#8D9EFF',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: null,
          headerLeft: () => <Image source={require('./assets/images/logo_white.png')} style={{ width: 30, height: 30, resizeMode: 'contain', marginLeft: 10, }} />,
          headerRight: () =>
            <View style={{ flexDirection: 'row', }}>
              <View style={{ padding: 8 }}>
                <Image source={require('./assets/images/ico_bell_white.png')} style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 10, }} />
              </View>
            </View>
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

// MainStackScreen has a MainScreen that shows a list of groups;
// SearchScreen shows what the user has searched for;
// DetailScreen shows the details of the groups the user wants to join;
// In the options variable of MainStack.Screen, it define MainScreen's header styles;

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name='Main'
        component={MainScreen}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#f7f7f7',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitle: null,
          headerLeft: () => <Image source={require('./assets/images/logo_main.png')} style={{ width: 30, height: 30, resizeMode: 'contain', marginLeft: 10, }} />,
          headerRight: () =>
            <View style={{ flexDirection: 'row', }}>
              <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{ padding: 8, }}>
                <Image source={require('./assets/images/ico_search.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
              </TouchableOpacity>
              <View style={{ padding: 8 }}>
                <Image source={require('./assets/images/ico_bell.png')} style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 10, }} />
              </View>
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
          headerShown: false
        }} />
    </MainStack.Navigator >
  )
}

// MainTabs uses BottomTabNavigator which is supported by library of RN;
// Details of BottomTabElement is at the MyTabBar Element;
// If User active each tabs, MyTabBar get related parameter like routeName, index, etc..;
// MainTabs has MainStackScreen, AddSocialScreen, NowStackScreen, MyinfoStackScreen;
// getTabBarVisible function finds whether index number is 1 or not; 

function MainTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="Main"
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tabs.Screen
        name='Main'
        component={MainStackScreen}
        options={({ route }) => ({
          tabBarLabel: '계모임',
          tabBarVisible: getTabBarVisible(route)
        })} />
      <Tabs.Screen
        name='Add'
        component={AddSocialScreen}
        options={{
          tabBarLabel: '만들기',
        }} />
      <Tabs.Screen
        name='Now'
        component={NowStackScreen}
        options={({ route }) => ({
          tabBarLabel: '모임현황',
          tabBarVisible: getTabBarVisible(route)
        })} />
      <Tabs.Screen
        name='Myinfo'
        component={MyinfoStackScreen}
        options={({ route }) => ({
          tabBarLabel: '더보기',
          tabBarVisible: getTabBarVisible(route)
        })} />
    </Tabs.Navigator>
  )
}

// App function has AuthStack. AuthStack consists of two Screen, one is LoginScreen and the other is MainTabs;

function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="Login">
        <AuthStack.Screen
          name='Login'
          component={LoginScreen}
          options={{ title: 'Sign In', headerShown: false }}
        />
        <AuthStack.Screen
          name='MainTabs'
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
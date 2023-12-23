import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ProfileScreen,
  TopUpScreen,
  TransactionScreen,
} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../utils/Colors';

const Tab = createBottomTabNavigator();

const ICONS = {
  HOME: 'home',
  TOP_UP: 'money-check',
  TRANSACTION: 'wallet',
  AKUN: 'user',
};

const getTabBarIcon = (route, focused, color) => {
  let iconName;
  const iconSize = 20;

  switch (route.name) {
    case 'Home':
      iconName = focused ? ICONS.HOME : ICONS.HOME;
      break;
    case 'Top Up':
      iconName = focused ? ICONS.TOP_UP : ICONS.TOP_UP;
      break;
    case 'Transaction':
      iconName = focused ? ICONS.TRANSACTION : ICONS.TRANSACTION;
      break;
    case 'Akun':
      iconName = focused ? ICONS.AKUN : ICONS.AKUN;
      break;
    default:
      break;
  }

  return <Icon name={iconName} size={iconSize} color={color} />;
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.black,
        tabBarStyle: {height: 60, paddingBottom: 10},
        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcon(route, focused, color, size),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Top Up" component={TopUpScreen} />
      <Tab.Screen name="Transaction" component={TransactionScreen} />
      <Tab.Screen name="Akun" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Favorites';
import {Platform} from 'react-native';
import {Image} from 'react-native';
import Characters from '../Screens/Movies';
import Comics from '../Screens/Comics';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'white',
        tabBarLabelPosition: 'beside-icon',

        tabBarStyle: {
          backgroundColor: '#121212',
          // borderTopColor: 'transparent',
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}>
      <Screen
        name="Comics"
        component={Comics}
        options={{
          tabBarIcon: ({focused, size}) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/wolverine.png')
                  : require('../../assets/images/wolverine.png')
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Screen
        name="Movies"
        component={Characters}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="movie-filter" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
}

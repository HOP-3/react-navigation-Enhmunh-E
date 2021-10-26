/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/Home';
import AboutScreen from './src/screens/About';
import ScreenOne from './src/screens/ScreenOne';
import ScreenTwo from './src/screens/ScreenTwo';
import {RootStackParamList} from './src/screens/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else {
              iconName = focused ? 'book-outline' : 'bookmark';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      
      >
          <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="About" component={AboutScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="ScreenOne" component={ScreenOne} options={{ headerShown: false }}/>
        <Tab.Screen name="ScreenTwo" component={ScreenTwo} options={{ headerShown: false }}/>
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;

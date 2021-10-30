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
import {RootStackParamList} from './src/screens/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Messenger from './src/screens/Messenger';
import Details from './src/screens/Details';
import ListContainer from './src/screens/List';
import { SharedContainer } from './src/screens/Shared';
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
                ? 'american-football-outline' : 'american-football';
            } else if (route.name === 'About') {
              iconName = focused ? 'aperture-outline' : 'aperture-sharp';
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
          <Tab.Screen name="ListContainer" component={ListContainer} options={{ headerShown: false }}/>
          <Tab.Screen name="Messenger" component={Messenger} options={{ headerShown: false }}/>
          <Tab.Screen name="SharedContainer" component={SharedContainer} options={{ headerShown: false }} />
          {/* <Tab.Screen name="Firebase" component={Firebase} options={{ headerShown: false }}/> */}
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App; 
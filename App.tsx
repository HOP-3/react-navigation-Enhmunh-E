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

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/Home';
import {RootStackParamList} from './src/screens/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Messenger from './src/screens/Messenger';
import ListContainer from './src/screens/List';
import { SharedContainer } from './src/screens/Shared';
import Link from '@enhmunh-e/something.link'
import Loading from './src/screens/Loading';
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
          <Tab.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
          {/* <Link onPress={() => console.log("wtf")} text="hello"/> */}
          {/* <Tab.Screen name="Firebase" component={Firebase} options={{ headerShown: false }}/> */}
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App; 
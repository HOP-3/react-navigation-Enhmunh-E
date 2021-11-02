import React, { useEffect, useState, useRef } from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import Details from './Details';

type Props = NativeStackScreenProps<RootStackParamList, 'ListContainer'>;
const Stack = createNativeStackNavigator<RootStackParamList>();

type list = {
  age: undefined
  imageUrl: string
  details: string
  name: string
  id: string
  onpress: () => void;
}
const List = ({navigation}: Props) => {
  const [list, setList] = useState<list[]>([]);
  const flatListRef = useRef<any>(null);
  useEffect(() => {
    let m:list[] = [];
    const subscriber = firestore().collection('list').onSnapshot((snapshot:FirebaseFirestoreTypes.QuerySnapshot) => {
      m = [];
      snapshot.forEach((doc: FirebaseFirestoreTypes.DocumentData) => {
        m.push({...doc.data(), id: doc.id});
      });
      setList([...m]);
    });
    return () => subscriber();
  }, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action
      console.log(navigation)
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
        <FlatList
          ref={flatListRef}
          onContentSizeChange={() => flatListRef.current.scrollToEnd() }
          data={list} 
          renderItem={({ item }: { item: list }) => {
            return <ListComp {...item} onpress={() => navigation.navigate('Details', { data: item })}/>
          }}
          keyExtractor={item => item.id}
        />
        <Text>List</Text>
      </SafeAreaView>
  );
}
export const ListComp: React.FC<list> = ({ name, onpress }) => {
  return (
    <Pressable onPress={onpress}>
      <View style={{ height: 40 }}>
        <Text>{name}</Text>
      </View>
    </Pressable>
  );
};
const ListContainer = ({navigation}: Props) => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={List}/>
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default ListContainer;

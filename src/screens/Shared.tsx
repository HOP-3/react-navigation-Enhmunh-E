import React, { useEffect, useState, useRef } from 'react';
import { SharedElement } from 'react-navigation-shared-element';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import firestore, { FirebaseFirestoreTypes, firebase } from '@react-native-firebase/firestore';
import {Text, View, SafeAreaView, FlatList, Pressable, Image, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import {RootStackParamList} from './types';
import ListDetailScreen from './ListDetailScreen';
type Props = NativeStackScreenProps<RootStackParamList, 'Shared'>;
type SharedContainerProps = NativeStackScreenProps<RootStackParamList, 'SharedContainer'>;
const SharedStack = createSharedElementStackNavigator();
type list = {
  age: undefined
  imageUrl: string
  details: string
  name: string
  id: string
  onpress: () => void;
}
const Shared = ({navigation, route}: Props) => {
  const [list, setList] = useState<list[]>([]);
  const flatListRef = useRef<any>(null);
  useEffect(() => {
    console.log('aa')
    let m:list[] = [];
    firestore().collection('imagelist').get().then((snapshot:FirebaseFirestoreTypes.QuerySnapshot) => {
      m = [];
      snapshot.forEach((doc: FirebaseFirestoreTypes.DocumentData) => {
        m.push({...doc.data(), id: doc.id});
      });
      console.log(m);
      setList([...m]);
    });
    // return () => subscriber();/
  }, [])
  return (
    <SafeAreaView>
      <Text>Shared</Text>
        <FlatList
          ref={flatListRef}
          onContentSizeChange={() => flatListRef.current.scrollToEnd() }
          data={list} 
          numColumns={2}
          renderItem={({ item }: { item: list }) => {
            return <ListComp {...item} onpress={() => navigation.navigate('ListDetailScreen', { data: item })}/>
          }}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
  );
}
export const ListComp: React.FC<list> = ({name, id, imageUrl, onpress }) => {
  return (
    <Pressable onPress={onpress} style={{margin: 5}}>
       <SharedElement id={`item.${id}.imageUrl`}> 
         <Image source={{ uri: imageUrl }} style={{ height: 100, width: 100 }}/>
       </SharedElement>
     </Pressable>
  )
};
export const SharedContainer = ({navigation}: SharedContainerProps) => {
  const options = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: ({ current: { progress }}:any) => {
      return {
        cardStyle: {
          opacity: progress
        }
      }
    },
    // headerShown: false
  }
  return (
    <SharedStack.Navigator>
      <SharedStack.Screen name="Shared" component={Shared}/>
      <SharedStack.Screen name="ListDetailScreen" component={ListDetailScreen} options={options}/>
    </SharedStack.Navigator>
  );
};
export default SharedContainer;

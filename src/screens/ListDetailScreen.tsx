import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image, Text, View, Dimensions} from 'react-native';
import {RootStackParamList} from './types';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  SharedElement,
} from 'react-navigation-shared-element';
type Props = NativeStackScreenProps<RootStackParamList, 'ListDetailScreen'>;
const ListDetailScreen = ({route}: Props) => {
  const { data } = route.params;
  return (
    <SafeAreaView>
      <SharedElement id={`item.${data.id}.imageUrl`}>
        <Image source={{ uri: data.imageUrl }} style={{ height: '100%', width: '100%' }}/>
      </SharedElement>
    </SafeAreaView>
  );
};
ListDetailScreen.sharedElements = ({ route }:Props) => {
  const { data } = route.params;
  return [
    {
      id: `item.${data.id}.imageUrl`,
      animation: 'move',
      resize: 'clip'
    }
  ]
} 

export default ListDetailScreen;

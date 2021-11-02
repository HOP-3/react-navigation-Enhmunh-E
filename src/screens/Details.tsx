import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {RootStackParamList} from './types';
import Link from '../components/Link/Link';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({navigation, route}: Props) => {
    const { data } = route.params;
  return (
    <SafeAreaView>
      <Text>{data.age}</Text>
      <Text>{data.details}</Text>
      <Text>{data.id}</Text>
      <Text>{data.name}</Text>
    </SafeAreaView>
  );
};

export default Details;

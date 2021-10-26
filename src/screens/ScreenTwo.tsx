import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView, Text, View} from 'react-native';

import Link from '../components/Link';

import {RootStackParamList} from './types';

type Props = NativeStackScreenProps<RootStackParamList, 'ScreenTwo'>;

const ScreenTwo = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <Text>ScreenTwo</Text>
    </SafeAreaView>
  );
};

export default ScreenTwo;

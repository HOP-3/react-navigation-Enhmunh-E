import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView, Text, View} from 'react-native';

import Link from '../components/Link';

import {RootStackParamList} from './types';

type Props = NativeStackScreenProps<RootStackParamList, 'ScreenOne'>;

const ScreenOne = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <Text>ScreenOne</Text>
    </SafeAreaView>
  );
};

export default ScreenOne;

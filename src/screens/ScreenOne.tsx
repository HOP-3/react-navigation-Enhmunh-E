import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View} from 'react-native';

import Link from '../components/Link';

import {RootStackParamList} from './types';

type Props = NativeStackScreenProps<RootStackParamList, 'ScreenOne'>;

const ScreenOne = ({navigation}: Props) => {
  return (
    <View>
      <Link onPress={() => navigation.navigate('Home')} text="Go to Home" />
      <Link onPress={() => navigation.navigate('ScreenTwo')} text="Go to ScreenTwo" />
      <Link onPress={() => navigation.navigate('About')} text="Go to About" />
    </View>
  );
};

export default ScreenOne;

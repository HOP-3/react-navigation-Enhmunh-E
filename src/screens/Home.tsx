import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {RootStackParamList} from './types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Link from '@enhmunh-e/something.link';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Link onPress={() => console.log("wtf")} text="hello"/>
    </SafeAreaView>
  );
};

export default Home;

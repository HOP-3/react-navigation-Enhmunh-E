import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text } from 'react-native';
import {RootStackParamList} from './types';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import LoadingJson from '../assets/82892-wave.json'
type Props = NativeStackScreenProps<RootStackParamList, 'Loading'>;
const Loading = ({ navigation }: Props) => {

  return (
      <SafeAreaView style={{ flex: 1 }}>
        
        <LottieView source={require('../assets/82892-wave.json')} autoPlay loop/>
      </SafeAreaView>
  );
};

export default Loading;

import {
  FlatList,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Platform
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import React, { useEffect, useState, useRef } from 'react';
import firestore, { FirebaseFirestoreTypes, firebase } from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
type doc = {
  name: string
  id: string
}
type message = {
  name: string
  createdAt: object
  text: string
  id: string
}
export const MessageComp: React.FC<message> = ({ name, createdAt, text, id }) => {
  return (
      <View style={{ height: 40 }}>
        <Text>{text}</Text>
      </View>
  );
};
type Props = NativeStackScreenProps<RootStackParamList, 'Messenger'>;
const Messenger = ({navigation}: Props) => {
    const isDarkMode = useColorScheme() === 'dark';
    // const [users, setUsers] = useState<doc[]>([]);
    const [messages, setMessages] = useState<message[]>([]);
    const [text, onChangeText] = useState('');
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const flatListRef = useRef<any>(null);
    const onError = (error:any) => {
      console.error(error);
    }
    useEffect(() => {
      let m:message[] = [];
      const subscriber = firestore().collection('messages').orderBy("createdAt", "asc").onSnapshot((snapshot:FirebaseFirestoreTypes.QuerySnapshot) => {
        console.log("ydj endee orldo ;-;")
        m = [];
        snapshot.forEach((doc: FirebaseFirestoreTypes.DocumentData) => {
          m.push({...doc.data(), id: doc.id});
        });
        setMessages([...m]);
      }, onError);
      return () => subscriber();
    }, [])
    return (
      <SafeAreaView style={backgroundStyle}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <FlatList 
            ref={flatListRef}
            onContentSizeChange={() => flatListRef.current.scrollToEnd()}
            style={styles.mcontainer}
            data={messages} 
            renderItem={({ item }: { item: message }) => {
              return <MessageComp {...item}/>
            }}
            keyExtractor={item => item.id}
          />
          <View style={styles.inputContainer}>
            <TextInput style={[styles.mcontainer, styles.input]} value={text} onChangeText={onChangeText}/>
            <Pressable style={styles.send} onPress={async () => {
              if (text == '') return;
              onChangeText('');
              await firestore().collection('messages').add({ 
                text: text, 
                name: 'Emu', 
                createdAt: firebase.firestore.FieldValue.serverTimestamp() 
              });
              }}><Text>Send</Text></Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      width: '80%'
    }, container: {
      flex: 1,
      flexDirection: 'column',
    }, mcontainer: {
      // flex: 1,
      height: '90%',
      padding: 8
    }, inputContainer: {
      display: 'flex',
      flexDirection: 'row',
      margin: 8,
      height: '10%'
    }, send: {
      backgroundColor: 'red',
      height: 40,
      width: '15%',
      marginLeft: '5%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
export default Messenger;

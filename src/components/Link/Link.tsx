import React from 'react';

import {View, Text, Pressable, PressableProps, StyleSheet} from 'react-native';

type LinkType = PressableProps & {
  text: string;
};

export const Link = ({onPress, text, ...props}: LinkType) => {
  // This is the test commits
  return (
    <View>
      <Pressable onPress={onPress} {...props}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: {
    color: 'darkslategrey',
  },
});

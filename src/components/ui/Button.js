import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from '../../styles/styles';

export default function Button({ onPress, children, style, ...rest }) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]} {...rest}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

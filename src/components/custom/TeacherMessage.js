import React from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui';
import { styles } from '../../styles/styles';

export default function TeacherMessage() {
  const message = "Well done! You fixed the barrel and completed Task 2.";

  const handlePress = () => {
    console.log("TeacherMessage button clicked");
    alert("Keep up the good work!");
  };

  return (
    <View style={styles.teacherBox}>
      <Text style={styles.teacherTitle}>Teacher’s Message</Text>
      <Text style={styles.teacherText}>{message}</Text>
      <Button onPress={handlePress}>Acknowledge</Button>
    </View>
  );
}

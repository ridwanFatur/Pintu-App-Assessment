import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {sp, vw} from '../../core/helpers/sizeHelper';
import {blueColor} from '../../core/themeColor';

const RetryButton: React.FC<{onPress: () => void; message: string}> = ({
  onPress,
  message,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Pressable
        onPress={onPress}
        android_ripple={{color: 'white'}}
        style={styles.button}>
        <Text style={styles.buttonText}>Try Again</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  message: {
    color: 'black',
    fontSize: sp(6),
    marginBottom: vw(2),
  },
  button: {
    paddingHorizontal: vw(3),
    paddingVertical: vw(2),
    backgroundColor: blueColor,
  },
  buttonText: {
    color: 'white',
    fontSize: sp(6),
  },
});

export default RetryButton;

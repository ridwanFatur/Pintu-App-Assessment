import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DiscoverScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Discover Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {color: 'black'},
});

export default DiscoverScreen;

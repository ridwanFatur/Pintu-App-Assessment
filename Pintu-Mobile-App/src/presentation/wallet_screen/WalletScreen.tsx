import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WalletScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wallet Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {color: 'black'},
});

export default WalletScreen;

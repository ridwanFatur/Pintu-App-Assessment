import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {sp, vw} from '../../../core/helpers/sizeHelper';
import {rippleColor} from '../../../core/themeColor';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const MarketScreenHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Market</Text>
      <View style={styles.iconContainer}>
        <Pressable
          android_ripple={{color: rippleColor}}
          style={styles.iconButton}>
          <IconAntDesign size={vw(7)} name="staro" color="black" />
        </Pressable>
        <Pressable
          android_ripple={{color: rippleColor}}
          style={styles.iconButton}>
          <IconAntDesign size={vw(7)} name="search1" color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: vw(3.5),
    paddingVertical: vw(3.5),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: sp(10),
    color: 'black',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    width: vw(8),
    height: vw(8),
    marginRight: vw(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MarketScreenHeader;

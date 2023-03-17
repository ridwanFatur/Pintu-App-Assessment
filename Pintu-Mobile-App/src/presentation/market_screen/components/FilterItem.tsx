import {Pressable, StyleSheet, Text, View} from 'react-native';
import {vw, sp} from '../../../core/helpers/sizeHelper';
import {grayColorNavMenu, rippleColor} from '../../../core/themeColor';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {MarketFilter} from '../../../domain/entities/MarketFilter';
import React from 'react';

const FilterItem: React.FC<{item: MarketFilter}> = ({item}) => {
  return (
    <Pressable
      android_ripple={{color: rippleColor}}
      onPress={() => {}}
      style={styles.container}>
      <View style={styles.iconContainer}>
        <IconFontAwesome size={vw(4)} name={item.icon} color="black" />
      </View>
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: vw(4),
    borderColor: grayColorNavMenu,
    paddingHorizontal: vw(3.5),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: vw(1.75),
  },
  iconContainer: {
    width: vw(4),
    height: vw(4),
    marginRight: vw(1.5),
  },
  text: {
    color: 'black',
    fontSize: sp(5),
  },
});

export default FilterItem;

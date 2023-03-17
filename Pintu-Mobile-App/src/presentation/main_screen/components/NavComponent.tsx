import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {vw, sp} from '../../../core/helpers/sizeHelper';
import {NavMenu} from '../MainTab';
import NavIcon from './NavIcon';
import {rippleColor} from '../../../core/themeColor';

const NavComponent: React.FC<{
  navMenu: NavMenu;
  onPress: () => void;
  isSelected: boolean;
}> = ({navMenu, onPress, isSelected}) => {
  const iconSizeSelected = vw(7.5);
  const iconSize = vw(6.5);

  return (
    <Pressable
      style={styles.container}
      android_ripple={{color: rippleColor}}
      onPress={onPress}>
      <View style={styles.iconContainer}>
        <NavIcon
          iconSize={isSelected ? iconSizeSelected : iconSize}
          name={
            isSelected ? navMenu.iconSelected.name : navMenu.iconUnselected.name
          }
          iconType={
            isSelected
              ? navMenu.iconSelected.iconType
              : navMenu.iconUnselected.iconType
          }
        />
      </View>
      <Text
        style={[
          styles.text,
          isSelected ? styles.textSelected : styles.textUnselected,
        ]}>
        {navMenu.title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: vw(2),
    alignItems: 'center',
  },
  iconContainer: {
    width: vw(7.5),
    height: vw(7.5),
    marginBottom: vw(0.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: sp(4),
    textAlign: 'center',
    fontWeight: 'normal',
  },
  textSelected: {
    fontWeight: 'bold',
  },
  textUnselected: {},
});

export default NavComponent;

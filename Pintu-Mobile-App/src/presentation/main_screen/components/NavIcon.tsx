import React from 'react';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

export type IconType = 'IconMaterialCommunity' | 'IconIonicons';

const NavIcon: React.FC<{
  iconType: IconType;
  iconSize: number;
  name: string;
}> = ({iconType, iconSize, name}) => {
  if (iconType === 'IconMaterialCommunity') {
    return <IconMaterialCommunity size={iconSize} name={name} color="black" />;
  } else {
    return <IconIonicons size={iconSize} name={name} color="black" />;
  }
};

export default NavIcon;

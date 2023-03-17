import {IconType} from './components/NavIcon';

export type MainStackParamList = {
  HomeScreen: {};
  DiscoverScreen: {};
  MarketScreen: {};
  WalletScreen: {};
  AccountScreen: {};
};

export type NavMenu = {
  title: string;
  iconSelected: {
    name: string;
    iconType: IconType;
  };
  iconUnselected: {
    name: string;
    iconType: IconType;
  };
  route: keyof MainStackParamList;
};

export const navMenuList: NavMenu[] = [
  {
    title: 'Home',
    iconSelected: {iconType: 'IconMaterialCommunity', name: 'home'},
    iconUnselected: {iconType: 'IconMaterialCommunity', name: 'home-outline'},
    route: 'HomeScreen',
  },
  {
    title: 'Discover',
    iconSelected: {iconType: 'IconMaterialCommunity', name: 'text-box-search'},
    iconUnselected: {
      iconType: 'IconMaterialCommunity',
      name: 'text-box-search-outline',
    },
    route: 'DiscoverScreen',
  },
  {
    title: 'Market',
    iconSelected: {iconType: 'IconIonicons', name: 'bar-chart'},
    iconUnselected: {iconType: 'IconIonicons', name: 'bar-chart-outline'},
    route: 'MarketScreen',
  },
  {
    title: 'Wallet',
    iconSelected: {iconType: 'IconIonicons', name: 'wallet'},
    iconUnselected: {iconType: 'IconIonicons', name: 'wallet-outline'},
    route: 'WalletScreen',
  },
  {
    title: 'Account',
    iconSelected: {iconType: 'IconMaterialCommunity', name: 'account-edit'},
    iconUnselected: {
      iconType: 'IconMaterialCommunity',
      name: 'account-edit-outline',
    },
    route: 'AccountScreen',
  },
];

import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {MainScreenNavigationProp, MainScreenRouteProp} from '../../Router';
import DiscoverScreen from '../discover_screen/DiscoverScreen';
import HomeScreen from '../home_screen/HomeScreen';
import AccountScreen from '../account_screen/AccountScreen';
import WalletScreen from '../wallet_screen/WalletScreen';
import NavComponent from './components/NavComponent';
import {navMenuList} from './MainTab';
import {grayColorNavMenu} from '../../core/themeColor';
import MarketScreenContext from '../market_screen/MarketScreenContext';

type Props = {
  navigation: MainScreenNavigationProp;
  route: MainScreenRouteProp;
};

const MainScreen: React.FC<Props> = () => {
  const [indexMenu, setIndexMenu] = useState<number>(2);

  const renderScreen = () => {
    switch (indexMenu) {
      case 0:
        return <HomeScreen />;
      case 1:
        return <DiscoverScreen />;
      case 2:
        return <MarketScreenContext />;
      case 3:
        return <WalletScreen />;
      case 4:
        return <AccountScreen />;
      default:
        return <MarketScreenContext />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>{renderScreen()}</View>
      <View style={styles.navContainer}>
        <View style={styles.navSeparator} />
        <View style={styles.navMenuContainer}>
          {navMenuList.map((e, index) => {
            return (
              <NavComponent
                key={e.route}
                navMenu={e}
                isSelected={indexMenu === index}
                onPress={() => {
                  if (indexMenu !== index) {
                    setIndexMenu(index);
                  }
                }}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  navContainer: {
    width: '100%',
  },
  navSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: grayColorNavMenu,
  },
  navMenuContainer: {
    width: '100%',
    flexDirection: 'row',
  },
});

export default MainScreen;

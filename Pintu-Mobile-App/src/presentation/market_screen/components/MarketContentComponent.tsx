import React, {useCallback} from 'react';
import {View, Text, Pressable, FlatList, StyleSheet} from 'react-native';
import {vw} from '../../../core/helpers/sizeHelper';
import {rippleColor, separationGreyColor} from '../../../core/themeColor';
import DetailCurrencyItem from './DetailCurrencyItem';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {TradeData} from '../../../domain/entities/type';
import {WalletSupportedCurrencyEntity} from '../../../domain/entities/WalletSupportedCurrencyEntity';

const MarketContentComponent: React.FC<{data: TradeData}> = ({data}) => {
  const renderItem = useCallback(
    ({item}: {item: WalletSupportedCurrencyEntity}) => {
      const itemPriceChange = data[1][item.getIDRCode()];
      let latestPrice = '0';
      let dayChange = '0';
      if (itemPriceChange !== undefined) {
        latestPrice = itemPriceChange.latestPrice;
        dayChange = itemPriceChange.day;
      }
      return (
        <DetailCurrencyItem
          item={item}
          currency={latestPrice}
          dayChange={dayChange}
        />
      );
    },
    [data],
  );

  return (
    <View style={styles.container}>
      <View style={styles.sortContainer}>
        <Text style={styles.sortText}>Sort By</Text>
        <Pressable
          style={styles.sortButton}
          android_ripple={{color: rippleColor}}>
          <Text style={styles.sortButtonText}>Default</Text>
          <View style={styles.sortButtonIcon}>
            <IconEntypo size={vw(4)} name="chevron-thin-down" color="black" />
          </View>
        </Pressable>
      </View>
      <FlatList
        keyExtractor={(_, index) => `${index}`}
        data={data[0]}
        renderItem={renderItem}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: vw(3.5),
    marginVertical: vw(3),
  },
  sortText: {
    color: 'black',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortButtonText: {
    color: 'black',
    marginRight: vw(2),
  },
  sortButtonIcon: {
    width: vw(4),
    height: vw(4),
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: separationGreyColor,
  },
});

export default MarketContentComponent;

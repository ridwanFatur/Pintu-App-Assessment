import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {sp, vw} from '../../../core/helpers/sizeHelper';
import {
  redColor,
  rippleColor,
  textColorCurrencySymbol,
} from '../../../core/themeColor';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {WalletSupportedCurrencyEntity} from '../../../domain/entities/WalletSupportedCurrencyEntity';
import {
  getLatestPriceString,
  getPercentageColor,
  getPercentageString,
} from '../../../domain/entities/PriceChangeEntity';

const DetailCurrencyItem: React.FC<{
  item: WalletSupportedCurrencyEntity;
  currency: string;
  dayChange: string;
}> = React.memo(
  ({item, currency, dayChange}) => {
    return (
      <Pressable android_ripple={{color: rippleColor}} style={styles.container}>
        <View style={styles.logoContainer}>
          <SvgUri width={vw(9)} height={vw(9)} uri={item.logo} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.currencyGroupText}>{item.currencyGroup}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{`Rp ${getLatestPriceString(
            currency,
          )}`}</Text>
          <View style={styles.dayChangeContainer}>
            <View style={styles.caretContainer}>
              <IconAntDesign
                size={vw(3.5)}
                name={
                  getPercentageColor(dayChange) === redColor
                    ? 'caretdown'
                    : 'caretup'
                }
                color={getPercentageColor(dayChange)}
              />
            </View>
            <Text
              style={[
                styles.dayChangeText,
                {color: getPercentageColor(dayChange)},
              ]}>
              {getPercentageString(dayChange)}%
            </Text>
          </View>
        </View>
      </Pressable>
    );
  },
  (prevProps, nextProps) => prevProps.item === nextProps.item,
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: vw(3.5),
    paddingVertical: vw(3.5),
    alignItems: 'center',
  },
  logoContainer: {
    width: vw(9),
    height: vw(9),
    marginRight: vw(2),
  },
  textContainer: {
    flexGrow: 1,
    marginRight: vw(2),
  },
  nameText: {
    color: 'black',
    fontSize: sp(5.5),
    fontWeight: 'bold',
  },
  currencyGroupText: {
    color: textColorCurrencySymbol,
    fontSize: sp(5.5),
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceText: {
    color: 'black',
    fontSize: sp(5.8),
    fontWeight: 'bold',
    marginBottom: vw(1),
  },
  dayChangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caretContainer: {
    width: vw(3.5),
    height: vw(3.5),
    marginRight: vw(2),
  },
  dayChangeText: {
    fontSize: sp(4.5),
  },
});

export default DetailCurrencyItem;

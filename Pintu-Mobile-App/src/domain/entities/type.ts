import {PriceChangeEntity} from './PriceChangeEntity';
import {WalletSupportedCurrencyEntity} from './WalletSupportedCurrencyEntity';

export type PriceChangeMapType = {
  [pair: string]: PriceChangeEntity;
};

export type TradeData = [WalletSupportedCurrencyEntity[], PriceChangeMapType];

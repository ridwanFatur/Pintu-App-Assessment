import { type PriceChangeEntity } from './PriceChangeEntity'
import { type WalletSupportedCurrencyEntity } from './WalletSupportedCurrencyEntity'

export type PriceChangeMapType = Record<string, PriceChangeEntity>

export type TradeData = [WalletSupportedCurrencyEntity[], PriceChangeMapType]

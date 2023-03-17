import { WalletSupportedCurrencyEntity } from '../../domain/entities/WalletSupportedCurrencyEntity'
import { DetailWalletModel } from './DetailWalletModel'

export class WalletSupportedCurrencyModel {
  currencyGroup: string
  color: string
  currencySymbol: string
  name: string
  logo: string
  decimalPoint: number
  listingDate: string
  wallets: DetailWalletModel[]

  constructor ({
    currencyGroup,
    color,
    currencySymbol,
    name,
    logo,
    decimalPoint,
    listingDate,
    wallets
  }: {
    currencyGroup: string
    color: string
    currencySymbol: string
    name: string
    logo: string
    decimalPoint: number
    listingDate: string
    wallets: DetailWalletModel[]
  }) {
    this.currencyGroup = currencyGroup
    this.color = color
    this.currencySymbol = currencySymbol
    this.name = name
    this.logo = logo
    this.decimalPoint = decimalPoint
    this.listingDate = listingDate
    this.wallets = wallets
  }

  static fromJson (json: any): WalletSupportedCurrencyModel {
    return new WalletSupportedCurrencyModel({
      currencyGroup: json.currencyGroup,
      color: json.color,
      currencySymbol: json.currencySymbol,
      name: json.name,
      logo: json.logo,
      decimalPoint: json.decimal_point,
      listingDate: json.listingDate,
      wallets: json.wallets.map((e: any) => DetailWalletModel.fromJson(e))
    })
  }

  toEntity (): WalletSupportedCurrencyEntity {
    return new WalletSupportedCurrencyEntity({
      currencyGroup: this.currencyGroup,
      color: this.color,
      currencySymbol: this.currencySymbol,
      name: this.name,
      logo: this.logo,
      decimalPoint: this.decimalPoint,
      listingDate: this.listingDate,
      wallets: this.wallets.map(e => e.toEntity())
    })
  }
}

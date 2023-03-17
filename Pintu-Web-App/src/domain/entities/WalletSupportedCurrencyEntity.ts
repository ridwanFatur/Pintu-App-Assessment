import { type DetailWalletEntity } from './DetailWalletEntity'

export class WalletSupportedCurrencyEntity {
  currencyGroup: string
  color: string
  currencySymbol: string
  name: string
  logo: string
  decimalPoint: number
  listingDate: string
  wallets: DetailWalletEntity[]

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
    wallets: DetailWalletEntity[]
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

  getIDRCode (): string {
    return `${this.currencyGroup.toLowerCase()}/idr`
  }
}

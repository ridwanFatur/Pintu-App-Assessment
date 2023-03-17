export class Urls {
  // Base Url
  static BASE_URL: string = 'https://api.pintu.co.id/v2';

  static WALLET_SUPPORTED_CURRENCIES: string = `${this.BASE_URL}/wallet/supportedCurrencies`;
  static TRADE_PRICE_CHANGES: string = `${this.BASE_URL}/trade/price-changes`;
}

export class DetailWalletEntity {
  currencyGroup: string;
  tokenSymbol: string;
  decimalPoint: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: string;
  blockchainName: string;
  logo: string;

  constructor({
    currencyGroup,
    tokenSymbol,
    decimalPoint,
    tokenType,
    blockchain,
    explorer,
    listingDate,
    blockchainName,
    logo,
  }: {
    currencyGroup: string;
    tokenSymbol: string;
    decimalPoint: number;
    tokenType: string;
    blockchain: string;
    explorer: string;
    listingDate: string;
    blockchainName: string;
    logo: string;
  }) {
    this.currencyGroup = currencyGroup;
    this.tokenSymbol = tokenSymbol;
    this.decimalPoint = decimalPoint;
    this.tokenType = tokenType;
    this.blockchain = blockchain;
    this.explorer = explorer;
    this.listingDate = listingDate;
    this.blockchainName = blockchainName;
    this.logo = logo;
  }
}

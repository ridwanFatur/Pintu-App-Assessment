import {DetailWalletEntity} from '../../domain/entities/DetailWalletEntity';

export class DetailWalletModel {
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

  static fromJson(json: any): DetailWalletModel {
    return new DetailWalletModel({
      currencyGroup: json.currencyGroup,
      tokenSymbol: json.tokenSymbol,
      decimalPoint: json.decimal_point,
      tokenType: json.tokenType,
      blockchain: json.blockchain,
      explorer: json.explorer,
      listingDate: json.listingDate,
      blockchainName: json.blockchainName,
      logo: json.logo,
    });
  }

  toEntity(): DetailWalletEntity {
    return new DetailWalletEntity({
      currencyGroup: this.currencyGroup,
      tokenSymbol: this.tokenSymbol,
      decimalPoint: this.decimalPoint,
      tokenType: this.tokenType,
      blockchain: this.blockchain,
      explorer: this.explorer,
      listingDate: this.listingDate,
      blockchainName: this.blockchainName,
      logo: this.logo,
    });
  }
}

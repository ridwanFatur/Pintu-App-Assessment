import {DetailWalletModel} from '../../../src/data/models/DetailWalletModel';
import {DetailWalletEntity} from '../../../src/domain/entities/DetailWalletEntity';

describe('DetailWalletModel', () => {
  const walletData = {
    currencyGroup: 'IDR',
    tokenSymbol: 'IDRT',
    decimalPoint: 2,
    tokenType: 'ERC-20',
    blockchain: 'Ethereum',
    explorer: 'https://etherscan.io/tx/',
    listingDate: '2020-09-15T09:43:42.000Z',
    blockchainName: 'Ethereum',
    logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg',
  };

  it('should create a new DetailWalletModel', () => {
    const walletModel = new DetailWalletModel(walletData);

    expect(walletModel.currencyGroup).toEqual(walletData.currencyGroup);
    expect(walletModel.tokenSymbol).toEqual(walletData.tokenSymbol);
    expect(walletModel.decimalPoint).toEqual(walletData.decimalPoint);
    expect(walletModel.tokenType).toEqual(walletData.tokenType);
    expect(walletModel.blockchain).toEqual(walletData.blockchain);
    expect(walletModel.explorer).toEqual(walletData.explorer);
    expect(walletModel.listingDate).toEqual(walletData.listingDate);
    expect(walletModel.blockchainName).toEqual(walletData.blockchainName);
    expect(walletModel.logo).toEqual(walletData.logo);
  });

  it('should convert from JSON to DetailWalletModel', () => {
    const walletJson = {
      currencyGroup: 'IDR',
      tokenSymbol: 'IDRT',
      decimal_point: 2,
      tokenType: 'ERC-20',
      blockchain: 'Ethereum',
      explorer: 'https://etherscan.io/tx/',
      listingDate: '2020-09-15T09:43:42.000Z',
      blockchainName: 'Ethereum',
      logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg',
    };

    const walletModel = DetailWalletModel.fromJson(walletJson);

    expect(walletModel.currencyGroup).toEqual(walletJson.currencyGroup);
    expect(walletModel.tokenSymbol).toEqual(walletJson.tokenSymbol);
    expect(walletModel.decimalPoint).toEqual(walletJson.decimal_point);
    expect(walletModel.tokenType).toEqual(walletJson.tokenType);
    expect(walletModel.blockchain).toEqual(walletJson.blockchain);
    expect(walletModel.explorer).toEqual(walletJson.explorer);
    expect(walletModel.listingDate).toEqual(walletJson.listingDate);
    expect(walletModel.blockchainName).toEqual(walletJson.blockchainName);
    expect(walletModel.logo).toEqual(walletJson.logo);
  });

  it('should convert from DetailWalletModel to DetailWalletEntity', () => {
    const walletModel = new DetailWalletModel(walletData);
    const walletEntity = walletModel.toEntity();

    expect(walletEntity).toBeInstanceOf(DetailWalletEntity);
    expect(walletEntity.currencyGroup).toEqual(walletData.currencyGroup);
    expect(walletEntity.tokenSymbol).toEqual(walletData.tokenSymbol);
    expect(walletEntity.decimalPoint).toEqual(walletData.decimalPoint);
    expect(walletEntity.tokenType).toEqual(walletData.tokenType);
    expect(walletEntity.blockchain).toEqual(walletData.blockchain);
    expect(walletEntity.explorer).toEqual(walletData.explorer);
    expect(walletEntity.listingDate).toEqual(walletData.listingDate);
    expect(walletEntity.blockchainName).toEqual(walletData.blockchainName);
    expect(walletEntity.logo).toEqual(walletData.logo);
  });
});

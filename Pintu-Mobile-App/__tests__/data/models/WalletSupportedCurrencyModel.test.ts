import {DetailWalletModel} from '../../../src/data/models/DetailWalletModel';
import {WalletSupportedCurrencyModel} from '../../../src/data/models/WalletSupportedCurrencyModel';
import {WalletSupportedCurrencyEntity} from '../../../src/domain/entities/WalletSupportedCurrencyEntity';

describe('WalletSupportedCurrencyModel', () => {
  const data = {
    currencyGroup: 'IDR',
    color: '#0A68F4',
    currencySymbol: 'Rp',
    name: 'Rupiah Token',
    logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_IDRT.svg',
    decimalPoint: 0,
    listingDate: '2020-03-11T15:13:52.000Z',
    wallets: [
      new DetailWalletModel({
        currencyGroup: 'IDR',
        tokenSymbol: 'IDRT',
        decimalPoint: 2,
        tokenType: 'ERC-20',
        blockchain: 'Ethereum',
        explorer: 'https://etherscan.io/tx/',
        listingDate: '2020-09-15T09:43:42.000Z',
        blockchainName: 'Ethereum',
        logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg',
      }),
    ],
  };

  it('should create a new WalletSupportedCurrencyModel', () => {
    const model = new WalletSupportedCurrencyModel(data);

    expect(model.currencyGroup).toEqual(data.currencyGroup);
    expect(model.color).toEqual(data.color);
    expect(model.currencySymbol).toEqual(data.currencySymbol);
    expect(model.name).toEqual(data.name);
    expect(model.logo).toEqual(data.logo);
    expect(model.decimalPoint).toEqual(data.decimalPoint);
    expect(model.listingDate).toEqual(data.listingDate);
  });

  it('should convert from JSON to WalletSupportedCurrencyModel', () => {
    const json = {
      currencyGroup: 'IDR',
      color: '#0A68F4',
      currencySymbol: 'Rp',
      name: 'Rupiah Token',
      logo: 'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_IDRT.svg',
      decimal_point: 0,
      listingDate: '2020-03-11T15:13:52.000Z',
      wallets: [
        {
          currencyGroup: 'IDR',
          tokenSymbol: 'IDRT',
          decimal_point: 2,
          tokenType: 'ERC-20',
          blockchain: 'Ethereum',
          explorer: 'https://etherscan.io/tx/',
          listingDate: '2020-09-15T09:43:42.000Z',
          blockchainName: 'Ethereum',
          logo: 'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg',
        },
      ],
    };

    const model = WalletSupportedCurrencyModel.fromJson(json);

    expect(model.currencyGroup).toEqual(json.currencyGroup);
    expect(model.color).toEqual(json.color);
    expect(model.currencySymbol).toEqual(json.currencySymbol);
    expect(model.name).toEqual(json.name);
    expect(model.logo).toEqual(json.logo);
    expect(model.decimalPoint).toEqual(json.decimal_point);
    expect(model.listingDate).toEqual(json.listingDate);
  });

  it('should convert from WalletSupportedCurrencyModel to WalletSupportedCurrencyEntity', () => {
    const model = new WalletSupportedCurrencyModel(data);
    const entity = model.toEntity();

    expect(entity).toBeInstanceOf(WalletSupportedCurrencyEntity);
    expect(entity.currencyGroup).toEqual(data.currencyGroup);
    expect(entity.color).toEqual(data.color);
    expect(entity.currencySymbol).toEqual(data.currencySymbol);
    expect(entity.name).toEqual(data.name);
    expect(entity.logo).toEqual(data.logo);
    expect(entity.decimalPoint).toEqual(data.decimalPoint);
    expect(entity.listingDate).toEqual(data.listingDate);
  });
});

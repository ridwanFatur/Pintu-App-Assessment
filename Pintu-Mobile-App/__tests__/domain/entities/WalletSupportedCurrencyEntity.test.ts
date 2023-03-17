import {DetailWalletEntity} from '../../../src/domain/entities/DetailWalletEntity';
import {WalletSupportedCurrencyEntity} from '../../../src/domain/entities/WalletSupportedCurrencyEntity';

describe('WalletSupportedCurrencyEntity', () => {
  it('WalletSupportedCurrencyEntity properties', () => {
    const currencyGroup: string = 'IDR';
    const color: string = '#0A68F4';
    const currencySymbol: string = 'Rp';
    const name: string = 'Rupiah Token';
    const logo: string =
      'https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_IDRT.svg';
    const decimalPoint: number = 0;
    const listingDate: string = '2020-03-11T15:13:52.000Z';
    const wallets: DetailWalletEntity[] = [
      new DetailWalletEntity({
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
    ];

    const entity = new WalletSupportedCurrencyEntity({
      currencyGroup,
      color,
      currencySymbol,
      name,
      logo,
      decimalPoint,
      listingDate,
      wallets,
    });

    expect(entity.currencyGroup).toBe(currencyGroup);
    expect(entity.color).toBe(color);
    expect(entity.currencySymbol).toBe(currencySymbol);
    expect(entity.name).toBe(name);
    expect(entity.logo).toBe(logo);
    expect(entity.decimalPoint).toBe(decimalPoint);
    expect(entity.listingDate).toBe(listingDate);
    expect(entity.wallets).toBe(wallets);
    expect(entity.getIDRCode()).toBe(
      `${entity.currencyGroup.toLowerCase()}/idr`,
    );
  });
});

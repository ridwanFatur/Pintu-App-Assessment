import {DetailWalletEntity} from '../../../src/domain/entities/DetailWalletEntity';

describe('DetailWalletEntity', () => {
  it('DetailWalletEntity properties', () => {
    const currencyGroup = 'IDR';
    const tokenSymbol = 'IDRT';
    const decimalPoint = 2;
    const tokenType = 'ERC-20';
    const blockchain = 'Ethereum';
    const explorer = 'https://etherscan.io/tx/';
    const listingDate = '2020-09-15T09:43:42.000Z';
    const blockchainName = 'Ethereum';
    const logo =
      'https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/ERC-20.svg';

    const entity = new DetailWalletEntity({
      currencyGroup,
      tokenSymbol,
      decimalPoint,
      tokenType,
      blockchain,
      explorer,
      listingDate,
      blockchainName,
      logo,
    });

    expect(entity.currencyGroup).toBe(currencyGroup);
    expect(entity.tokenSymbol).toBe(tokenSymbol);
    expect(entity.decimalPoint).toBe(decimalPoint);
    expect(entity.tokenType).toBe(tokenType);
    expect(entity.blockchain).toBe(blockchain);
    expect(entity.explorer).toBe(explorer);
    expect(entity.listingDate).toBe(listingDate);
    expect(entity.blockchainName).toBe(blockchainName);
    expect(entity.logo).toBe(logo);
  });
});

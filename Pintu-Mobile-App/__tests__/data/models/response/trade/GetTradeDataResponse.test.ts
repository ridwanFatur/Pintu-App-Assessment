import {GetTradeDataResponse} from '../../../../../src/data/models/response/trade/GetTradeDataResponse';
import {WalletSupportedCurrencyEntity} from '../../../../../src/domain/entities/WalletSupportedCurrencyEntity';

describe('GetTradeDataResponse', () => {
  it('should convert from JSON to GetTradeDataResponse and can convert to Entity', () => {
    const jsonSupportedCurrencies = {
      payload: [
        {
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
        },
      ],
    };

    const jsonPriceChange = {
      payload: [
        {
          pair: 'alice/idr',
          latestPrice: '22969',
          day: '-9.53',
          week: '1.83',
          month: '-11.16',
          year: '-72.15',
        },
      ],
    };

    const responseModel = GetTradeDataResponse.fromJson(
      jsonPriceChange,
      jsonSupportedCurrencies,
    );

    const entities = responseModel.toEntities();

    expect(entities[0][0]).toBeInstanceOf(WalletSupportedCurrencyEntity);
  });
});

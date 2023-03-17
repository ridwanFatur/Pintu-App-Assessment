import {Urls} from '../../core/constants/Urls';
import {TradeData} from '../../domain/entities/type';
import {GetTradeDataQuery} from '../../domain/query/GetTradeDataQuery';
import {axiosInterceptor} from '../../serviceLocator';
import {GetTradeDataResponse} from '../models/response/trade/GetTradeDataResponse';

const GetTradeDataQueryImpl: GetTradeDataQuery =
  async (): Promise<TradeData> => {
    const responsePriceChange = await axiosInterceptor.instance.get(
      Urls.TRADE_PRICE_CHANGES,
    );
    const responseSupportedCurrencies = await axiosInterceptor.instance.get(
      Urls.WALLET_SUPPORTED_CURRENCIES,
    );

    if (
      responsePriceChange.status === 200 &&
      responseSupportedCurrencies.status === 200
    ) {
      const responseModel = GetTradeDataResponse.fromJson(
        responsePriceChange.data,
        responseSupportedCurrencies.data,
      );
      return responseModel.toEntities();
    } else {
      throw new Error('Server Error');
    }
  };

export default GetTradeDataQueryImpl;

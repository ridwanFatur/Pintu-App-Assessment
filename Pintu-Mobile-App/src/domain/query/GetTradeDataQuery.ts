import {TradeData} from '../entities/type';

export interface GetTradeDataQuery {
  (): Promise<TradeData>;
}

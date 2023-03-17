import React, {createContext, useEffect} from 'react';
import {TradeData} from '../../domain/entities/type';
import MarketScreen from './MarketScreen';
import {useQuery} from 'react-query';
import GetTradeDataQuery from '../../data/impl_query/GetTradeDataQueryImpl';

interface MarketStateContextProps {
  data: TradeData | undefined;
  isLoading: boolean;
  error: unknown;
  refectch: () => void;
}

export const MarketStateContext = createContext<MarketStateContextProps>({
  data: undefined,
  isLoading: false,
  error: undefined,
  refectch: () => {},
});

const MarketScreenContext: React.FC = () => {
  const {data, isLoading, error, refetch} = useQuery<TradeData>(
    'tokenList',
    GetTradeDataQuery,
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [refetch]);

  return (
    <MarketStateContext.Provider
      value={{
        data,
        isLoading,
        error,
        refectch: () => {
          refetch();
        },
      }}>
      <MarketScreen />
    </MarketStateContext.Provider>
  );
};

export default MarketScreenContext;

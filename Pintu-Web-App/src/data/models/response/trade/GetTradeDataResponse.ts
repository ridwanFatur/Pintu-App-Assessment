import { type PriceChangeMapType, type TradeData } from '../../../../domain/entities/type'
import { type WalletSupportedCurrencyEntity } from '../../../../domain/entities/WalletSupportedCurrencyEntity'
import { PriceChangeModel } from '../../PriceChangeModel'
import { WalletSupportedCurrencyModel } from '../../WalletSupportedCurrencyModel'

export class GetTradeDataResponse {
  dataPriceChange: PriceChangeModel[]
  dataSupportedCurrencies: WalletSupportedCurrencyModel[]

  constructor ({
    dataPriceChange,
    dataSupportedCurrencies
  }: {
    dataPriceChange: PriceChangeModel[]
    dataSupportedCurrencies: WalletSupportedCurrencyModel[]
  }) {
    this.dataPriceChange = dataPriceChange
    this.dataSupportedCurrencies = dataSupportedCurrencies
  }

  static fromJson (
    jsonPriceChange: any,
    jsonSupportedCurrencies: any
  ): GetTradeDataResponse {
    return new GetTradeDataResponse({
      dataPriceChange: jsonPriceChange.payload.map((e: any) =>
        PriceChangeModel.fromJson(e)
      ),
      dataSupportedCurrencies: jsonSupportedCurrencies.payload.map((e: any) =>
        WalletSupportedCurrencyModel.fromJson(e)
      )
    })
  }

  toEntities (): TradeData {
    const dataSupportedCurrencies: WalletSupportedCurrencyEntity[] =
      this.dataSupportedCurrencies.map(e => e.toEntity())
    const dataPriceChange: PriceChangeMapType = {}
    for (const item of this.dataPriceChange) {
      dataPriceChange[item.pair] = item.toEntity()
    }
    return [dataSupportedCurrencies, dataPriceChange]
  }
}

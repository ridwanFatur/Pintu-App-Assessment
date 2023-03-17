import React, { useCallback } from 'react'
import { grayColorNavMenu } from '../../../core/themeColor'
import { type TradeData } from '../../../domain/entities/type'
import { type WalletSupportedCurrencyEntity } from '../../../domain/entities/WalletSupportedCurrencyEntity'
import DetailCurrencyItem from './DetailCurrencyItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { PriceChangeEntity } from '../../../domain/entities/PriceChangeEntity'

const MarketContentComponent: React.FC<{ data: TradeData }> = ({ data }) => {
  const renderItem = useCallback(
    ({
      item,
      index
    }: {
      item: WalletSupportedCurrencyEntity
      index: number
    }) => {
      let itemPriceChange = new PriceChangeEntity({
        pair: 'idr',
        latestPrice: '0',
        day: '0',
        week: '0',
        month: '0',
        year: '0'
      })

      if (data[1][item.getIDRCode()] !== undefined) {
        itemPriceChange = data[1][item.getIDRCode()]
      }

      return (
        <div key={index}>
          <div
            className="w-full h-[1px]"
            style={{
              backgroundColor: grayColorNavMenu
            }}
          ></div>
          <DetailCurrencyItem item={item} priceChange={itemPriceChange} />
        </div>
      )
    },
    [data]
  )

  return (
    <div className="p-0 flex flex-col md:px-[20px]">
      <div
        className="flex w-full flex-col border-t border-b border-solid md:w-full md:self-center md:p-0 md:border md:rounded-[10px] lg:w-4/5"
        style={{
          borderColor: 'rgb(224, 215, 215)'
        }}
      >
        <div className="flex flex-row items-center justify-between p-[20px] md:hidden">
          <p>CRYPTO</p>
          <div className="flex flex-row items-center gap-3">
            <p>24 JAM</p>
            <ExpandMoreIcon
              className="text-black"
              style={{ width: '15px', height: '15px' }}
            />
          </div>
        </div>
        <div className="hidden md:flex md:flex-row md:gap-[10px] md:py-[20px] md:text-center md:text-[20px] md:text-gray-500 md:font-bold">
          <p className="flex-[2]">CRYPTO</p>
          <p className="flex-1">HARGA</p>
          <p className="flex-1">24 JAM</p>
          <p className="flex-1">1 MGG</p>
          <p className="flex-1">1 BLN</p>
          <p className="flex-1">1 THN</p>
        </div>
        {data[0].map((e, index) => {
          return renderItem({ item: e, index })
        })}
      </div>
    </div>
  )
}

export default MarketContentComponent

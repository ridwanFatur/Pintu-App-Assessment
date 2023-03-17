import React, { useCallback, useContext } from 'react'
import TopTokenComponent from './TopTokenComponent'
import SearchIcon from '@mui/icons-material/Search'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import { MarketStateContext } from '../MarketScreenContext'
import { type WalletSupportedCurrencyEntity } from '../../../domain/entities/WalletSupportedCurrencyEntity'

const TopTokenContent: React.FC = () => {
  const { data } = useContext(MarketStateContext)
  const renderItem = useCallback(
    ({
      item,
      index
    }: {
      item: WalletSupportedCurrencyEntity
      index: number
    }) => {
      let latestPrice = '0'
      let dayChange = '0'

      if (data !== undefined) {
        const itemPriceChange = data[1][item.getIDRCode()]
        if (itemPriceChange !== undefined) {
          latestPrice = itemPriceChange.latestPrice
          dayChange = itemPriceChange.day
        }
      }

      return (
        <TopTokenComponent
          key={index}
          item={item}
          currency={latestPrice}
          dayChange={dayChange}
        />
      )
    },
    [data]
  )

  return (
    <div className="flex flex-col w-full md:w-[calc(100%-40px)] md:self-center lg:w-[calc(80%-40px)]">
      <div className="flex flex-row items-center justify-between px-[20px] mb-[20px]">
        <h3 className="font-bold text-lg">
          Harga Crypto dalam Rupiah Hari Ini
        </h3>
        <div className="block md:hidden">
          <SearchIcon
            className="text-gray-500"
            style={{ width: '40px', height: '40px' }}
          />
        </div>
        <div className="hidden md:block">
          <input
            placeholder="Cari asset di Pintu..."
            className="text-base px-[20px] py-[10px] rounded-[5px]"
            style={{
              outline: 'none',
              backgroundColor: '#EDEDED'
            }}
          ></input>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3 px-[20px] mb-[20px]">
        <WhatshotIcon
          className="text-orange-500"
          style={{ width: '40px', height: '40px' }}
        />
        <h3 className="font-bold text-lg">Top Movers (24 Jam)</h3>
      </div>
      <div className="flex flex-row w-full gap-5 min-h-[120px] overflow-x-auto">
        {data !== undefined
          ? (
              data[0]
                .slice(0, data[0].length < 5 ? data[0].length : 5)
                .map((e, index) => {
                  return renderItem({ item: e, index })
                })
            )
          : (
          <div></div>
            )}
      </div>
    </div>
  )
}

export default TopTokenContent

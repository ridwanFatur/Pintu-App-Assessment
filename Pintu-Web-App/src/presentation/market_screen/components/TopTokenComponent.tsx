import React from 'react'
import {
  getLatestPriceString,
  getPercentageColor,
  getPercentageString
} from '../../../domain/entities/PriceChangeEntity'
import { type WalletSupportedCurrencyEntity } from '../../../domain/entities/WalletSupportedCurrencyEntity'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { redColor } from '../../../core/themeColor'

const TopTokenComponent: React.FC<{
  item: WalletSupportedCurrencyEntity
  currency: string
  dayChange: string
}> = ({ item, currency, dayChange }) => {
  return (
    <div
      className="flex flex-col gap-5 min-w-[200px] p-[20px] whitespace-nowrap"
    >
      <div
        className="flex flex-row items-center gap-3"
      >
        <img className="w-[45px] h-[45px]"
          src={item.logo}
          alt="logo-top-token"
        />
        <h4 className="text-xl">{item.name}</h4>
      </div>
      <p className="text-gray-500 text-base">
        Rp {getLatestPriceString(currency)}
      </p>
      <div
        className="flex flex-row items-center gap-3"
      >
        {getPercentageColor(dayChange) === redColor
          ? (
          <ArrowDropDownIcon
            style={{
              width: '30px',
              height: '30px',
              color: getPercentageColor(dayChange)
            }}
          />
            )
          : (
          <ArrowDropUpIcon
            style={{
              width: '30px',
              height: '30px',
              color: getPercentageColor(dayChange)
            }}
          />
            )}
        <p
          className="font-bold text-xl"
          style={{
            color: getPercentageColor(dayChange)
          }}
        >
          {getPercentageString(dayChange)}%
        </p>
      </div>
    </div>
  )
}

export default TopTokenComponent

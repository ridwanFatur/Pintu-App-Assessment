/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'
import {
  getLatestPriceString,
  getPercentageColor,
  getPercentageString,
  type PriceChangeEntity
} from '../../../domain/entities/PriceChangeEntity'
import { type WalletSupportedCurrencyEntity } from '../../../domain/entities/WalletSupportedCurrencyEntity'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { redColor } from '../../../core/themeColor'

const PercentageItem: React.FC<{ percentage: string }> = ({ percentage }) => {
  return (
    <div className="flex flex-row items-center gap-1">
      {getPercentageColor(percentage) === redColor
        ? (
        <ArrowDropDownIcon
          style={{
            width: '40px',
            height: '40px',
            color: getPercentageColor(percentage)
          }}
        />
          )
        : (
        <ArrowDropUpIcon
          style={{
            width: '40px',
            height: '40px',
            color: getPercentageColor(percentage)
          }}
        />
          )}

      <p
        className="font-bold text-lg"
        style={{
          color: getPercentageColor(percentage)
        }}
      >
        {getPercentageString(percentage)}%
      </p>
    </div>
  )
}

const DetailCurrencyItem: React.FC<{
  item: WalletSupportedCurrencyEntity
  priceChange: PriceChangeEntity
}> = React.memo(
  ({ item, priceChange }) => {
    return (
      <div>
        <div className="flex flex-row gap-[15px] px-[20px] py-[20px] items-center md:hidden">
          <img src={item.logo} className="w-[50px] h-[50px]" alt="logo-icon" />
          <div className="flex-1 flex flex-col">
            <p className="text-base font-bold">{item.name}</p>
            <p className="text-sm text-gray-500">{item.currencyGroup}</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-base font-bold">
              Rp {getLatestPriceString(priceChange.latestPrice)}
            </p>
            <div className="flex flex-row items-center gap-1">
              {getPercentageColor(priceChange.day) === redColor
                ? (
                <ArrowDropDownIcon
                  style={{
                    width: '40px',
                    height: '40px',
                    color: getPercentageColor(priceChange.day)
                  }}
                />
                  )
                : (
                <ArrowDropUpIcon
                  style={{
                    width: '40px',
                    height: '40px',
                    color: getPercentageColor(priceChange.day)
                  }}
                />
                  )}

              <p
                className="text-sm font-bold"
                style={{
                  color: getPercentageColor(priceChange.day)
                }}
              >
                {getPercentageString(priceChange.day)}%
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:flex-row md:items-center md:gap-[10px]">
          <div className="flex flex-row items-center gap-4 flex-[2]">
            <img
              src={item.logo}
              className="w-[50px] h-[50px] mt-[20px] mb-[20px] ml-[20px]"
              alt="logo-icon-md"
            />
            <div className="flex flex-col">
              <p className="text-base font-bold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.currencyGroup}</p>
            </div>
          </div>
          <p className="font-bold flex-1 text-lg text-center">
            Rp {getLatestPriceString(priceChange.latestPrice)}
          </p>
          <div className="flex-1 flex items-center justify-center">
            <PercentageItem percentage={priceChange.day} />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <PercentageItem percentage={priceChange.week} />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <PercentageItem percentage={priceChange.month} />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <PercentageItem percentage={priceChange.year} />
          </div>
        </div>
      </div>
    )
  },
  (prevProps, nextProps) => prevProps.item === nextProps.item
)

export default DetailCurrencyItem

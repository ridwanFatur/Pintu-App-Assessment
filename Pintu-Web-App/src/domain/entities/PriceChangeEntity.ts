import { greenColor, redColor } from '../../core/themeColor'

export class PriceChangeEntity {
  pair: string
  latestPrice: string
  day: string
  week: string
  month: string
  year: string

  constructor ({
    pair,
    latestPrice,
    day,
    week,
    month,
    year
  }: {
    pair: string
    latestPrice: string
    day: string
    week: string
    month: string
    year: string
  }) {
    this.pair = pair
    this.latestPrice = latestPrice
    this.day = day
    this.week = week
    this.month = month
    this.year = year
  }
}

export function getLatestPriceString (latestPrice: string): string {
  const number = parseInt(latestPrice.replace(/\D/g, ''), 10)
  return number
    .toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    .replace(/,/g, '.')
}

export function getPercentageString (percentage: string): string {
  if (percentage.includes('-')) {
    return percentage.replace('-', '')
  } else {
    return percentage
  }
}

export function getPercentageColor (percentage: string): string {
  if (percentage.includes('-')) {
    return redColor
  } else {
    return greenColor
  }
}

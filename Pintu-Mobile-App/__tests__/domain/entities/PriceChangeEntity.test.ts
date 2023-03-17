import {redColor} from '../../../src/core/themeColor';
import {
  getLatestPriceString,
  getPercentageColor,
  getPercentageString,
  PriceChangeEntity,
} from '../../../src/domain/entities/PriceChangeEntity';

describe('PriceChangeEntity', () => {
  it('PriceChangeEntity properties', () => {
    const pair: string = 'alice/idr';
    const latestPrice: string = '22969';
    const day: string = '-9.53';
    const week: string = '1.83';
    const month: string = '-11.16';
    const year: string = '-72.15';

    const entity = new PriceChangeEntity({
      pair,
      latestPrice,
      day,
      week,
      month,
      year,
    });

    expect(entity.pair).toBe(entity.pair);
    expect(entity.latestPrice).toBe(entity.latestPrice);
    expect(entity.day).toBe(entity.day);
    expect(entity.week).toBe(entity.week);
    expect(entity.month).toBe(entity.month);
    expect(entity.year).toBe(entity.year);
  });

  it('getLatestPriceString', () => {
    const latestPrice: string = '1234567';
    const latestPriceFormatted: string = '1.234.567';

    expect(getLatestPriceString(latestPrice)).toBe(latestPriceFormatted);
  });

  it('getPercentageString', () => {
    const percentage: string = '-8.90';

    expect(getPercentageString(percentage)).toBe('8.90');
  });

  it('getPercentageColor', () => {
    const percentage: string = '-8.90';

    expect(getPercentageColor(percentage)).toBe(redColor);
  });
});

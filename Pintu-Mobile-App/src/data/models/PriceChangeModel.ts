import {PriceChangeEntity} from '../../domain/entities/PriceChangeEntity';

export class PriceChangeModel {
  pair: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;

  constructor({
    pair,
    latestPrice,
    day,
    week,
    month,
    year,
  }: {
    pair: string;
    latestPrice: string;
    day: string;
    week: string;
    month: string;
    year: string;
  }) {
    this.pair = pair;
    this.latestPrice = latestPrice;
    this.day = day;
    this.week = week;
    this.month = month;
    this.year = year;
  }

  static fromJson(json: any): PriceChangeModel {
    return new PriceChangeModel({
      pair: json.pair,
      latestPrice: json.latestPrice,
      day: json.day,
      week: json.week,
      month: json.month,
      year: json.year,
    });
  }

  toEntity(): PriceChangeEntity {
    return new PriceChangeEntity({
      pair: this.pair,
      latestPrice: this.latestPrice,
      day: this.day,
      week: this.week,
      month: this.month,
      year: this.year,
    });
  }
}

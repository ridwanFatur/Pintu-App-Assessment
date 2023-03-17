import {PriceChangeModel} from '../../../src/data/models/PriceChangeModel';
import {PriceChangeEntity} from '../../../src/domain/entities/PriceChangeEntity';

describe('PriceChangeModel', () => {
  const priceChangeData = {
    pair: 'alice/idr',
    latestPrice: '22969',
    day: '-9.53',
    week: '1.83',
    month: '-11.16',
    year: '-72.15',
  };

  it('should create a new PriceChangeModel', () => {
    const priceChangeModel = new PriceChangeModel(priceChangeData);

    expect(priceChangeModel.pair).toEqual(priceChangeData.pair);
    expect(priceChangeModel.latestPrice).toEqual(priceChangeData.latestPrice);
    expect(priceChangeModel.day).toEqual(priceChangeData.day);
    expect(priceChangeModel.week).toEqual(priceChangeData.week);
    expect(priceChangeModel.month).toEqual(priceChangeData.month);
    expect(priceChangeModel.year).toEqual(priceChangeData.year);
  });

  it('should convert from JSON to PriceChangeModel', () => {
    const priceChangeJson = {
      pair: 'alice/idr',
      latestPrice: '22969',
      day: '-9.53',
      week: '1.83',
      month: '-11.16',
      year: '-72.15',
    };

    const priceChangeModel = PriceChangeModel.fromJson(priceChangeJson);

    expect(priceChangeModel.pair).toEqual(priceChangeJson.pair);
    expect(priceChangeModel.latestPrice).toEqual(priceChangeJson.latestPrice);
    expect(priceChangeModel.day).toEqual(priceChangeJson.day);
    expect(priceChangeModel.week).toEqual(priceChangeJson.week);
    expect(priceChangeModel.month).toEqual(priceChangeJson.month);
    expect(priceChangeModel.year).toEqual(priceChangeJson.year);
  });

  it('should convert from PriceChangeModel to PriceChangeEntity', () => {
    const priceChangeModel = new PriceChangeModel(priceChangeData);
    const priceChangeEntity = priceChangeModel.toEntity();

    expect(priceChangeEntity).toBeInstanceOf(PriceChangeEntity);
    expect(priceChangeEntity.pair).toEqual(priceChangeData.pair);
    expect(priceChangeEntity.latestPrice).toEqual(priceChangeData.latestPrice);
    expect(priceChangeEntity.day).toEqual(priceChangeData.day);
    expect(priceChangeEntity.week).toEqual(priceChangeData.week);
    expect(priceChangeEntity.month).toEqual(priceChangeData.month);
    expect(priceChangeEntity.year).toEqual(priceChangeData.year);
  });
});

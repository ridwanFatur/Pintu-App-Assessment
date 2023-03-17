import {MarketFilter} from '../../../src/domain/entities/MarketFilter';

describe('MarketFilter', () => {
  it('MarketFilter properties', () => {
    const title = 'new';
    const icon = 'dollar';

    const entity: MarketFilter = {
      title: title,
      icon: icon,
    };

    expect(entity.title).toBe(title);
    expect(entity.icon).toBe(icon);
  });
});

import React from 'react';
import {View, FlatList} from 'react-native';
import {vw} from '../../../core/helpers/sizeHelper';
import {marketFilterList} from '../../../domain/entities/MarketFilter';
import FilterItem from './FilterItem';

const MarketFilterSection: React.FC = () => {
  return (
    <View style={{height: vw(8)}}>
      <FlatList
        horizontal
        data={marketFilterList}
        keyExtractor={(_, index) => `${index}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <FilterItem item={item} />;
        }}
      />
    </View>
  );
};

export default MarketFilterSection;

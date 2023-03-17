import React, {useContext} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {sp, vw} from '../../core/helpers/sizeHelper';
import {blueColor} from '../../core/themeColor';
import {WarningMessage} from '../../core/constants/WarningMessage';
import RetryButton from '../global_components/RetryButton';
import MarketScreenHeader from './components/MarketScreenHeader';
import MarketContentComponent from './components/MarketContentComponent';
import {MarketStateContext} from './MarketScreenContext';
import MarketFilterSection from './components/MarketFilterSection';

const MarketScreen: React.FC = () => {
  const {data, isLoading, error, refectch} = useContext(MarketStateContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <MarketScreenHeader />
        <MarketFilterSection />

        <View style={styles.marketContentWrapper}>
          {isLoading && data === undefined ? (
            <View style={styles.centeredView}>
              <ActivityIndicator size={vw(15)} color={blueColor} />
            </View>
          ) : error instanceof Error && data === undefined ? (
            <View style={styles.centeredView}>
              <RetryButton
                onPress={() => {
                  refectch();
                }}
                message={error.message ?? WarningMessage.SOMETHING_WENT_WRONG}
              />
            </View>
          ) : data !== undefined ? (
            data[0].length === 0 ? (
              <View style={styles.centeredView}>
                <Text style={styles.noDataText}>No Data</Text>
              </View>
            ) : (
              <MarketContentComponent data={data} />
            )
          ) : (
            <View />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
  },
  marketContentWrapper: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataText: {
    fontSize: sp(6),
  },
});

export default MarketScreen;

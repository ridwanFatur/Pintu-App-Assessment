import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './presentation/splash_screen/SplashScreen';
import MainScreen from './presentation/main_screen/MainScreen';

type RootStackParamList = {
  SplashScreen: {};
  MainScreen: {};
};

// NavigationProp
export type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;
export type MainScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MainScreen'
>;

// RouteProp
export type SplashScreenRouteProp = RouteProp<
  RootStackParamList,
  'SplashScreen'
>;
export type MainScreenRouteProp = RouteProp<RootStackParamList, 'MainScreen'>;

const Stack = createStackNavigator<RootStackParamList>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

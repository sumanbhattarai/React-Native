import React from 'react';
import { StatusBar } from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

import BottomTab from './src/navigations/main';

const App = () => {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
      <StatusBar
        barStyle={scheme === 'dark' ? 'dark-content' : 'light-content'}
      />
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <BottomTab />
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default App;

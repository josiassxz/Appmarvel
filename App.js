import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import './config/ReactotronConfig';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store/store';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from './src/routes/app.routes';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './assets/css/base.less';
import { ThemeProvider } from 'styled-components'
import theme from 'assets/theme'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense fallback="loading">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App/>
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
);

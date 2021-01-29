import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/index';
import { Provider } from 'react-redux';

import './i18n/init';

import Tale from './components/Tale/Tale';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Tale />

  </Provider>,
  document.getElementById('root'),
);

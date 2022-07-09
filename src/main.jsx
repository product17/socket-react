import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import appStores from './stores';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

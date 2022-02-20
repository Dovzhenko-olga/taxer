import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
import storeObject from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeObject.store}>
      <PersistGate loading={null} persistor={storeObject.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
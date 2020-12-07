import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools());
// const persistor = persistStore(store);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

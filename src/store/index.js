import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


function ReduxStoreWrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
}

export default ReduxStoreWrapper;

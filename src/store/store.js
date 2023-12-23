// store.js
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import bannerReducer from './bannerSlice';
import userProfileReducer from './userProfileSlice';
import serviceReducer from './serviceSlice';
import balanceReducer from './balanceSlice';
import topupReducer from './topupSlice';
import transactionReducer from './transactionSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    banner: bannerReducer,
    userProfile: userProfileReducer,
    services: serviceReducer,
    balance: balanceReducer,
    topup: topupReducer,
    transaction: transactionReducer,
  },
});

export default store;

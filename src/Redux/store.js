import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import landlordReducer from './landlordSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    landlord: landlordReducer,
   },
});

export default store;

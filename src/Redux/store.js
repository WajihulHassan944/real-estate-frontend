import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import landlordReducer from './landlordSlice';
import agentLandlordReducer from './agentLandlordSlice';
import careProviderReducer from './careProviderSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    landlord: landlordReducer,
    agentLandlord: agentLandlordReducer,
    careProvider: careProviderReducer,
  },
});

export default store;

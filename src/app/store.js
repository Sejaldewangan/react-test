import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/crud';

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

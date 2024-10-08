import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './slices/commentsSlice';

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
});
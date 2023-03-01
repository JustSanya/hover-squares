import { configureStore } from '@reduxjs/toolkit';
import squaresReducer from '../features/squares/squaresSlice';

export const store = configureStore({
  reducer: {
    squares: squaresReducer,
  },
});

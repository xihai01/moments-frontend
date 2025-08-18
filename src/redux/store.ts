import { configureStore } from '@reduxjs/toolkit';
import createScreenReducer from '~/redux/slices/createScreenSlice';

export const store = configureStore({
  reducer: {
    createScreen: createScreenReducer,
  },
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

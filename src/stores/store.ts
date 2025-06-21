import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import wineListReducer from './wineList/useWineListStore';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    wineList: wineListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

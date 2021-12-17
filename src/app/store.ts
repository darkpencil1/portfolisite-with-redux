import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mediumReducer from '../features/typeSlice';


export const store = configureStore({
  reducer: {
    medium: mediumReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

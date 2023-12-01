import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import foodReducer from "../features/food/foodSlice";
import setReducer from "../features/set/setSlice";



export const store = configureStore({
  reducer: {
    food:foodReducer,
    set:setReducer
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

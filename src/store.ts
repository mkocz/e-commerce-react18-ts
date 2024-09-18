import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/Basket/basketSlice";
import productsReducer from "./features/Products/productSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ProductDto } from "../../types/Product";

export type BasketState = {
  products: ProductDto[];
  totalPrice: number;
};

const initialState: BasketState = {
  products: [],
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductDto>) => {
      const existingProduct = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        state.products = state.products.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity ? item.quantity + 1 : 1,
                totalPrice: item.totalPrice
                  ? item.totalPrice + item.fields.price
                  : item.fields.price,
              }
            : item
        );
      } else {
        state.products = [
          ...state.products,
          {
            ...action.payload,
            quantity: 1,
            totalPrice: action.payload.fields.price,
          },
        ];
      }
      state.totalPrice = state.totalPrice + action.payload.fields.price;
    },
    remove: (state, action: PayloadAction<ProductDto>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.totalPrice = state.totalPrice - action.payload.fields.price;
    },
    removeAll: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
    decreaseQuantity: (state, action: PayloadAction<ProductDto>) => {
      const { id, quantity } = action.payload;
      state.products = state.products.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: quantity ? quantity - 1 : 1,
              totalPrice: item.totalPrice
                ? item.totalPrice - item.fields.price
                : item.fields.price,
            }
          : item
      );
    },
  },
});

export const { add, remove, decreaseQuantity, removeAll } = basketSlice.actions;

export const selectCount = (state: RootState) =>
  state.basket.products.reduce(
    (total, item) => total + (item.quantity ? item.quantity : 0),
    0
  );
export const selectProducts = (state: RootState) => state.basket.products;
export const selectTotalPrice = (state: RootState) =>
  state.basket.products.reduce(
    (total, item) =>
      total + item.fields.price * (item.quantity ? item.quantity : 1),
    0
  );

export default basketSlice.reducer;

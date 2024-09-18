import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { ProductDto } from "../../types/Product";
import type { RootState } from "../../store";

type ProductState = {
  products: ProductDto[];
  status: string;
  error: null | undefined | string;
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    const response = await fetch(
      "https://api.airtable.com/v0/appbIwrYzIWEH403C/herbs?",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      return rejectWithValue(`failed to load data. Error status: ${response.status} ${response.statusText}`);
    }
    return response.json();
  }
);

const initialState: ProductState = {
  products: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.records;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string || action.error.message || null;
      });
  },
});
export const selectProducts = (state: RootState) => state.products.products;
export default productsSlice.reducer;

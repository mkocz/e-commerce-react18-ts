import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./redux";
import { fetchProducts } from "../features/Products/productSlice";

const useProducts = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const productsStatus = useAppSelector((state) => state.products.status);
  const error = useAppSelector((state) => state.products.error);

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, productsStatus]);

  return { products, productsStatus, error };
};

export default useProducts;

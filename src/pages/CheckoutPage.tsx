import { useNavigate } from "react-router-dom";
import { OrderForm } from "../components/checkoutpage/OrderForm";
import { selectCount } from "../features/Basket/basketSlice";
import { useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { routes } from "../routes";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const counter = useAppSelector(selectCount);

  useEffect(() => {
    if (counter === 0) {
      navigate(routes.PRODUCTS.path);
    }
  }, [counter, navigate]);

  return <OrderForm />;
};

import { useAppSelector } from "../../hooks/redux";
import { selectCount } from "./basketSlice";

export const BasketCounter = () => {
  const counter = useAppSelector(selectCount);
  return <span className="mt-2 pl-1 text-base text-bold">{counter}</span>;
};

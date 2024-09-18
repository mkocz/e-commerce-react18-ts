import { Alert } from "../../components/Alert";
import { useAppDispatch } from "../../hooks/redux";
import { routes } from "../../routes";
import { ProductDto } from "../../types/Product";
import { Button } from "../../ui/Button";
import { add } from "../Basket/basketSlice";
import { ProductTile } from "./ProductTile";
import { useEffect, useState } from "react";

type Props = {
  products: ProductDto[];
};

export const ProductsList = ({ products }: Props) => {
  const dispatch = useAppDispatch();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const settingAlert = () => {
    setTimeout(() => {
      setShowAlert(true);
    }, 100);
  };

  return (
    <section>
      {showAlert && (
        <Alert message="Produkt dodany do koszyka">
          <Button
            label="Zobacz koszyk"
            route={routes.BASKET.path}
            isFullWidth={false}
            isReversed={true}
          ></Button>
        </Alert>
      )}
      <ul className="relative z-2 flex flex-wrap justify-center">
        {products.map((product) => (
          <li key={product.id} className=" m-5">
            <ProductTile product={product}>
              <button
                className="w-48 m-2 p-1 self-center border border-slate-400 rounded text-slate-500  hover:border-lime-600 hover:text-lime-600"
                onClick={() => {
                  dispatch(add(product));
                  setShowAlert(false);
                  settingAlert();
                }}
              >
                Dodaj do koszyka
              </button>
            </ProductTile>
          </li>
        ))}
      </ul>
    </section>
  );
};

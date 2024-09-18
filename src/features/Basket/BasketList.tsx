import { useAppSelector } from "../../hooks/redux";
import { add, remove, decreaseQuantity, selectProducts } from "./basketSlice";
import { useAppDispatch } from "../../hooks/redux";
import { ProductDto } from "../../types/Product";
import { ChangeEvent } from "react";
import { ProductTile } from "../Products/ProductTile";

export const BasketList = () => {
  const products: ProductDto[] = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  const handleQuantityChange = (
    event: ChangeEvent<HTMLInputElement>,
    product: ProductDto
  ) => {
    if (
      (product.quantity ? product.quantity : 1) < parseInt(event.target.value)
    ) {
      dispatch(add(product));
    } else {
      dispatch(decreaseQuantity(product));
    }
  };

  const preventInputTyping = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      !(
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "Tab"
      )
    ) {
      event.preventDefault();
    }
  };

  return (
    <section>
      <ul className="flex flex-wrap justify-center my-10 cursor-default">
        {products.map((product) => (
          <li key={product.id} className="m-5">
            <ProductTile product={product}>
              <div className="flex justify-between items-center m-5">
                <div>
                  <label htmlFor="quantity" className="text-sm text-slate-700">
                    liczba sztuk:
                  </label>
                  <input
                    className="w-12 ml-3 pl-3 border text-slate-700 cursor-default"
                    id="quantity"
                    type="number"
                    min="1"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(e, product)}
                    onKeyDown={(e) => preventInputTyping(e)}
                  />
                </div>
                <p className="text-sm text-slate-700">
                  razem:{" "}
                  <span className="p-1 text-base font-bold tracking-wide text-lime-600">
                    {product.totalPrice}zł
                  </span>
                </p>
              </div>
              <button
                className="self-center w-48 m-2 p-1 border border-slate-400 hover:border-lime-600 rounded   text-slate-500 hover:text-lime-600"
                onClick={() => dispatch(remove(product))}
              >
                Usuń
              </button>
            </ProductTile>
          </li>
        ))}
      </ul>
    </section>
  );
};

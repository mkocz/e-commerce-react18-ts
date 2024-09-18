import { ProductDto } from "../../types/Product";
import { ReactNode } from "react";

type Props = {
  product: ProductDto;
  children?: ReactNode;
};

export const ProductTile = ({ product, children }: Props) => {
  return (
    <article className="flex flex-col sm:w-96 p-5 border border-slate-400 bg-white">
      {product.fields.img &&
        product.fields.img.length > 0 &&
        product.fields.img[0] && (
          <img
            className="h-56 m-2 self-center"
            src={product.fields.img[0].url}
            alt=""
          />
        )}
      <h2 className="m-2 text-lg tracking-wide text-slate-700 capitalize">
        {product.fields.name}
      </h2>
      <p className="p-1 text-slate-500">{product.fields.description}</p>
      <p className="p-1 font-bold tracking-wide text-lime-600 ">
        {product.fields.price}zł
      </p>
      {children}
    </article>
  );
};

import { FaRegTimesCircle } from "react-icons/fa";
import { ProductDto } from "../../types/Product";

type Props = {
  product: ProductDto | null;
  show: boolean;
  handleClose: () => void;
};

export const ProductModal = ({ show, handleClose, product }: Props) => {
  if (!show) return null;

  return (
    <dialog className="fixed z-50 flex justify-center items-center inset-0 w-full h-full bg-black bg-opacity-50 cursor-default">
      <div className="relative h-full sm:h-auto max-w-xl p-5 sm:rounded-lg bg-white shadow-lg">
        <button
          className="absolute top-4 right-4 font-bold text-2xl text-gray-500 hover:text-lime-600"
          onClick={handleClose}
        >
          <FaRegTimesCircle />
        </button>
        {product && (
          <article className="flex flex-col sm:flex-row py-3">
            {product.fields.img &&
              product.fields.img.length > 0 &&
              product.fields.img[0] && (
                <img
                  className="self-center h-56 sm:h-80 w-auto m-2 mt-12 sm:mt-2"
                  src={product.fields.img[0].url}
                  alt=""
                />
              )}
            <div className="flex flex-col gap-3 mt-5 sm:mt-16 mx-3 text-slate-600">
              <h2 className="text-lg tracking-wide text-lime-600 font-semibold capitalize">
                {product.fields.name}
              </h2>
              <p className="">{product.fields.description}</p>
              <p className="mt-3">
                Cena:{" "}
                <span className="text-lime-600 font-semibold">
                  {product.fields.price}zł
                </span>
              </p>
            </div>
          </article>
        )}
      </div>
    </dialog>
  );
};

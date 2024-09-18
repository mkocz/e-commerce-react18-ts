import { useEffect, useState } from "react";
import { ProductDto } from "../../types/Product";
import { routes } from "../../routes";
import { Button } from "../../ui/Button";
import { ProductModal } from "./ProductModal";

type Props = {
  products: ProductDto[];
};

const getSlidePosition = (
  productIndex: number,
  index: number,
  length: number
) => {
  if (productIndex === index) {
    return "transform -translate-x-full opacity-100";
  }
  if (productIndex === (index + 1) % length) {
    return "transform translate-x-0 opacity-100";
  }
  if (productIndex === (index + 2) % length) {
    return "transform translate-x-full opacity-100";
  }
  if (productIndex === (index - 1 + length) % length) {
    return "transform -translate-x-[200%] opacity-0";
  }
  return "transform translate-x-[200%] opacity-0";
};

export const ProductsCarousel = ({ products }: Props) => {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductDto | null>(
    null
  );
  const length = products.length;

  const openModal = (product: ProductDto) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    let timeoutId: number;
    if (!isModalOpen) {
      timeoutId = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
      }, 5000);
    }
    return () => clearTimeout(timeoutId);
  }, [index, length, isModalOpen]);

  const handleProductClick = (product: ProductDto) => {
    openModal(product);
  };

  return (
    <section>
      <div className="absolute w-full h-[500px] bg-white"></div>
      <div className="relative flex justify-center min-h-[400px] w-[320px] md:w-4/5 lg:w-[930px] mx-auto mb-0 md:px-32 lg:px-96 overflow-hidden text-center bg-white">
        {products.map((product, productIndex) => {
          const position = getSlidePosition(productIndex, index, length);

          return (
            <article
              className={`absolute flex flex-col items-center w-[300px] m-auto p-5 transition duration-[2000ms] ${position} cursor-pointer`}
              key={product.id}
              onClick={() => handleProductClick(product)}
            >
              <div className="flex flex-col items-center sm:m-2 p-4 border border-slate-300 ">
                {product.fields.img &&
                  product.fields.img.length > 0 &&
                  product.fields.img[0] && (
                    <img
                      className="h-40 m-2 self-center"
                      src={product.fields.img[0].url}
                      alt=""
                    />
                  )}
                <h3 className="text-lg font-bold capitalize text-lime-600">
                  {product.fields.name}
                </h3>
                <p className="line-clamp-2">{product.fields.description}</p>
              </div>
            </article>
          );
        })}
      </div>
      <ProductModal
        show={isModalOpen}
        handleClose={closeModal}
        product={selectedProduct}
      ></ProductModal>
      <div className="relative flex justify-center sm:justify-end sm:mr-24 2xl:mr-96 mb-10">
        <Button
          label="Przejdż do sklepu"
          route={routes.PRODUCTS.path}
          isFullWidth={false}
        ></Button>
      </div>
    </section>
  );
};

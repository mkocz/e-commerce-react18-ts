import { FaLeaf } from "react-icons/fa6";
import { ProductsList } from "../features/Products/ProductsList";
import useProducts from "../hooks/useProducts";

export const ProductsPage = () => {
  const { products, productsStatus, error } = useProducts();

  if (productsStatus === "loading") {
    return (
      <div className="relative top-32 text-3xl text-slate-500">Loading...</div>
    );
  }

  if (productsStatus === "failed") {
    return (
      <div className="relative top-32 text-lg text-red-500">Error: {error}</div>
    );
  }

  return (
    <main className="relative p-10 top-14 flex-grow cursor-default">
      <h1 className="my-4 text-3xl text-gray-400 font-bold uppercase">
        Zasmakuj natury
      </h1>
      <p className="md:mx-36 2xl:mx-96 my-3 text-slate-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <p className="md:mx-28 2xl:mx-96 mb-6 text-slate-600 ">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </p>
      <FaLeaf className="m-auto mb-8 text-5xl text-gray-300" />
      <ProductsList products={products} />
    </main>
  );
};

import { AboutUs } from "../components/homepage/AboutUs";
import { Banner } from "../components/homepage/Banner";
import { ProductsCarousel } from "../features/Products/ProductsCarousel";
import useProducts from "../hooks/useProducts";

export const HomePage = () => {
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
    <div className="relative flex-grow top-14">
      <Banner />
      <AboutUs />
      <ProductsCarousel products={products} />
    </div>
  );
};

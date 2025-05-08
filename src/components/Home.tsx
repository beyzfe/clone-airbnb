import React from "react";
import ProductCard from "../product-components/ProductCard";
import { products } from "../data/product";

function Home() {
  return (
    <div className="flex flex-wrap justify-between gap-6 max-w-[1400px] mt-4">
      {products.map((item) => (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Home;

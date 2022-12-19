import React from "react";
import { ProductCard } from "../Components/ProductCard";

export default function Product() {
  return (
    <main className="my-8  lg:px-14">
      <div className="lg:grid grid-cols-4 ">
        <section className="col-span-1"></section>
        <div className="lg:col-span-3 lg:grid grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
}

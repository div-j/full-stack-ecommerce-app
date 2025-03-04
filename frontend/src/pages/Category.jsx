import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import all_products from "../assets/all_products";
import { ProductCard } from "../components/ProductCard";

export default function Category({ category, banner }) {
  return (
    <div className="py-12 xl:py-28 max_padd_container">
      <section>
        <div>
          <img src={banner} className="block my-7 mx-auto" alt="" />
        </div>
        <div className="flexBetween my-8 mx-2">
          <h5>
            <span className="font-bold">Showing 1-12</span> out of 36 products
          </h5>
          <div className="flexBetween max-sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-900/15">
            Sort by <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {all_products.map((product) => {
            if (product.category === category) {
            return  <ProductCard key={product.id} product={product} />;
            }
          })}
        </div>
        <div className="mt-16 text-center">
            <button className="btn_dark_rounded">Load more</button>
        </div>
      </section>
    </div>
  );
}

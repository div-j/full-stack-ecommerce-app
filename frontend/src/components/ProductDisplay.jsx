import React, { useContext } from "react";
import prt1 from "./../assets/product_rt_1.png";
import prt2 from "./../assets/product_rt_2.png";
import prt3 from "./../assets/product_rt_3.png";
import prt4 from "./../assets/product_rt_4.png";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";

export default function ProductDisplay(props) {
  const { product } = props;

  const {addToCart} = useContext(ShopContext)

  return (
    <div>
      <section className="flex flex-col gap-14 xl:flex-row">
        <div className="flex gap-x-2 xl:flex-1">
          <section className="flex flex-col gap-[7px] flex-wrap">
            <img src={prt1} alt={product.name} className="max-h-[99px]" />
            <img src={prt2} alt={product.name} className="max-h-[99px]" />
            <img src={prt3} alt={product.name} className="max-h-[99px]" />
            <img src={prt4} alt={product.name} className="max-h-[99px]" />
          </section>
          <section>
            <img
              src={product.image}
              alt={product.name}
              className=""
            />
          </section>
        </div>
        <div className="flex flex-col xl:flex-[1.7] ">
            <h3 className="h3">{product.name}</h3>
            <div className="flex gap-x-2 text-secondary medium-12">
                <MdStar/>
                <MdStar/>
                <MdStar/>
                <MdStar/>
                <p>{111}</p>
            </div>
            <div className="flex gap-x-6 medium-20 my-4">
                <p className="line-through">{product.old_price}</p>
                <p className="text-secondary">{product.new_price}</p>
            </div>
            <div className="mb-4">
                <h4 className="bold-16">Select Size</h4>
                <div className="flex gap-3 my-3">
                    <p className="ring-2 ring-slate-900 h-10 w-10 flexCenter cursor-pointer">S</p>
                    <p className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">M</p>
                    <p className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">L</p>
                    <p className="ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer">XL</p>
                </div>
                <div className="flex gap-y-3 flex-col max-w-[555px] mb-4">
                    <button onClick={()=>{addToCart(product.id)}} className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest">Add to Cart</button>
                    <button className="btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest">Buy it now</button>
                </div>
                <p><span className="text-tertiary medium-16">Category: </span> Women | Jacket | Winter</p>
                <p><span className="text-tertiary medium-16">Tags: </span> Modern | Lates </p>
            </div>
        </div>
      </section>
    </div>
  );
}

import React, { useContext } from "react";
import { TbTrash } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";

export default function CartItems() {
  const { all_products, cartItems, removeFromCart, getTotalCartAmount, } = useContext(ShopContext);

  return (
    <div className="max_padd_container pt-28">
      <table className="w-full mx-auto">
        <thead>
          <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start py-12">
            <th className="p-1 py-2">Products</th>
            <th className="p-1 py-2">Title</th>
            <th className="p-1 py-2">Price</th>
            <th className="p-1 py-2">Quantity</th>
            <th className="p-1 py-2">Total</th>
            <th className="p-1 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {all_products.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <tr
                  key={product.id}
                  className="border-b border-slate-900/20 p-6 medium-14 text-center"
                >
                  <td className="p-1 py-2 flexCenter">
                    <img
                      src={product.image}
                      alt={product.title}
                      width={43}
                      height={43}
                      className="object-cover rounded-lg ring-1 ring-slate-900/5 my-1"
                    />
                  </td>
                  <td className="p-1 py-2 ">{product.name}</td>
                  <td className="p-1 py-2">{product.new_price}</td>
                  <td className="p-1 py-2 bg-white">{cartItems[product.id]}</td>
                  <td className="p-1 py-2">
                    {product.new_price * cartItems[product.id]}
                  </td>
                  <td className="p-1 py-2">
                    <div className="bold-22 pl-14 cursor-pointer">
                      <TbTrash onClick={() => removeFromCart(product.id)} />
                    </div>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <section className="bg-white w-full max-w-[666px] flex flex-col gap-20 p-8 md:flex-row rounded-md ">
        <div className="flex flex-col gap-10">
          <h4 className="bold-20">Summary</h4>
          <div>
            <section className="flex justify-between py-4">
              <h4 className="medium-16">Subtotal:</h4>
              <h4 className="text-gray-30 font-semibold">${getTotalCartAmount()}</h4>
            </section>
            <hr />
            <section className="flex justify-between py-4">
              <h4 className="medium-16">Shipping Fee:</h4>
              <h4 className="text-gray-30 font-semibold">Free</h4>
            </section>
            <hr />
            <section className="flex justify-between py-4">
              <h4 className="bold-18">Total:</h4>
              <h4 className="bold-18">${getTotalCartAmount()}</h4>
            </section>
          </div>
          <button className="btn_dark_rounded">Checkout</button>
          <div className="flex flex-col gap-10">
            <h4 className="capitalize bold-20">Your coupon code enter here</h4>
            <div className="flex justify-between pl-4 h-12 ring-1 ring-slate-900/10 rounded-full">
              <input
                type="text"
                placeholder="Coupon Code"
                className="bg-transparent border-none outline-none "
              />
              <button className="btn_dark_rounded" >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { createContext, useState } from "react";
import all_products from "./../assets/all_products";

export const ShopContext = createContext(null);

function getDefaultCart() {
  let cart = {};

  for (let index in all_products) {
    cart[index] = 0;
  }

  return cart;
}

function ShopContextProvider(props) {
  const [cartItems, setCart] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCart((prevCart) => ({ ...prevCart, [itemId]: prevCart[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => ({ ...prevCart, [itemId]: prevCart[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (let index in cartItems) {
      if (cartItems[index] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === parseInt(index)
        );
       
        
        totalAmount += itemInfo.new_price * cartItems[index];
      }
    }
    return totalAmount;
  };

  function getTotalCartItems() {
    let totalItems = 0;
    for (let index in cartItems) {
      if (cartItems[index] > 0){
        totalItems += cartItems[index];
      }
    }
    return totalItems
    
  }

  const contexValue = { getTotalCartAmount, getTotalCartItems, all_products, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contexValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;

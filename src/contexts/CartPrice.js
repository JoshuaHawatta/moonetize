import { createContext, useState } from "react";

export const CartPriceContext = createContext({});

const CartPriceProvider = ({ children }) => {
  const [cartPrice, setCartPrice] = useState(0);
  
  return (
    <CartPriceContext.Provider value={{ cartPrice, setCartPrice }}>
      { children }
    </CartPriceContext.Provider>
  )
}

export default CartPriceProvider
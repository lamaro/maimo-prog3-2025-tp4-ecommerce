'use client'

import { useShopContext } from "@/contexts/ShopContext";
const CheckoutContainer = () => {
  const { cart } = useShopContext();

  return (
    <div>
      {cart.map((product) => (
        <div>
          <h3>{product.name}</h3>
          <p>cantidad: {product.qty}</p>
        </div>
      ))}
    </div>
  );
};

export default CheckoutContainer;

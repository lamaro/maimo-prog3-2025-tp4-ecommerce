"use client";

import { useShopContext } from "@/contexts/ShopContext";
import { useEffect } from "react";

const ProductContainer = ({ id }) => {
  const { getOneProduct, product, handleAddToCart } = useShopContext();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  const addToCart = (product) => {
    const productToAdd = {
      ...product,
      qty: 1,
    };

    handleAddToCart(productToAdd);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <button
        className="flex-1 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-3 py-2 text-sm hover:opacity-90 transition"
        onClick={() => addToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductContainer;

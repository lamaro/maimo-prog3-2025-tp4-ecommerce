"use client";

import { useShopContext } from "@/contexts/ShopContext";
import { useEffect } from "react";

const ProductContainer = ({ id }) => {
  const { getOneProduct, product } = useShopContext();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return <div>{product.name}</div>;
};

export default ProductContainer;

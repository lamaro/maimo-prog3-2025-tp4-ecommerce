'use client'
import Image from "next/image";
import { useShopContext } from "@/contexts/ShopContext";

export default function Home() {
  const {cartQty} = useShopContext()
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>About</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
        <p>{cartQty()}</p>
        <p>Este es mi logo</p>
        <p>Robert</p>
      </nav>
      <div>HOLA MUNDO</div>
      </header>
    </>
  );
}

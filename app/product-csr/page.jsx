"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [product, setProduct] = useState([]);

  async function getProduct() {
    const resp = await fetch("https://dummyjson.com/products");
    return resp.json();
  }

  useEffect(() => {
    const run = async () => {
      const data = await getProduct();
      setProduct(data.products);
    };
		run()
  }, []);

  return (
    <>
      <div>Product page CSR</div>
      <hr />
      {product.map((el) => (
        <p>
          {el.id}, {el.title} : ${el.price}
        </p>
      ))}
    </>
  );
}

async function getProduct() {
  const resp = await fetch("https://dummyjson.com/products");
  return resp.json();
}

export default async function Page() {
  const product = (await getProduct()).products;
  console.log(product[2]);
  return (
    <>
      <div>Product page SSR</div>
      <hr />
      {product.map( el => (
        <p>{el.id}, {el.title} : ${el.price}</p>
      ))}
    </>
  );
}

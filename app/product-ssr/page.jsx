async function getProduct() {
  const resp = await fetch("https://dummyjson.com/products");
  return resp.json();
}

export default async function Page() {
  const product = (await getProduct()).products;
  return (
    <>
      <div>Product page SSR</div>
      <hr />
      {product.map( el => (
        <p key={el.id}> 
          {el.id}, {el.title} : ${el.price}
        </p>
      ))}
    </>
  );
}

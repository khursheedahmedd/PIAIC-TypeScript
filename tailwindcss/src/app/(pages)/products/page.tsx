import Link from "next/link";

const Products = () => {
  const productId = 100;
  return (
    <>
      <h1>Products</h1>
      <h3>
        <Link href="products/1">Product 1</Link>
      </h3>
      <h3>
        <Link href="products/2">Product 2</Link>
      </h3>
      <h3>
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h3>
      <h3>
        <Link href="products/4">Product 4</Link>
      </h3>
      <h3>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h3>
    </>
  );
};

export default Products;

import Link from "next/link";

export default function ProductList() {
  const productId = 100
  return (
    <main className="bg-zinc-400">
      <h1>Product list</h1>
      <h2> <Link href="/products/1">Product 1</Link></h2>
      <h2>product 2</h2>
      <h2><Link href={`/products/${productId}`}>product {productId}</Link></h2>
    </main>
  );
}
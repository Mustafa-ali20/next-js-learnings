"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing Order");
    router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button className="bg-red-400" onClick={handleClick}>
        Place Order
      </button>
    </>
  );
}

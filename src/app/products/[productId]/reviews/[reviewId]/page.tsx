import { error } from "console";
import { notFound } from "next/navigation";

function getrandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function Review({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const random = getrandomInt(2);
  if (random === 1) {
    throw new Error("error in this");
  }
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      review {reviewId} for product {productId}
    </h1>
  );
}

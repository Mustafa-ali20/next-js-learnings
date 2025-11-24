export default async function ReviewDetails({
  params,
}: {
  params: Promise<{
    productId: string;
    reviewId: string;
    reviewlistId: string;
  }>;
}) {
  const { productId, reviewId, reviewlistId } = await params;
  return (
    <>
      <h1>
        review {reviewId} for product {productId}
      </h1>
      <h2>Here's the review list {reviewlistId}</h2>
    </>
  );
}

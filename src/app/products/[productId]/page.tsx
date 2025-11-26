import { notFound } from "next/navigation";
import { Metadata } from "next";
type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `prodcut ${id}`,
  };
};
export default async function ProductDetails({ params }: { params: Props }) {
  const productId = (await params).productId;
  if (parseInt(productId) > 1000) {
    notFound();
  }
  return <h1 className="bg-zinc-500">Product list Detials {productId}</h1>;
}

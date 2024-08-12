import { Metadata } from "next";
import { resolve } from "path";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });

  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = ({ params }: Props) => {
  return <div>Product Details {params.productId}</div>;
};
export default ProductDetails;

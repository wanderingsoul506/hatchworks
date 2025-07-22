import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks";
import { ProductDetails } from "../../components";

interface ProductDetailsPageParams {
  productId: string;
}

export default function ProductDetailsPage() {
  const productId = parseInt(
    (useParams<keyof ProductDetailsPageParams>() as ProductDetailsPageParams)
      .productId,
    10
  );

  const { data: ProductData } = useProduct(productId);

  if (!ProductData?.data) {
    return <div>No Product Found</div>;
  }

  return <ProductDetails product={ProductData.data} />;
}

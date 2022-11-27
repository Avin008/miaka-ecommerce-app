import { useRouter } from "next/router";
import ProductContainer from "../../components/ProductContainer";

const Product = () => {
  const router = useRouter();

  const productID = router.query.productID as string;

  return <ProductContainer key={productID} />;
};

export default Product;

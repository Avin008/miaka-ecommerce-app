import { useRouter } from "next/router";
import { LoadingSpinner, SingleProductCard } from "../components";
import {
  useGetCartAndWishlist,
  useGetSingleProduct,
  useGetUserData,
} from "../hooks";

const ProductContainer = () => {
  const router = useRouter();

  const productID = router.query.productID as string;

  const { data, isLoading } = useGetSingleProduct(productID);
  const { userData, isUserDataLoading } = useGetUserData();

  useGetCartAndWishlist(userData, isUserDataLoading);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="relative mx-auto mt-20 w-4/5">
      <SingleProductCard productData={data} userData={userData} />
    </div>
  );
};

export default ProductContainer;

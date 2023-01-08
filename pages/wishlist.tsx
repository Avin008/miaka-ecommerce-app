import Head from "next/head";
import {
  LoadingSpinner,
  EmptyWishlist,
  Card,
} from "../components";
import {
  useAuthRedirect,
  useGetCartAndWishlist,
  useGetUserData,
} from "../hooks";
import { ProductData } from "../types";

const WishList = (): React.ReactElement => {
  const { loading } = useAuthRedirect();

  const { userData, isUserDataLoading } =
    useGetUserData();

  useGetCartAndWishlist(
    userData,
    isUserDataLoading
  );

  if (loading || isUserDataLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mx-auto mt-20 w-11/12 space-y-5 px-3">
      <Head>
        <title>Wishlist | Miaka</title>
      </Head>

      <div className="flex flex-wrap items-center justify-between">
        <h1 className=" text-lg font-medium">
          My Wishlist (
          {userData?.wishlist?.length}){" "}
        </h1>
      </div>

      {userData?.wishlist?.length ? (
        <div className="grid h-72 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {userData.wishlist.map(
            (productData: ProductData) => (
              <Card
                key={productData.id}
                productData={productData}
                userData={userData}
              />
            )
          )}
        </div>
      ) : (
        <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
          <EmptyWishlist />
        </div>
      )}
    </div>
  );
};

export default WishList;

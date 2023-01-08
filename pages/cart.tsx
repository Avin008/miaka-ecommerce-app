import {
  LoadingSpinner,
  CheckoutCard,
  CartCard,
  EmptyCart,
} from "../components";
import {
  useAuthRedirect,
  useGetCartAndWishlist,
  useGetUserData,
} from "../hooks";
import { ProductData } from "../types";
import Head from "next/head";

const Cart = (): React.ReactElement => {
  const { loading } = useAuthRedirect();

  const { userData, isUserDataLoading } =
    useGetUserData();

  useGetCartAndWishlist(
    userData,
    isUserDataLoading
  );

  if (loading || isUserDataLoading)
    return <LoadingSpinner />;

  return (
    <div className="mx-auto mt-20 space-y-5 sm:w-11/12 lg:w-5/6">
      <Head>
        <title>Cart | Miaka</title>
      </Head>
      <span>
        <h1 className="text-lg font-medium">
          My Cart({userData?.cart?.length})
        </h1>
      </span>
      {userData?.cart?.length ? (
        <div className="grid grid-cols-8 gap-5 px-2">
          <div className="space-y-5 sm:col-span-8 lg:col-span-5">
            {userData?.cart?.map(
              (cartProductData: ProductData) => (
                <CartCard
                  key={cartProductData.id}
                  cartProductData={
                    cartProductData
                  }
                  userData={userData}
                />
              )
            )}
          </div>
          <div className="sm:col-span-8 lg:col-span-3">
            <CheckoutCard cart={userData.cart} />
          </div>
        </div>
      ) : (
        <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
          <EmptyCart />
        </div>
      )}
    </div>
  );
};

export default Cart;

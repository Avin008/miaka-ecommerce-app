import { LoadingSpinner, CheckoutCard, CartCard } from "../components";
import {
  useAuthRedirect,
  useGetCartAndWishlist,
  useGetUserData,
} from "../hooks";
import { ProductData } from "../types";

const Cart = (): React.ReactElement => {
  const { loading } = useAuthRedirect();

  const { userData, isUserDataLoading } = useGetUserData();

  useGetCartAndWishlist(userData, isUserDataLoading);

  if (loading || isUserDataLoading) return <LoadingSpinner />;

  return (
    <div className="mx-auto mt-20 space-y-5 lg:w-5/6">
      <span>
        <h1 className="text-lg font-medium">My Cart({userData.cart.length})</h1>
      </span>
      <div className="grid grid-cols-8 gap-5 px-2">
        <div className="space-y-5 sm:col-span-8 lg:col-span-5">
          {userData.cart.map((productData: ProductData) => (
            <CartCard
              key={productData.id}
              productData={productData}
              userData={userData}
            />
          ))}
        </div>
        <div className="sm:col-span-8 lg:col-span-3">
          <CheckoutCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;

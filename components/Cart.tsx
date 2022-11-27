import { useAuthStatus, useGetCartAndWishlist, useGetUserData } from "../hooks";
import { HiOutlineShoppingBag } from "../icons";
import { useUserStore } from "../lib/store";

const Cart = (): React.ReactElement => {
  const { isAuth: authStatus } = useAuthStatus();
  const cart = useUserStore((store) => store.cart);
  const { userData, isUserDataLoading } = useGetUserData();
  useGetCartAndWishlist(userData, isUserDataLoading);

  return (
    <div className="">
      <HiOutlineShoppingBag size={"1.5rem"} />
      {authStatus && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5  items-center justify-center rounded-full border border-gray-900 bg-gray-900 text-xs text-white opacity-75">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default Cart;

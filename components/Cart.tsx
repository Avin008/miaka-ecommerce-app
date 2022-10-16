import { HiOutlineShoppingBag } from "../icons";
import { useAuthStatus } from "../hooks";
const Cart = (): React.ReactElement => {
  const { isAuth: authStatus } = useAuthStatus();

  return (
    <div className="">
      <HiOutlineShoppingBag size={"1.5rem"} />
      {authStatus && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5  items-center justify-center rounded-full border border-gray-900 bg-gray-900 text-xs text-white opacity-75">
          10
        </span>
      )}
    </div>
  );
};

export default Cart;

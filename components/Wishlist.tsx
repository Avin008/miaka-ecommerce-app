import { useAuthStatus } from "../hooks";
import { HiOutlineHeart } from "../icons";
import { useUserStore } from "../lib/store";

const Wishlist = (): React.ReactElement => {
  const { isAuth: authStatus } = useAuthStatus();
  const wishlist = useUserStore((store) => store.wishlist);

  return (
    <div className="">
      <HiOutlineHeart size={"1.5rem"} />
      {authStatus && (
        <span className="absolute -top-2 -right-2 flex h-5  w-5 items-center justify-center rounded-full border border-gray-900 bg-gray-900 text-xs text-white opacity-75">
          {wishlist?.length}
        </span>
      )}
    </div>
  );
};

export default Wishlist;

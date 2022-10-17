import { HiOutlineHeart } from "../icons";
import { useAuthStatus } from "../hooks";

const Wishlist = (): React.ReactElement => {
  const { isAuth: authStatus } = useAuthStatus();

  return (
    <div className="">
      <HiOutlineHeart size={"1.5rem"} />
      {authStatus && (
        <span className="absolute -top-2 -right-2 flex h-5  w-5 items-center justify-center rounded-full border border-gray-900 bg-gray-900 text-xs text-white opacity-75">
          8
        </span>
      )}
    </div>
  );
};

export default Wishlist;

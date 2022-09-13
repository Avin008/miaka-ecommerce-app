import { HiOutlineHeart } from "react-icons/hi";
const Wishlist = (): React.ReactElement => {
  return (
    <div className="">
      <HiOutlineHeart size={"1.5rem"} />
      <span className="absolute -top-2 -right-2 flex h-5 w-5  items-center justify-center rounded-full border border-black bg-yellow-800 text-xs text-white opacity-75">
        +1
      </span>
    </div>
  );
};

export default Wishlist;

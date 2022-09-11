import Link from "next/link";
import {
  HiOutlineShoppingBag,
  HiOutlineHeart,
  HiOutlineUser,
} from "react-icons/hi";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const Navbar = () => {
  return (
    <div className="flex h-14 items-center justify-between border border-b border-black px-10">
      <Link href="/">
        <span className="cursor-pointer text-xl font-semibold italic">
          STORE
        </span>
      </Link>

      <ul className="flex gap-6 font-semibold">
        <li className="cursor-pointer">HOME</li>
        <li className="cursor-pointer">PRODUCTS</li>
        <li className="cursor-pointer">
          <HiOutlineUser size={"1.5rem"} />
        </li>
        <li className="relative cursor-pointer">
          <Wishlist />
        </li>
        <li className="relative cursor-pointer">
          <Cart />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import Link from "next/link";
import Cart from "./Cart";
import User from "./User";
import Search from "./Search";
import Wishlist from "./Wishlist";

const Navbar = (): React.ReactElement => {
  return (
    <div className="fixed left-0 top-0 right-0 z-20 flex h-16 border-b border-gray-300 bg-[#F5F5F5] shadow-sm">
      <span className="mx-auto flex w-11/12 items-center justify-between">
        <Link href="/">
          <span className="flex items-center gap-1">
            <small className="cursor-pointer text-2xl font-bold">Miaka</small>
          </span>
        </Link>

        <ul
          className={`sm: fixed bottom-0  flex gap-6 text-gray-800 sm:right-0 sm:left-0 sm:z-20 sm:justify-evenly sm:border-t sm:border-gray-300  sm:bg-[#F5F5F5] sm:p-3 sm:shadow-sm md:static md:border-none md:shadow-none lg:p-0`}
        >
          <li className="cursor-pointer items-center justify-center hover:text-yellow-800 sm:hidden md:flex">
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li className="cursor-pointer items-center justify-center hover:text-yellow-800 sm:hidden md:flex">
            PRODUCTS
          </li>
          <li className="flex cursor-pointer items-center justify-center hover:text-yellow-800">
            <Search />
          </li>
          <li className="flex cursor-pointer items-center justify-center hover:text-yellow-800">
            <Link href="/login">
              <a>
                <User />
              </a>
            </Link>
          </li>
          <li className="relative flex cursor-pointer items-center justify-center rounded-full border border-gray-900 p-1 hover:text-yellow-800">
            <Wishlist />
          </li>
          <li className="relative flex cursor-pointer items-center justify-center rounded-full border border-gray-900  p-1 hover:text-yellow-800">
            <Cart />
          </li>
        </ul>
      </span>
    </div>
  );
};

export default Navbar;

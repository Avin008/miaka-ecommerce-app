import Link from "next/link";
import Cart from "./Cart";
import User from "./User";
import Search from "./Search";

const Navbar = (): React.ReactElement => {
  return (
    <div className="fixed left-0 top-0 right-0 z-20 flex h-16 items-center justify-between border-b  border-gray-300 bg-white px-10 shadow-sm">
      <Link href="/">
        <span className="flex items-center gap-1">
          <small className="text-2xl font-semibold text-yellow-800">
            Miaka
          </small>
        </span>
      </Link>

      <ul
        className={`sm: fixed bottom-0 flex gap-6 font-semibold text-gray-800 sm:right-0 sm:left-0 sm:z-20 sm:justify-evenly sm:border-t  sm:border-gray-300 sm:p-3 sm:shadow-sm md:static md:border-none md:shadow-none lg:p-0`}
      >
        <li className="flex cursor-pointer items-center justify-center hover:text-yellow-800">
          HOME
        </li>
        <li className="flex cursor-pointer items-center justify-center hover:text-yellow-800">
          PRODUCTS
        </li>
        <li className="flex cursor-pointer items-center justify-center hover:text-yellow-800">
          <Search />
        </li>
        <li className="flex cursor-pointer items-center justify-center hover:text-yellow-800">
          <User />
        </li>
        <li className="relative flex cursor-pointer items-center justify-center hover:text-yellow-800">
          <Cart />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import Link from "next/link";
import Cart from "./Cart";
import User from "./User";
import Search from "./search";
const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 right-0 z-20 flex h-16 items-center justify-between border-b  border-gray-300 bg-white px-10 shadow-sm">
      <Link href="/">
        <span className="flex items-center gap-1">
          <small className="text-2xl font-semibold text-yellow-800">
            Miaka
          </small>
        </span>
      </Link>

      <ul className="flex gap-6 font-semibold text-gray-800">
        <li className="cursor-pointer hover:text-yellow-800">HOME</li>
        <li className="cursor-pointer hover:text-yellow-800">PRODUCTS</li>
        <li className="cursor-pointer hover:text-yellow-800">
          <Search />
        </li>
        <li className="cursor-pointer hover:text-yellow-800">
          <User />
        </li>
        <li className="relative cursor-pointer hover:text-yellow-800">
          <Cart />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

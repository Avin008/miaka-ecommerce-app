import Link from "next/link";
import { useRouter } from "next/router";
import { Cart, Search, User, Wishlist } from "../components";
import SearchBar from "./SearchBar";

const Navbar = (): React.ReactElement => {
  const router = useRouter();

  return (
    <div className="fixed left-0 top-0 right-0 z-20 flex h-16 border-b border-gray-300 bg-[#F5F5F5] shadow-sm">
      <span className="mx-auto flex w-11/12 items-center justify-between">
        <Link href="/">
          <span className="flex items-center gap-1">
            <small className="cursor-pointer text-2xl font-bold text-primary-brand">
              Miaka
            </small>
          </span>
        </Link>

        <SearchBar />

        <ul
          className={`sm: fixed bottom-0 flex items-center gap-6 border-2 border-black text-gray-800 sm:right-0 sm:left-0 sm:z-20 sm:justify-evenly sm:border-t sm:border-gray-300 sm:bg-[#F5F5F5]  sm:p-3 sm:shadow-sm md:static md:h-full md:border-none md:shadow-none lg:p-0`}
        >
          <li
            className={`cursor-pointer items-center ${
              router.pathname === "/" && "font-medium text-primary-brand"
            } justify-center hover:text-primary-hover sm:hidden md:flex`}
          >
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li
            className={`cursor-pointer items-center justify-center hover:text-primary-hover sm:hidden md:flex ${
              router.pathname === "/products" &&
              "font-medium text-primary-brand"
            }`}
          >
            <Link href="/products">
              <a>PRODUCTS</a>
            </Link>
          </li>
          {/* <li className="flex cursor-pointer items-center justify-center hover:text-primary-hover">
            <Search />
          </li> */}
          <li
            className={`flex cursor-pointer items-center justify-center hover:text-primary-hover ${
              router.pathname === "/login" && "font-medium text-primary-brand"
            }`}
          >
            <User />
          </li>
          <li
            className={`relative flex cursor-pointer items-center justify-center rounded-full border border-gray-900 p-1 hover:text-primary-hover ${
              router.pathname === "/wishlist" &&
              "font-medium text-primary-brand"
            }`}
          >
            <Link href="/wishlist">
              <a>
                <Wishlist />
              </a>
            </Link>
          </li>
          <li
            className={`relative flex cursor-pointer items-center justify-center rounded-full border border-gray-900  p-1 hover:text-primary-hover ${
              router.pathname === "/cart" && "font-medium text-primary-brand"
            }`}
          >
            <Link href="/cart">
              <a>
                <Cart />
              </a>
            </Link>
          </li>
        </ul>
      </span>
    </div>
  );
};

export default Navbar;

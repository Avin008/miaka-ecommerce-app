import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SelectSize } from "../components";
import {
  useAddToCart,
  useAddToWishlist,
  useAuthStatus,
  useRemoveFromWishlist,
  useSelectSize,
  useToggle,
} from "../hooks";
import { MdFavorite, MdFavoriteBorder } from "../icons";
import { CardProps } from "../types";
import { isProductInCart, isProductInWishlist } from "../utility";
import { toast } from "react-hot-toast";

const Card = ({ productData, userData }: CardProps): React.ReactElement => {
  const {
    toggle: sizeBar,
    toggleTrue: displaySizeBar,
    toggleFalse: hideSizeBar,
  } = useToggle();

  const { size, sizeSetter } = useSelectSize();

  const { authToken, isAuth } = useAuthStatus();
  const { addToWishlistFunc } = useAddToWishlist(productData, userData?.id);
  const { removeFromWishlistFunc } = useRemoveFromWishlist(
    productData,
    userData?.id
  );

  const { addToCartFunc } = useAddToCart(productData, size);

  const router = useRouter();

  const getSize = userData?.cart.find((x) => x.id === productData.id);

  useEffect(() => {
    if (isAuth && getSize?.size !== undefined) {
      sizeSetter(getSize.size);
    } else {
      sizeSetter("");
    }
  }, [isAuth]);

  return (
    <div
      className="relative h-fit w-full select-none"
      onMouseEnter={() => displaySizeBar()}
      onMouseLeave={() => hideSizeBar()}
    >
      <span className="absolute right-4 top-3 z-10 rounded-full bg-gray-50 p-1 opacity-70 shadow-lg transition-transform hover:cursor-pointer hover:bg-gray-300 hover:text-gray-900">
        {isAuth && isProductInWishlist({ userData, productData }) ? (
          <MdFavorite
            size={25}
            onClick={() => {
              isAuth ? removeFromWishlistFunc() : router.push("/login");
            }}
          />
        ) : (
          <MdFavoriteBorder
            size={25}
            onClick={() => {
              isAuth ? addToWishlistFunc() : router.push("/login");
            }}
          />
        )}
      </span>
      <div className="relative h-40 w-full">
        <Image
          src={productData.img}
          layout="fill"
          objectFit="cover"
          className="cursor-pointer rounded-md"
          alt={productData.name}
          onClick={() => router.push(`product/${productData.id}`)}
        />
        {sizeBar && (
          <SelectSize data={{ sizes: productData.sizes, size, sizeSetter }} />
        )}
      </div>
      <div className="relative flex flex-col justify-center p-2 leading-5">
        <h1 className="text-sm font-semibold sm:block md:hidden">
          {productData.name.length > 10
            ? `${productData.name.slice(0, 10)}...`
            : productData.name}
        </h1>
        <h1 className="text-sm font-semibold sm:hidden md:block">
          {productData.name}
        </h1>
        <span className="flex items-center gap-2">
          <h3 className="text-[#7F7F7F]">Rs. {productData.discountedPrice}</h3>
          <h3 className="text-sm text-[#7F7F7F] line-through">
            Rs. {productData.price}
          </h3>
        </span>
        <div className="mt-1 transition-all">
          {isAuth && isProductInCart(productData, userData) ? (
            <button
              className="flex w-full items-center justify-center gap-1 rounded-md border border-white bg-gray-900 py-2 px-1 text-white opacity-90 transition-all hover:opacity-95"
              onClick={() => {
                isAuth ? router.push("/cart") : router.push("/login");
              }}
            >
              <span className="text-sm">GO TO BAG</span>
            </button>
          ) : (
            <button
              className="flex w-full items-center justify-center gap-1 rounded-md border border-white bg-gray-900 py-2 px-1 text-white opacity-80 transition-all hover:opacity-90"
              onClick={() => {
                isAuth
                  ? size
                    ? addToCartFunc()
                    : toast("please select size!", {
                        icon: "⚠️",
                        position: "bottom-center",
                      })
                  : router.push("/login");
              }}
            >
              <span className="text-sm">ADD TO BAG</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

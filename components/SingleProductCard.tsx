import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MdStar } from "react-icons/md";
import {
  useAddToCart,
  useAddToWishlist,
  useAuthStatus,
  useSelectSize,
} from "../hooks";
import { ProductData, UserData } from "../types";
import {
  calculateDiscountPercentage,
  isProductInCart,
  isProductInWishlist,
} from "../utility";
import { toast } from "react-hot-toast";

const SingleProductCard = ({
  productData,
  userData,
}: {
  productData: ProductData;
  userData: UserData;
}) => {
  const { size, sizeSetter } = useSelectSize();
  const { isAuth } = useAuthStatus();
  const router = useRouter();
  const { addToCartFunc } = useAddToCart(productData, size);
  const { addToWishlistFunc } = useAddToWishlist(productData, userData?.id);

  useEffect(() => {
    if (isAuth) {
      const data = userData.cart.find(
        (cartData) => cartData.id === productData.id
      );
      if (data?.size) {
        sizeSetter(data.size);
      } else {
        sizeSetter("");
      }
    } else {
      sizeSetter("");
    }
  }, [isAuth]);

  return (
    <div className="sm:grid-col-1 grid w-full gap-5 md:grid-cols-1 lg:grid-cols-2">
      <div className="h-full w-full rounded-md border border-gray-400 p-1">
        <div className="relative w-full sm:h-80 lg:h-full">
          <Image
            src={productData.img}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={productData.name}
          />
        </div>
      </div>
      <div className="space-y-2 rounded-md border border-gray-300">
        <div className="border-b border-gray-400 p-3">
          <h1 className="font-base text-2xl">{productData.name}</h1>
        </div>
        <div className="flex items-center gap-5 p-3 font-medium">
          <h2 className="sm:text-lg tab:text-2xl">
            Rs. {productData.discountedPrice}
          </h2>
          <h3 className="text-1xl sm:text-base">
            MRP: <span className="line-through">Rs. {productData.price}</span>
          </h3>
          <h4 className="text-xl text-orange-600 tab:text-2xl">
            ({calculateDiscountPercentage(productData)}% OFF)
          </h4>
        </div>
        <div className="flex items-center gap-2 p-2">
          <span>Ratings:</span>
          <span className="flex text-orange-600">
            <MdStar size={20} />
            <MdStar size={20} />
            <MdStar size={20} />
            <MdStar color="gray" size={20} />
          </span>
        </div>
        <div className="space-y-2 p-3">
          <h1 className="font-medium">SELECT SIZE</h1>
          <div className="flex h-10 w-full gap-4 transition-all">
            {productData.sizes.map((sizes) => (
              <div
                key={sizes}
                onClick={(e) => sizeSetter(e.currentTarget.innerText)}
                className={`relative ${
                  size === sizes && "bg-gray-600 text-gray-100"
                } flex  h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-600 transition-transform`}
              >
                <span className="absolute">{sizes}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-3 p-4 md:flex-wrap lg:flex-nowrap">
          {isAuth && isProductInCart(productData, userData) ? (
            <button
              className="h-10 w-full rounded-md border border-gray-600 bg-gray-600 text-gray-50 transition-all hover:bg-gray-700"
              onClick={() =>
                isAuth ? router.push("/cart") : router.push("/login")
              }
            >
              GO TO BAG
            </button>
          ) : (
            <button
              className="h-10 w-full rounded-md border border-gray-600 bg-gray-600 text-gray-50 transition-all hover:bg-gray-700"
              onClick={() =>
                isAuth
                  ? size
                    ? addToCartFunc()
                    : toast("please select size!", {
                        position: "bottom-center",
                        icon: "⚠️",
                      })
                  : router.push("/login")
              }
            >
              ADD TO BAG
            </button>
          )}
          {isAuth && isProductInWishlist({ userData, productData }) ? (
            <button
              className="h-10 w-full rounded-md border border-gray-600"
              onClick={() =>
                isAuth ? router.push("/wishlist") : router.push("/login")
              }
            >
              GO TO WISHLIST
            </button>
          ) : (
            <button
              className="h-10 w-full rounded-md border border-gray-600"
              onClick={() =>
                isAuth ? addToWishlistFunc() : router.push("/login")
              }
            >
              ADD TO WISHLIST
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;

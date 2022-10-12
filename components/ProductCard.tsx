import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdArrowRightAlt, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import useAuthStatus from "../hooks/useAuthStatus";
import { useToggle } from "../hooks/useToggle";
import { addToWishlist, removeFromWishlist } from "../services/firebaseFunc";
import isItemInWishlist from "../utility/isItemInWIshlist";

type Props = {
  data: {
    id: string;
    img: string;
    name: string;
    price: number;
  };
  userData?: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    wishlist: any[];
    cart: any[];
    address: any;
  };
};

const ProductCard = ({ data, userData }: Props): React.ReactElement => {
  const { toggle, toggleBtn } = useToggle();

  const { authToken, isAuth } = useAuthStatus();

  const queryClient = useQueryClient();

  const router = useRouter();

  const { mutate } = useMutation(
    ["users"],
    async () => {
      addToWishlist(authToken!, data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
      },
    }
  );

  const { mutate: wishlistRemove } = useMutation(
    ["users"],
    async () => {
      removeFromWishlist(authToken!, data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
      },
    }
  );

  return (
    <div className="relative h-fit w-full select-none hover:cursor-pointer">
      <span className="absolute right-5 top-3 z-10 rounded-full bg-gray-50 p-1 opacity-70 shadow-lg transition-transform hover:bg-gray-300 hover:text-gray-900">
        {isAuth &&
        isItemInWishlist({ userData: userData, productData: data }) ? (
          <MdFavorite
            size={25}
            onClick={() => {
              isAuth ? wishlistRemove() : router.push("/login");
            }}
          />
        ) : (
          <MdFavoriteBorder
            size={25}
            onClick={() => {
              isAuth ? mutate() : router.push("/login");
            }}
          />
        )}
      </span>
      <div className="relative h-40 w-full">
        <Image
          src={data.img}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="relative flex flex-col justify-center p-2 leading-5">
        <h1 className="text-sm font-semibold">{data.name}</h1>
        <h3 className="text-[#7F7F7F]">Rs. {data.price}</h3>
        <MdArrowRightAlt
          size={20}
          color="#797979"
          className="absolute right-5 bottom-3"
        />
      </div>
    </div>
  );
};

export default ProductCard;

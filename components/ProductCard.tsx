import Image from "next/image";
import { MdArrowRightAlt, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { ProductCardProps } from "../types/types";

const ProductCard = ({
  productData,
  userData,
}: ProductCardProps): React.ReactElement => {
  return (
    <div className="relative h-fit w-full select-none hover:cursor-pointer">
      <span className="absolute right-5 top-3 z-10 rounded-full bg-gray-50 p-1 opacity-70 shadow-lg transition-transform hover:bg-gray-300 hover:text-gray-900">
        {true ? <MdFavorite size={25} /> : <MdFavoriteBorder size={25} />}
      </span>
      <div className="relative h-40 w-full">
        <Image
          src={productData.img}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className="relative flex flex-col justify-center p-2 leading-5">
        <h1 className="text-sm font-semibold">{productData.name}</h1>
        <h3 className="text-[#7F7F7F]">Rs. {productData.price}</h3>
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

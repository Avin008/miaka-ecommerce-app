import Image from "next/image";
import { MdStar } from "react-icons/md";
import { useSelectSize } from "../hooks";
import { ProductData } from "../types";

const SingleProductPage = ({ productData }: { productData: ProductData }) => {
  const { size, sizeSetter } = useSelectSize();

  return (
    <div className="sm:grid-col-1 grid h-96 w-full gap-5 md:grid-cols-2">
      <div className="h-full w-full rounded-md border border-gray-400 p-1">
        <div className="relative h-full w-full">
          <Image src={productData.img} layout="fill" alt="" />
        </div>
      </div>
      <div className="space-y-2 rounded-md border border-gray-300">
        <div className="border-b border-gray-400 p-3">
          <h1 className="font-base text-2xl">{productData.name}</h1>
        </div>
        <div className="flex items-center gap-5 p-3 font-medium">
          <h2 className="text-2xl">Rs. {productData.discountedPrice}</h2>
          <h3 className="text-1xl">
            MRP: <span className="line-through">Rs. {productData.price}</span>
          </h3>
          <h4 className="text-2xl text-orange-600">(60% OFF)</h4>
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
        <div className="flex gap-3 p-4">
          <button className="h-10 w-full rounded-md border border-gray-600 bg-gray-600 text-gray-50">
            ADD TO BAG
          </button>
          <button className="h-10 w-full rounded-md border border-gray-600">
            ADD TO WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;

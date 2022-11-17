import Image from "next/image";
import { useSelectSize } from "../hooks";

const SingleProductPage = () => {
  const { size, sizeSetter } = useSelectSize();

  console.log(size);

  return (
    <div className="grid h-96 grid-cols-2 gap-5">
      <div className="h-full w-full rounded-md border border-gray-400 p-1">
        <div className="relative h-full w-full">
          <Image
            src={
              "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            layout="fill"
            alt=""
          />
        </div>
      </div>
      <div className="space-y-2 border border-gray-300">
        <div className="border-b border-gray-400 p-3">
          <h1 className="font-base text-2xl">Men Maroon Printed T-Shirt</h1>
        </div>
        <div className="flex items-center gap-5 p-3 font-medium">
          <h2 className="text-2xl">Rs. 319</h2>
          <h3 className="text-1xl">
            MRP: <span className="line">Rs. 775</span>
          </h3>
          <h4 className="text-2xl text-orange-600">(60% OFF)</h4>
        </div>
        <div className="space-y-2 p-3">
          <h1 className="font-medium">SELECT SIZE</h1>
          <div className="flex h-10 w-full gap-4">
            <div
              onClick={(e) => sizeSetter(e.currentTarget.innerText)}
              className={`relative ${
                size === "S" && "bg-gray-600 text-gray-100"
              } flex  h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-600 transition-transform`}
            >
              <span className="absolute">S</span>
            </div>{" "}
            <div
              onClick={(e) => sizeSetter(e.currentTarget.innerText)}
              className={`relative ${
                size === "M" && "bg-gray-600 text-gray-100"
              } flex  h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-600 transition-transform`}
            >
              <span className="absolute">M</span>
            </div>{" "}
            <div
              onClick={(e) => sizeSetter(e.currentTarget.innerText)}
              className={`relative ${
                size === "L" && "bg-gray-600 text-gray-100"
              } flex  h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-600 transition-transform`}
            >
              <span className="absolute">L</span>
            </div>
            <div
              onClick={(e) => sizeSetter(e.currentTarget.innerText)}
              className={`relative flex transition-transform ${
                size === "XL" && "bg-gray-600 text-gray-100"
              } h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-600`}
            >
              <span className="absolute">XL</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3 p-4">
          <button className="w-full rounded-md border border-gray-600 bg-gray-600 px-8 py-2 text-gray-50">
            ADD TO BAG
          </button>
          <button className="w-full rounded-md border border-gray-600 px-3 py-2">
            ADD TO WISHLIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;

import Card from "../components/Card";
import { products } from "../components/TrendingProducts";
import Image from "next/image";

const WishList = (): React.ReactElement => {
  return (
    <div className="mx-auto mt-20 w-11/12 space-y-5 px-3">
      <div className="flex flex-wrap items-center justify-between">
        <h1 className=" text-lg font-bold">My Wishlist ({products.length}) </h1>
        {/* <button className="rounded-md border border-gray-800 p-1 px-2">
          Move all to bag
        </button> */}
      </div>

      {products.length ? (
        <div className="grid h-72 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((x) => (
            <Card key={x.price} data={x} />
          ))}
        </div>
      ) : (
        <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
          <div
            className="flex flex-col items-center justify-center
        space-y-3 p-1 text-center"
          >
            <span>
              <Image
                src="/favourite.png"
                height={60}
                width={60}
                alt="wishlist"
              />
            </span>

            <span className="flex flex-col items-center">
              <h1 className="text-lg font-medium">Your Wishlist is Empty</h1>
              <p className="text-sm font-normal text-[#7F7F7F]">
                Tap heart button to start saving your favorite items.
              </p>
            </span>

            <button className="border border-gray-800 px-4 py-1 transition-all hover:bg-gray-100 active:bg-gray-200">
              Add Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishList;

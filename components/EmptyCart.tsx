import Image from "next/image";
import Link from "next/link";

const EmptyCart = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3 p-1 text-center">
      <span>
        <Image src="/bag.png" height={60} width={60} alt="wishlist" />
      </span>

      <span className="flex flex-col items-center">
        <h1 className="text-lg font-medium">Your Bag is Empty</h1>
        <p className="text-sm font-normal text-[#7F7F7F]">
          Tap Add to Bag button to start adding your favorite items to your bag.
        </p>
      </span>
      <Link href="/products">
        <button className="border border-gray-800 px-4 py-1 transition-all hover:bg-gray-200 active:bg-gray-300">
          Add Now
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;

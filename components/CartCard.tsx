import Image from "next/image";
import { useState } from "react";
import {
  MdClose,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import useRemoveFromCart from "../hooks/useRemoveFromCart";
import { CartCardProps } from "../types/types";

const CartCard = ({
  productData,
  userData,
}: CartCardProps): React.ReactElement => {
  const [itemQty, setItemQty] = useState<number>(1);
  const { removeFromCartFunc } = useRemoveFromCart(productData);

  return (
    <div className="relative grid h-36 w-full grid-cols-6 gap-2 rounded-md border border-gray-600">
      <span className="absolute right-2 top-2 cursor-pointer rounded-full border border-gray-100 p-1 hover:bg-gray-50">
        <MdClose size={22} onClick={() => removeFromCartFunc()} />
      </span>
      <div className="col-span-2 p-2">
        <div className="relative h-full w-full">
          <Image
            className="rounded-md"
            src={productData.img}
            objectFit="cover"
            layout="fill"
            alt=""
          />
        </div>
      </div>

      <div className="rounded-r-m flex items-center text-sm font-medium">
        {productData.name}
      </div>
      <div className="flex select-none items-center justify-center gap-2">
        <span
          className="cursor-pointer text-lg font-semibold hover:text-gray-700 active:-translate-y-1"
          onClick={() => setItemQty((prev) => (prev += 1))}
        >
          <MdKeyboardArrowUp />
        </span>
        <span className="font-base flex h-6 w-6 items-center justify-center border border-gray-300 bg-gray-200 text-base">
          {itemQty}
        </span>
        <span
          className="cursor-pointer text-lg font-semibold active:-translate-y-1"
          onClick={() =>
            setItemQty((prev) => {
              if (prev > 1) {
                return (prev -= 1);
              } else {
                return prev;
              }
            })
          }
        >
          <MdKeyboardArrowDown />
        </span>
      </div>
      <div className="rounded-r-m font-sm flex items-center text-sm font-medium text-gray-700">
        Size: {"M"}
      </div>
      <div className="rounded-r-m font-sm col-span-1 flex items-center text-sm font-medium text-gray-700">
        Rs.{productData.price}
      </div>
    </div>
  );
};

export default CartCard;

import Image from "next/image";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useToggle } from "../hooks/useToggle";
import SelectSize from "./SelectSize";

type Props = {
  data: {
    img: string;
    name: string;
    price: number;
  };
};

const Card = ({ data }: Props): React.ReactElement => {
  const { toggle, toggleBtn } = useToggle();
  const { toggle: addToCart, toggleBtn: toggleCartBtn } = useToggle();

  const {
    toggle: sizeBar,
    toggleTrue: displaySizeBar,
    toggleFalse: hideSizeBar,
  } = useToggle();

  return (
    <div
      className="relative h-fit w-full select-none hover:cursor-pointer"
      onMouseEnter={() => displaySizeBar()}
      onMouseLeave={() => hideSizeBar()}
    >
      <span className="absolute right-5 top-3 z-10 rounded-full bg-gray-50 p-1 opacity-70 shadow-lg transition-transform hover:bg-gray-300 hover:text-gray-900">
        {toggle ? (
          <MdFavorite size={25} onClick={toggleBtn} />
        ) : (
          <MdFavoriteBorder size={25} onClick={toggleBtn} />
        )}
      </span>
      <div className="relative h-40 w-full">
        <Image
          src={data.img}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        {sizeBar && <SelectSize />}
      </div>
      <div className="relative flex flex-col justify-center p-2 leading-5">
        <h1 className="text-sm font-semibold">{data.name}</h1>
        <h3 className="text-[#7F7F7F]">Rs. {data.price}</h3>
        <div className="mt-1 transition-all">
          {addToCart ? (
            <button
              className="flex w-full items-center justify-center gap-1 rounded-md border border-white bg-gray-900 py-2 px-1 text-white opacity-80 transition-all hover:opacity-90"
              onClick={toggleCartBtn}
            >
              <span className="text-sm">ADD TO BAG</span>
            </button>
          ) : (
            <button
              className="flex w-full items-center justify-center gap-1 rounded-md border border-white bg-gray-900 py-2 px-1 text-white opacity-90 transition-all hover:opacity-90"
              onClick={toggleCartBtn}
            >
              <span className="text-sm">REMOVE FROM BAG</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

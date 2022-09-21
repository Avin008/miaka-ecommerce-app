import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";

type Props = {
  data: {
    img: string;
    name: string;
    price: number;
  };
};

const ProductCard = ({ data }: Props): React.ReactElement => {
  return (
    <div className="h-fit w-full hover:cursor-pointer">
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

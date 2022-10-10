import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

type Props = { data: { id: string; name: string; img: string; route: string } };

const CategoryCard = ({ data }: Props): React.ReactElement => {
  return (
    <Link href={data.route}>
      <div className="transition-all hover:cursor-pointer">
        <div className="relative aspect-square">
          <Image
            className="rounded-md"
            layout="fill"
            objectFit="cover"
            src={data.img}
            alt={data.name}
            priority={true}
          />
        </div>
        <div className="relative flex flex-col justify-center p-2">
          <h1 className="font-medium">{data.name}</h1>
          <h2 className="text-sm font-normal text-[#7F7F7F]">Explore Now!</h2>
          <MdArrowRightAlt
            size={20}
            color="#797979"
            className="absolute right-5"
          />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

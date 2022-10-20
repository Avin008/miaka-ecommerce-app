import Image from "next/image";
import { useRouter } from "next/router";
import { MdArrowRightAlt } from "../icons";
import { useFilterStore } from "../lib/store";
import { CategoryCardProps } from "../types";

const CategoryCard = ({ data }: CategoryCardProps): React.ReactElement => {
  const selectCategory = useFilterStore((state) => state.selectCategory);
  const clearFilters = useFilterStore((state) => state.clearAllFilters);

  const router = useRouter();

  const redirect = () => {
    router.push("/products");
    clearFilters();
    selectCategory(data.name);
  };

  return (
    <div className="transition-all hover:cursor-pointer" onClick={redirect}>
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
  );
};

export default CategoryCard;

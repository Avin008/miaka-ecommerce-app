import { CategoryCard } from "../components";

type Props = {
  data: {
    id: string;
    name: string;
    img: string;
    route: string;
  }[];
};

const Category = ({ data }: Props): React.ReactElement => {
  return (
    <div className="mx-auto w-11/12 space-y-5 p-3">
      <h1 className="text-lg font-bold">CATEGORIES</h1>
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-3">
        {data.map((x) => (
          <CategoryCard key={x.id} data={x} />
        ))}
      </div>
    </div>
  );
};

export default Category;

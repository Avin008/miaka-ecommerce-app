import CategoryCard from "./CategoryCard";

const data = [
  {
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    title: "Jackets",
  },
  {
    img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Pants",
  },
  {
    img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    title: "Shoes",
  },
];

const Category = (): React.ReactElement => {
  return (
    <div className="mx-auto w-11/12 space-y-5 p-3">
      <h1 className="text-lg font-bold">CATEGORIES</h1>
      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-3">
        {data.map((x) => (
          <CategoryCard key={x.title} data={x} />
        ))}
      </div>
    </div>
  );
};

export default Category;

import ProductCard from "./ProductCard";

type Product = {
  img: string;
  name: string;
  price: number;
};

export const products: Product[] = [
  {
    img: "https://images.unsplash.com/photo-1625910513413-c23b8bb81cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBvbG8lMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "Allen Solly Tshirt",
    price: 225,
  },
  {
    img: "https://images.unsplash.com/photo-1586363129094-d7a38564fae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "Polo Shirts",
    price: 225,
  },
  {
    img: "https://images.unsplash.com/photo-1629353689974-af4d5c70440f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "Us Pollo Jacket",
    price: 225,
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    name: "Nike Shoe",
    price: 225,
  },
  {
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "Wrogn Jeans",
    price: 225,
  },
  {
    img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: "FastTrack Watch",
    price: 225,
  },
];

const TrendingProducts = (): React.ReactElement => {
  return (
    <div className="mx-auto w-11/12 space-y-5 px-3">
      <h1 className="text-lg font-bold">POPULAR PRODUCTS</h1>
      <div className="grid h-72 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3">
        {products.map((x) => (
          <ProductCard key={x.price} data={x} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;

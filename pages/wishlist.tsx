import Card from "../components/Card";
import { products } from "../components/TrendingProducts";
import EmptyWishlist from "../components/EmptyWishlist";

const WishList = (): React.ReactElement => {
  return (
    <div className="mx-auto mt-20 w-11/12 space-y-5 px-3">
      <div className="flex flex-wrap items-center justify-between">
        <h1 className=" text-lg font-medium">
          My Wishlist ({products.length}){" "}
        </h1>
      </div>

      {products.length ? (
        <div className="grid h-72 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((x) => (
            <Card key={x.price} data={x} />
          ))}
        </div>
      ) : (
        <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
          <EmptyWishlist />
        </div>
      )}
    </div>
  );
};

export default WishList;

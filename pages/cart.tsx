import CartCard from "../components/CartCard";
import CheckoutCard from "../components/CheckoutCard";
import { products } from "../components/TrendingProducts";
import LoadingSpinner from "../components/LoadingSpinner";
import useAuthRedirect from "../hooks/useAuthRedirect";

const Cart = (): React.ReactElement => {
  const { loading } = useAuthRedirect();

  if (loading) return <LoadingSpinner />;

  return (
    <div className="mx-auto mt-20 space-y-5 lg:w-5/6">
      {/* <span>
        <h1 className="text-lg font-medium">My Cart({products.length})</h1>
      </span> */}
      <div className="grid grid-cols-8 gap-5 px-2">
        <div className="space-y-5 sm:col-span-8 lg:col-span-5">
          {products.slice(1).map((x) => (
            <CartCard key={x.id} data={x} />
          ))}
        </div>
        <div className="sm:col-span-8 lg:col-span-3">
          <CheckoutCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;

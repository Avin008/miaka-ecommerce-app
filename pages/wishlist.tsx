import Card from "../components/Card";
import EmptyWishlist from "../components/EmptyWishlist";
import LoadingSpinner from "../components/LoadingSpinner";
import useAuthRedirect from "../hooks/useAuthRedirect";
import useGetUserData from "../hooks/useGetUserData";
import { ProductData } from "../types/types";

const WishList = (): React.ReactElement => {
  const { loading } = useAuthRedirect();

  const { userData, isUserDataLoading } = useGetUserData();

  if (loading || isUserDataLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mx-auto mt-20 w-11/12 space-y-5 px-3">
      <div className="flex flex-wrap items-center justify-between">
        <h1 className=" text-lg font-medium">
          My Wishlist ({userData.wishlist.length}){" "}
        </h1>
      </div>

      {userData.wishlist.length ? (
        <div className="grid h-72 justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {userData.wishlist.map((x: ProductData) => (
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

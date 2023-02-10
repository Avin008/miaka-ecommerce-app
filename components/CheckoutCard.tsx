import { ProductData } from "../types";
import calculateTotalPrice from "../utility/calculateTotalPrice";

const CheckoutCard = ({
  cart,
}: {
  cart: ProductData[];
}): React.ReactElement => {
  const data = calculateTotalPrice(cart);

  return (
    <div className="sticky top-20 col-span-4 h-fit w-full rounded-md border border-gray-400 pb-2 shadow-sm">
      <span className="flex items-center border-b border-gray-400 p-2 text-lg font-medium">
        PRICE DETAILS
      </span>
      <div className="space-y-2 p-2 px-3 font-medium text-gray-700">
        <div className="flex justify-between">
          <span>TOTAL PRICE</span>
          <span>
            Rs.{" "}
            {data.price.toLocaleString("en-US")}
          </span>
        </div>
        <div className="flex justify-between">
          <span>DISCOUNTED PRICE</span>
          <span>
            Rs.{" "}
            {data.discountedPrice.toLocaleString(
              "en-US"
            )}
          </span>
        </div>
        <div className="flex justify-between">
          <span>DELIVERY CHARGE</span>
          <span>Rs. {data.deliveryCharge}</span>
        </div>
        <div>
          <button className="w-full rounded-md bg-gray-600 py-2 text-white hover:bg-gray-700">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;

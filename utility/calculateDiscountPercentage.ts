import { ProductData } from "../types";

const calculateDiscountPercentage = (productData: ProductData) => {
  const discount = productData.price - productData.discountedPrice;
  const percentage = (discount * 100) / productData.price;
  return Math.round(percentage);
};

export default calculateDiscountPercentage;

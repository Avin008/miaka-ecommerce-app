import { ProductData } from "../types";

const removeDuplicateCategories = (productData: ProductData[]) => {
  const categories: any = new Set(productData.map((x) => x.category));
  return [...categories];
};

export default removeDuplicateCategories;

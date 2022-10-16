export type ProductData = {
  id: string;
  name: string;
  img: string;
  price: number;
  sizes: string[];
};

export type UserData = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  wishlist: ProductData[];
  cart: ProductData[];
  address: {};
};

export type CardProps = {
  userData?: UserData;
  productData: ProductData;
};

export type ProductCardProps = {
  productData: ProductData;
  userData: UserData | undefined;
};

export type isProductInWishlist = {
  userData: UserData | undefined;
  productData: ProductData;
};

export type CartCardProps = {
  productData: ProductData;
  userData?: UserData | undefined;
};

export type FilterInitialState = {
  category: string[];
  ratings: number;
  sort_by: string;
  price: number;
  selectCategory: (categoryName: string) => void;
  selectRatings: (ratings: number) => void;
  selectSortBy: (sortType: string) => void;
  selectPrice: (price: number) => void;
  clearAllFilters: () => void;
};

export type ProductData = {
  id: string;
  name: string;
  img: string;
  price: number;
  qty: number;
  size: string;
  category: string;
  discountedPrice: number;
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

export type IsProductInWishlist = {
  userData: UserData | undefined;
  productData: ProductData;
};

export type CartCardProps = {
  cartProductData: ProductData;
  userData?: UserData | undefined;
};

export type SelectSizeProps = {
  data: {
    sizes: string[];
    size: string | undefined;
    sizeSetter: (size: string) => void;
  };
};

export type CategoryData = {
  id: string;
  name: string;
  img: string;
  route: string;
};

export type Category = {
  data: CategoryData[];
};

export type Layout = {
  children: React.ReactNode;
};

export type CategoryCardProps = {
  data: CategoryData;
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

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

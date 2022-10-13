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
  cart: [];
  address: {};
};

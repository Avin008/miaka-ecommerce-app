type Props = {
  userData:
    | {
        id: string;
        firstname: string;
        lastname: string;
        email: string;
        wishlist: any[];
        cart: any[];
        address: {};
      }
    | undefined;
  productData: { id: string; name: string; img: string; price: number };
};

const isItemInWishlist = ({ userData, productData }: Props): boolean =>
  userData?.wishlist.find((x) => x.id === productData.id) ? true : false;

export default isItemInWishlist;

export type TArrayString = string[];

export interface IShoe {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  discount: number;
  endprice: string;
  company: string;
  gender: string;
  type: string;
}
export interface ICartShoe {
  name: string;
  img: string;
  price: string | number;
  count: number;
}

export interface IFaq {
  title: string;
  subTitle: string;
  description: string;
}

// store
export interface IFilters {
  category: string;
  sort: string;
  gender: string;
  search: string;
  brand: string;
}

export interface IUser {
  isLogin: boolean;
  email: string;
}
export interface ICartState {
  shoes: ICartShoe[];
}

export interface IUSerStateErrors {
  email: string;
  password: string;
}

export type TFavorites = Pick<IShoe, 'id' | 'name' | 'image' | 'company'>;

// when the data has be update
export interface TFavoritesModel extends TFavorites {
  _id: string;
}
export interface IFavorites {
  id: string;
  favorites: TFavoritesModel[];
}

export interface IUserSate {
  token: string;
  isLogin: boolean;
  isFetching: boolean;
  favorites: IFavorites;
  errors: IUSerStateErrors;
}

export interface IState {
  user: IUserSate;
  isFetching: boolean;
  shoesData: IShoe[];
  isModalAuth: boolean;
  cart: ICartState;
  showFilter: boolean;
  filters: IFilters;
}

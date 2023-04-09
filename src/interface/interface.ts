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

export type TFavorites = Pick<IShoe, 'id' | 'name' | 'image' | 'company'>;

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

export interface IUserSate {
  isLogin: boolean;
  favorites: TFavorites[];
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

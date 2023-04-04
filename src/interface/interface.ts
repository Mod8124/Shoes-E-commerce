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

export interface ICarShoe {
  name: string;
  img: string;
  price: string | number;
  count: number;
}

// store
export interface IFilters {
  category: string;
  sort: string;
  gender: string;
  search: string;
  brand: string;
}
export interface IState {
  shoes: ICarShoe[];
  showFilter: boolean;
  filters: IFilters;
  isFetching: boolean;
  shoesData: IShoe[];
  isModalAuth: boolean;
}

import { createStore } from 'vuex';
import { IShoe, IState, IFilters, TFavoritesModel } from '@/interface/interface';
import { cart } from './cartModule';
import { userModule } from './userModule';

const URLBASE = process.env.VUE_APP_MY_ENV_VARIABLE;

export default createStore<IState>({
  state: {
    user: {
      token: '',
      isLogin: <boolean>false,
      isFetching: <boolean>false,
      favorites: {
        id: <string>'',
        favorites: <TFavoritesModel[]>[],
      },
      errors: {
        email: <string>'',
        password: <string>'',
      },
    },
    isFetching: <boolean>false,
    shoesData: <IShoe[]>[],
    isModalAuth: <boolean>false,
    cart: {
      shoes: [],
    },
    showFilter: <boolean>true,
    filters: <IFilters>{
      sort: '',
      search: '',
      gender: '',
      brand: '',
      category: '',
    },
  },
  getters: {
    filteredSneakers(state) {
      let filtered = state.shoesData.filter((sneaker) => {
        return (
          (!state.filters.category || sneaker.type === state.filters.category) &&
          (!state.filters.gender || sneaker.gender === state.filters.gender) &&
          (!state.filters.brand || sneaker.company === state.filters.brand)
        );
      });
      if (state.filters['search']) {
        filtered = filtered.filter((sneaker) =>
          sneaker.name.toLowerCase().includes(state.filters['search'].toLowerCase())
        );
      }
      return filtered;
    },
    sortedSneakers(state, getters) {
      const sortByPrice = [...getters.filteredSneakers].sort((a: IShoe, b: IShoe) => {
        return state.filters.sort === 'high'
          ? parseFloat(b.endprice) - parseFloat(a.endprice)
          : parseFloat(a.endprice) - parseFloat(b.endprice);
      });
      return state.filters.sort !== '' ? sortByPrice : getters.filteredSneakers;
    },
    checkIsEmpty(state, getters) {
      const sortedSneakers = getters.sortedSneakers;
      if (sortedSneakers.length === 0 && !state.isFetching) {
        for (const key in state.filters) {
          if (state.filters[key as keyof IFilters]) {
            return true;
          }
        }
        return false;
      }
      return false;
    },
  },
  mutations: {
    //toggle filter
    changeShowFilter(state) {
      state.showFilter = !state.showFilter;
    },

    // set filters values
    SET_FILTERS(state, { filterType, filterValue }: { filterType: keyof IFilters; filterValue: string }) {
      state.filters[filterType] = filterValue;
    },

    // isFetching
    updateIsFetching(state) {
      state.isFetching = !state.isFetching;
    },

    // shoes data
    updateShoesData(state, data) {
      state.shoesData = data;
    },

    // isModalAuth
    updateModalAuth(state) {
      state.isModalAuth = !state.isModalAuth;
    },
  },
  actions: {
    async getShoesData({ commit }, { page = 1 }) {
      try {
        commit('updateIsFetching');
        const response = await fetch(`${URLBASE}shoes?page=${page}`);
        const data = await response.json();
        if (data) {
          commit('updateShoesData', data.data);
          commit('updateIsFetching');
        }
      } catch (err) {
        console.log(err);
      }
    },

    set_filters({ commit }, { filterType, filterValue }) {
      commit('SET_FILTERS', { filterType, filterValue });
    },

    set_ModalAuth({ commit }) {
      commit('updateModalAuth');
    },
  },

  modules: {
    cartModule: cart,
    userModule,
  },
});

import { createStore } from 'vuex';
import { IShoe, ICarShoe, IFilters, IState } from '@/interface/interface';

export default createStore<IState>({
  state: {
    shoes: <ICarShoe[]>[],
    showFilter: <boolean>true,
    filters: <IFilters>{
      sort: '',
      search: '',
      gender: '',
      brand: '',
      category: '',
    },
    isFetching: <boolean>false,
    shoesData: <IShoe[]>[],
    isModalAuth: <boolean>false,
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
  },
  mutations: {
    deleteShoes(state, index) {
      state.shoes.splice(index, 1);
    },
    add(state, item) {
      state.shoes.push(item);
    },
    restart(state) {
      state.shoes = [];
    },
    changeShowFilter(state) {
      state.showFilter = !state.showFilter;
    },

    // filters
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
        const response = await fetch(`http://localhost:3000/api/v1/shoes?page=${page}`);
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
      console.log(filterType, filterValue);
      commit('SET_FILTERS', { filterType, filterValue });
    },

    set_ModalAuth({ commit }) {
      commit('updateModalAuth');
    },
  },

  modules: {},
});

import { Module } from 'vuex';
import { ICartShoe, IState, ICartState } from '@/interface/interface';

export const cartBase = {
  shoes: <ICartShoe[]>[],
};

export const cart: Module<ICartState, IState> = {
  namespaced: true,
  state: cartBase,
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
  },
  actions: {},
};

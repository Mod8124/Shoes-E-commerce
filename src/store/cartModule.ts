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
      const currentShoes = [...state.shoes];
      localStorage.setItem('cart', JSON.stringify(currentShoes));
    },
    add(state, item) {
      state.shoes.push(item);
      const currentShoes = [...state.shoes];
      localStorage.setItem('cart', JSON.stringify(currentShoes));
    },
    restart(state) {
      state.shoes = [];
      localStorage.removeItem('cart');
    },
    setCart(state, data) {
      state.shoes = data;
    },
  },
  actions: {
    getCart({ commit }) {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        commit('setCart', JSON.parse(cartData));
      }
    },
  },
};

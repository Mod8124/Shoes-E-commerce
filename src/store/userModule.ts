import { IState, IUSerStateErrors, IUserSate, TFavorites } from '@/interface/interface';
import { Module } from 'vuex';
import Cookies from 'js-cookie';
import validator from 'validator';

const userBase = {
  isLogin: <boolean>false,
  favorites: <TFavorites[]>[],
  errors: {
    email: <string>'',
    password: <string>'',
  },
};

export const userModule: Module<IUserSate, IState> = {
  namespaced: true,
  state: userBase,
  mutations: {
    setLoginStatus(state, isLogin) {
      state.isLogin = isLogin;
    },

    setFavorites(state, data) {
      state.favorites = data;
    },

    setErrors(state, { errorType, errorValue }: { errorType: keyof IUSerStateErrors; errorValue: string }) {
      state.errors[errorType] = errorValue;
    },

    clearIsLoginStatus(state) {
      state.isLogin = false;
      Cookies.remove('jwt');
    },
  },
  actions: {
    validateCredentials({ commit }, { email, password }: { email: string; password: string }) {
      if (!email) {
        commit('setErrors', {
          errorType: 'email',
          errorValue: 'Email cannot be empty',
        });
      } else if (!validator.isEmail(email)) {
        commit('setErrors', {
          errorType: 'email',
          errorValue: 'Invalid email format',
        });
        return;
      } else {
        commit('setErrors', {
          errorType: 'email',
          errorValue: '',
        });
      }

      if (!password) {
        commit('setErrors', {
          errorType: 'password',
          errorValue: 'Password cannot be empty',
        });
      } else if (!validator.isStrongPassword(password)) {
        commit('setErrors', {
          errorType: 'password',
          errorValue: 'Should have an uppercase letter, a lowercase letter, a number, and a special character.',
        });
        return;
      } else {
        commit('setErrors', {
          errorType: 'password',
          errorValue: '',
        });
      }
    },
    async login({ commit, dispatch }, { email, password }: { email: string; password: string }) {
      await dispatch('validateCredentials', { email, password });

      // Check for any errors
      const errors = this.state.user.errors;
      if (errors.email || errors.password) {
        return;
      }
      try {
        const response = await fetch('http://localhost:3000/api/v1/user/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        if (response) console.log(response);
        // Cookies.set('jwt', token, { expires: 3 });
        // commit('setUser', response.data.user);
        // commit('setToken', response.data.token);
      } catch (error) {
        console.error(error);
      }
    },

    async register({ commit, dispatch }, { email, password }: { email: string; password: string }) {
      // check if email and password are email and password :D
      await dispatch('validateCredentials', { email, password });

      // Check for any errors
      const errors = this.state.user.errors;
      if (errors.email || errors.password) {
        return;
      }
      // try {
      //   const response = await fetch('/api/user/signup', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ email, password }),
      //   });
      //   const data = await response.json();
      //   if (response) {
      //     console.log(response);
      //     // Cookies.set('jwt', data.token, { expires: 3 });
      //     // commit('SET_AUTH', { isLoggedIn: true, user: data.user });
      //   } else {
      //     console.error(data.errors);
      //   }
      // } catch (error) {
      //   console.error(error);
      // }
    },

    async logout({ commit }) {
      try {
        await fetch('/api/logout', {
          method: 'GET',
        });
        commit('clearToken');
      } catch (error) {
        console.error(error);
      }
    },

    checkLoginStatus({ commit }) {
      // check if the token is present in the cookie
      const token = Cookies.get('jwt');
      if (token) {
        commit('setLoginStatus', true);
        return;
      } else {
        Cookies.remove('jwt');
        commit('setLoginStatus', false);
      }
    },
  },
};

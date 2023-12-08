import { IState, IUSerStateErrors, IUserSate, TFavorites, TFavoritesModel } from '@/interface/interface';
import { Module } from 'vuex';
import Cookies from 'js-cookie';
import validator from 'validator';
import jwt_decode from 'jwt-decode';

const userBase = {
  isLogin: <boolean>false,
  token: <string>'',
  isFetching: <boolean>false,
  favorites: {
    id: <string>'',
    favorites: <TFavoritesModel[]>[],
  },
  errors: {
    email: <string>'',
    password: <string>'',
  },
};

const URL_BASE = process.env.VUE_APP_MY_ENV_VARIABLE;

export const userModule: Module<IUserSate, IState> = {
  namespaced: true,
  state: userBase,
  mutations: {
    setFetching(state) {
      state.isFetching = !state.isFetching;
    },

    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },

    setLoginStatus(state, isLogin) {
      state.isLogin = isLogin;
    },

    setFavorites(state, data) {
      state.favorites = data;
    },

    setErrors(state, { errorType, errorValue }: { errorType: keyof IUSerStateErrors; errorValue: string }) {
      state.errors[errorType] = errorValue;
    },

    restartErrors(state) {
      state.errors.email = '';
      state.errors.password = '';
    },

    clearIsLoginStatus(state) {
      state.isLogin = false;
      Cookies.remove('jwt');
    },
  },
  actions: {
    validateCredentials({ commit }, { email, password }: { email: string; password: string }) {
      const errors: { [key: string]: string } = { email: '', password: '' };

      if (!email) {
        errors.email = 'Email must be filled';
      }

      if (email && !validator.isEmail(email)) {
        errors.email = 'Email not valid';
      }

      // validation password
      if (!password) {
        errors.password = 'Password must be filled';
      } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 char';
      } else if (!/\d/.test(password)) {
        errors.password = 'Password must include a number';
      } else if (!/[A-Z]/.test(password)) {
        errors.password = 'Password must include an uppercase letter';
      } else if (
        !validator.isStrongPassword(password, {
          minLength: 6,
          minUppercase: 1,
          minSymbols: 0,
        })
      ) {
        errors.password = 'Password not strong enough';
      }

      // set errors to state errors
      for (const prop in errors) {
        const msg: string = errors[prop];
        commit('setErrors', {
          errorType: prop,
          errorValue: msg,
        });
      }
    },
    async login({ commit, dispatch, state }, { email, password }: { email: string; password: string }) {
      await dispatch('validateCredentials', { email, password });

      // Check for any errors
      const errors = state.errors;
      if (errors.email || errors.password) {
        return;
      }

      try {
        commit('setFetching');
        const response = await fetch(URL_BASE + 'user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        commit('setFetching');
        if (data.errors) {
          for (const prop in data.errors) {
            const msg: string = data.errors[prop];
            commit('setErrors', {
              errorType: prop,
              errorValue: msg,
            });
          }
        }
        if (data.user) {
          const key = data.user.token;
          commit('setLoginStatus', true);
          commit('setToken', key);
          await dispatch('set_ModalAuth', null, { root: true });
        }
      } catch (error) {
        console.error(error);
      }
    },

    async register({ commit, dispatch, state }, { email, password }: { email: string; password: string }) {
      // check if email and password are email and password :D
      await dispatch('validateCredentials', { email, password });

      // Check for any errors
      const errors = state.errors;
      if (errors.email || errors.password) {
        return;
      }

      try {
        commit('setFetching');
        const response = await fetch(URL_BASE + 'user/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        commit('setFetching');
        if (data.errors) {
          for (const prop in data.errors) {
            const msg: string = data.errors[prop];
            commit('setErrors', {
              errorType: prop,
              errorValue: msg,
            });
          }
        }
        if (data.user) {
          const key = data.user.token;
          commit('setLoginStatus', true);
          commit('setToken', key);
          await dispatch('set_ModalAuth', null, { root: true });
        }
      } catch (error) {
        console.error(error);
      }
    },

    async logout({ commit }) {
      commit('setLoginStatus', false);
      commit('setToken', '');
      localStorage.removeItem('token');
    },

    checkAuth({ commit, dispatch }) {
      const token = localStorage.getItem('token');
      if (!token) {
        return commit('setLoginStatus', false);
      }

      try {
        const decoded: { exp: number } = jwt_decode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds
        if (decoded.exp < currentTime) {
          // Token has expired, user needs to log in again
          dispatch('logout');
        }

        // Token is valid and not expired
        commit('setLoginStatus', true);
        commit('setToken', token);
      } catch (err) {
        // Invalid token, user needs to log in again
        commit('setLoginStatus', false);
      }
    },

    //update favorites
    async getFavorites({ commit, state }) {
      try {
        commit('setFetching');
        const request = await fetch(URL_BASE + 'favorites', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        });
        const data = await request.json();
        commit('setFetching');
        if (data.data) commit('setFavorites', data.data);
        console.log(typeof data.data);
      } catch (err) {
        console.log(err);
      }
    },

    async addFavorites({ commit, state }, shoe: TFavorites) {
      try {
        const request = await fetch(URL_BASE + 'favorites', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${state.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(shoe),
        });
        const data = await request.json();
        if (data.status === 'ok') commit('setFavorites', data.data);
      } catch (err) {
        console.log(err);
      }
    },

    async deleteFavorites({ commit, state }, favoriteId: string) {
      const id = state.favorites.id;
      try {
        const request = await fetch(URL_BASE + 'favorites', {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${state.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id,
            favoriteId,
          }),
        });
        const data = await request.json();
        if (data.status === 'ok') commit('setFavorites', data.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

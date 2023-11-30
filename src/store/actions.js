import axiosClient from "../axios";
import router from "../router";

export function getCurrentUser({ commit }, data) {
  return axiosClient.get('/user', data)
    .then(({ data }) => {
      commit('setUser', data);
      return data;
    })
}

export function login({ commit }, data) {
  return axiosClient.post('/login', data)
    .then(() => {
      commit('setAuthenticated', true);
      router.push({ name: 'Dashboard' })
      return data;
    })
}

export function logout({ commit }) {
  return axiosClient.post('/logout')
    .then((response) => {
      commit('setAuthenticated', false)
      commit('setUser', { name: null, email: null, avatar: null })
      document.cookie = `laravel_session=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Domain=${import.meta.env.VITE_COOKIE_DOMAIN};`
      document.cookie = `XSRF-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Domain=${import.meta.env.VITE_COOKIE_DOMAIN};`
      router.push({ name: 'Login' })
      return response;
    })
}

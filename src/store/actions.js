import axiosClient from "../axios";
import router from "../router";

export async function getCurrentUser({ commit }, data) {
  try {
    const user = await axiosClient.get('/api/user', data)
    commit('setUser', user.data);
  } catch (error) {
    commit('setAuthenticated', false);
    router.push({ name: 'Login' });
  }
}

export async function initializeAuthState({ commit }) {
  commit('setAuthenticated', localStorage.getItem("authenticated") === "true" ? true : false);
  commit('setInitialized', true);
}

export async function login({ commit }, data) {
  try {
    await axiosClient.post('/login', data);
    commit('setAuthenticated', true);
    router.push({ name: 'Dashboard' });
  } catch (error) {
    console.log("login error");
    commit('setErrors', error.response?.data?.errors, { root: true });
    commit('setUser', {});
    commit('setAuthenticated', false);
    await axiosClient.post('/logout');
    removeXsrfCookie();
    router.push({ name: 'Login' });
  }
}

export async function register({ commit }, data) {
  try {
    await axiosClient.post('/register', data);
    commit('setAuthenticated', true);
    router.push({ name: 'Dashboard' });
  } catch (error) {
    commit('setErrors', error.response.data.errors, { root: true });
    router.push({ name: 'Register' });
  }
}


export async function logout({ commit }) {
  try {
    await axiosClient.post('/logout');
  } catch (error) {
    commit('setErrors', error.response.data.errors, { root: true });
  } finally {
    commit('setAuthenticated', false);
    commit('setUser', {});
    removeXsrfCookie();
    router.push({ name: 'Login' });
  }
}

export function resetErrorsForEntity({ commit }, entity) {
  return commit('clearErrors', entity);
}

function removeXsrfCookie() {
  document.cookie = `XSRF-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${import.meta.env.VITE_COOKIE_DOMAIN};`;
}
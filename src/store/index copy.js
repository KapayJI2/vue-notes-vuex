import { createStore } from "vuex";

const store = createStore({
  state: {
    user: null,
    users: [
      { id: 1, name: "evgenii", admin: true },
      { id: 2, name: "alex", admin: true },
      { id: 3, name: "garry", admin: false },
    ],
  },
  mutations: {
    setUser(state, user) {
      console.log("called mutation setState");
      console.log(user);
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }) {
      setTimeout(() => {
        const fakeUser = {
          id: 123,
          name: "fake",
          admin: false,
        };
        commit("setUser", fakeUser);
      }, 1000);
    },
  },
  getters: {
    isUserLogged(state) {
      return state.user ? true : false;
    },
    getUser(state) {
      return state.user;
    },
    getAllUsers(state) {
      return state.users;
    },
    getUsers(state) {
      return state.users.filter((user) => !user.admin);
    },
    getUserById: (state) => (id) => state.users.find((user) => user.id == id),
    getUsersLength(state, getters) {
      const suffix = "Количество пользователей:";
      return `${suffix} ${getters.getAllUsers.length}`;
    },
  },
});

export default store;

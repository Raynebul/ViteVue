export const userModule = {
  state: () => ({
    users: [
      { id: 1, username: "Anton", email: "anton2@mail.ru", password: "123456" },
      {
        id: 2,
        username: "Sergey",
        email: "sergey2@mail.ru",
        password: "654321",
      },
      { id: 3, username: "Sasha", email: "sashok2@mail.ru", password: "abcde" },
    ],
    isAuth: true,
    currentId: 1,
  }),
  mutations: {
    changeAuth(state, isAuth) {
      state.isAuth = isAuth;
    },
  },
  namespace: true,
};

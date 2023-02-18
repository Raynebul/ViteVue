import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
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
  }),
  getters: {
    getUSerbyLogin: (state) => {
      //console.log(state.projects.filter((project) => project.userId === 1))
      return (login) =>
        state.users.find((user) => user.username === login);
    },
  }
});

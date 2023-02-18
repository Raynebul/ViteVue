import { defineStore } from "pinia";

export const useCourseStore = defineStore("courseStore", {
  state: () => ({
    courses: [
      {
        id: 1,
        name: "Основы SQL",
        description: "Second",
        pageCount: 4,
        pages: [
          { id_: 1, name: "Введение в запросы", text: "1_1" },
          { id_: 2, name: "Основы запросов", text: "1_2" },
          { id_: 3, name: "Запрос SELECT", text: "1_3" },
          { id_: 4, name: "Запрос WHERE", text: "1_4" },
        ],
      },
      {
        id: 2,
        name: "Мастерство SQL",
        description: "Second1",
        pageCount: 3,
        pages: [
          { id_: 1, name: "", text: "2_1" },
          { id_: 2, name: "", text: "2_2" },
          { id_: 3, name: "", text: "2_3" },
        ],
      },
      {
        id: 3,
        name: "Third",
        description: "Second2",
        pageCount: 2,
        pages: [
          { id_: 1, name: "", text: " " },
          { id_: 2, name: "", text: " " },
          { id_: 2, name: "", text: " " },
        ],
      },
    ],
  }),
});

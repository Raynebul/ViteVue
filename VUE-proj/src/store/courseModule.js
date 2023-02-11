export const courseModule = {
  state: () => ({
    courses: [
      {
        id: 1,
        name: "First",
        description: "Second",
        pageCount: 4,
        pages: [
          { id_: 1, text: "1_1" },
          { id_: 2, text: "1_2" },
          { id_: 3, text: "1_3" },
          { id_: 4, text: "1_4" },
        ],
      },
      {
        id: 2,
        name: "Second",
        description: "Second1",
        pageCount: 3,
        pages: [
          { id_: 1, text: "2_1" },
          { id_: 2, text: "2_2" },
          { id_: 3, text: "2_3" },
        ],
      },
      {
        id: 3,
        name: "Third",
        description: "Second2",
        pageCount: 2,
        pages: [
          { id_: 1, text: " " },
          { id_: 2, text: " " },
          { id_: 2, text: " " },
        ],
      },
    ],
  }),
  getters: {

  },
  namespace: true,
};

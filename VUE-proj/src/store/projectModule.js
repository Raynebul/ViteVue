export const projectModule = {
  state: () => ({
    form: {
      name: "",
      description: "",
    },
    projects: [
      {
        id: 1,
        name: "First",
        author: "Anton",
        description: "Second",
        private: false,
        autosave: false,
      },
      {
        id: 2,
        name: "Second",
        author: "Anton",
        description: "Second1",
        private: false,
        autosave: false,
      },
      {
        id: 3,
        name: "Third",
        author: "Sergey",
        description: "Second2",
        private: false,
        autosave: false,
      },
    ],
  }),
  getters: {

  },
  mutations: {
    createProject(state) {
      const { ...project } = state.form;
      state.projects.push({
        ...project,
        id: Date.now(),
      });

      state.form.name = state.form.description = "";
    },
  },
  actions: {

    deleteProject(state, id) {
      state.projects = state.projects.filter((c) => c.id !== id);
    },
  },
  namespace: true,
};

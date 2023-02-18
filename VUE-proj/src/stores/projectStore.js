import { defineStore } from "pinia";
/*import type { IMyItem } from './types'
import { createId } from './utils'
         👇      👇
import { ref, reactive } from 'vue' */

export const useProjectStore = defineStore("projectStore", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "First",
        author: "Anton",
        userId: 1,
        description: "Описание проекта",
        query: "SELECT * FROM humans",
        script: "",
        private: false,
        autosave: false,
      },
      {
        id: 2,
        name: "Second",
        author: "Anton",
        userId: 1,
        description: "Описание проекта",
        query: "SELECT * FROM humans",
        script: "",
        private: false,
        autosave: false,
      },
      {
        id: 3,
        name: "Third",
        author: "Sergey",
        userId: 2,
        description: "Описание проекта",
        query: "SELECT * FROM humans",
        script: "",
        private: false,
        autosave: false,
      },
    ],
    form: {
      name: "",
      description: "",
    },
  }),

  getters: {
    getProjectsPerAuthor: (state) => {
      console.log(state.projects.filter((project) => project.userId === 1))
      return (authorId) =>
        state.projects.filter((project) => project.userId === authorId);
    },
  },
  actions: {
    addProject(name, description) {
      this.projects.push({
        id: this.projects[this.projects.length - 1].id + 1,
        name: name,
        author: "Anton",
        userId: 1,
        description: description,
        private: false,
        autosave: false,
      });
    },
    deleteProject(id) {
      this.projects = this.projects.filter((c) => c.id !== id);
    },
  },
});

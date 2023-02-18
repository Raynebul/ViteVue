<template>
  <div class="createprojectpage">
    <div id="projectdata">
      <!--  <% if(username != undefined) { %>  -->
      <div>Выберите готовые проекты, созданные вами:</div>
      <!--<div>{{ projectStore.projects }}</div> -->
      <!-- <% for(var i=0; i < data.length; i++) { %> -->
      <div>
        <projectPost
          v-for="project in projectStore.projects"
          :key="project.id"
          :project="project"
          
        />
      </div>
      <!--  <% } %> <% } else { %>-->
      <div>Войдите, чтобы увидеть все созданные вами проекты</div>
      <!--<% } %>-->
    </div>
    <div>
      <!-- <% if(username != undefined) { %>-->
      <p>Или создайте новый проект:</p>
      <form @submit.prevent="CreateProject">
        <p>Имя проекта</p>
        <input
          v-model="project_input.name"
          name="projectname"
          class="form-control"
          type="text"
          placeholder="Имя проекта"
          aria-label="default input example"
        />
        <p>Описание проекта</p>
        <input
          v-model="project_input.description"
          name="projectDescription"
          class="form-control"
          type="text"
          placeholder="Описание проекта"
          aria-label="default input example"
        />

        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            name="autosave"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"
            >Автосохранения</label
          >
        </div>

        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            name="private"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"
            >Приватный</label
          >
        </div>
        <!--    @click="projectStore.addProject()" -->
        <button
          type="submit"
          class="btn btn-primary btn-lg"
        >
          Создать новый проект
        </button>
      </form>
      <!-- <% } else { %>-->
    </div>
    <a
      class="btn btn-primary btn-lg"
      data-bs-target="#exampleModal"
      data-bs-toggle="modal"
      >Войти</a
    >
    <!-- <% } %>-->
  </div>
</template>

<script setup>
//import db from "../database";
import { useProjectStore } from "../stores/projectStore";
import projectPost from "../components/ProjectPost.vue";
import { ref } from "vue";

const projectStore = useProjectStore();

const project_input = ref({
  name: "",
  description: "",
});

const CreateProject = () => {
  projectStore.addProject(
    project_input.value.name,
    project_input.value.description
  );
  project_input.value={
    name:"",
    description:"",
  }
};
</script>

<style></style>

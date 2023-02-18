<template>
  <h1>
    Страница пользователя: {{ userStore.users[$route.params.id - 1].username }}
  </h1>
  <p>ID пользователя: {{ id }}</p>
  <div class="card shadow" style="width: 54rem; margin: 1rem">
    <div class="card-body">
      <div class="card mb-3" style="max-width: 540px; border: none">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="./img/free-settings-icon-3110-thumb.png"
              class="img-fluid rounded-start"
              alt="..."
              width="100"
              height="100"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-text">Созданные проекты:</div>
      <projectPost
        v-for="project in projectStore.getProjectsPerAuthor(
          parseInt($route.params.id)
        )"
        :key="project.id"
        :project="project"
        class="card-text"
        id="createdprojects"
      />

      <button class="btn btn-primary">Выйти из аккаунта</button>
    </div>
  </div>
</template>

<style></style>

<script setup>
import { useProjectStore } from "../stores/projectStore";
import { useUserStore } from "../stores/userStore";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import projectPost from "../components/CreatedProjects.vue";
//const { getProjectsPerAuthor } = storeToRefs(useProjectStore())

const userStore = useUserStore();
const projectStore = useProjectStore();
const { getProjectsPerAuthor } = storeToRefs(useProjectStore());
const route = useRoute();
const id = route.params.id;
console.log(projectStore.getProjectsPerAuthor(1));
console.log(projectStore.projects);
</script>

<template>
  <div class="createprojectpage">
    <div id="projectdata">
      <!--  <% if(username != undefined) { %>  -->
      <div>Выберите готовые проекты, созданные вами:</div>
      <!-- <% for(var i=0; i < data.length; i++) { %> -->
      <div v-if="isAuth">
        <div v-for="project in projects" :key="project.id">
          <a class="projectlink" @click="$router.push(`/sandbox/${project.id}`)">
            <div class="card mb-3 shadow-sm" style="max-width: 18rem">
              <div class="card-header bg-primary text-white">
                {{ project.name }}
              </div>
              <div class="card-body">
                <p class="card-text">{{ project.description }}</p>
              </div>
            </div>
            <!-- <div class="projectblock">        
             <div class="projectbox">
             <p class="projectname"><%= data[i].projectname %></p>
             <p class="projectdate">12.01.2023</p>      
            </div>  
            </div> -->
          </a>
        </div>
      </div>
      <!--  <% } %> <% } else { %>-->
      <div v-else>Войдите, чтобы увидеть все созданные вами проекты</div>
      <!--<% } %>-->
    </div>

    <!-- <% if(username != undefined) { %>-->
    <p>Или создайте новый проект:</p>
    <form method="POST" action="/sandbox">
      <p>Имя проекта</p>
      <input
        name="projectname"
        class="form-control"
        type="text"
        placeholder="Имя проекта"
        aria-label="default input example"
      />
      <p>Описание проекта</p>
      <input
        name="projectDescription"
        class="form-control"
        type="text"
        placeholder="Описание проекта"
        aria-label="default input example"
      />

      <!-- <input type="text" id="userProjectname" name="projectname">
         
         <input id="description" type="text" placeholder="Введите текст" name="projectDescription"></input> -->

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

      <button class="btn btn-primary btn-lg">Создать новый проект</button>
    </form>
    <!-- <% } else { %>-->
    <a
      class="btn btn-primary btn-lg"
      data-bs-target="#exampleModal"
      data-bs-toggle="modal"
      >Войти</a
    >
    <!-- <% } %>-->
  </div>
</template>

<script>
//import db from "../database";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data: function () {
    return {};
  },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({}),
  },
  computed: {
    ...mapState({
      projects: (state) => state.project.projects,
      isAuth: (state) => state.user.isAuth,
    }),

    ...mapGetters({}),
  },
};
</script>

<style></style>

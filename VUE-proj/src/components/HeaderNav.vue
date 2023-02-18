<script setup>
import { RouterLink } from "vue-router";
import LogIn from "./LogIn.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SQL</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <a class="navbar-brand" href="#">SQL</a>-->
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page"
              >Главная</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/course" class="nav-link" href="/course"
              >Курсы</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/sandbox" class="nav-link" tabindex="-1"
              >Проекты</RouterLink
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              href=""
              data-bs-target="#myModal"
              data-bs-toggle="modal"
              >Язык</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href=""
              data-bs-target="#myModal"
              data-bs-toggle="modal"
              >День/Ночь</a
            >
          </li>

          <!--   <% if(username === undefined) { %> -->
          <li class="nav-item">
            <a
              class="nav-link"
              data-bs-target="#exampleModal"
              data-bs-toggle="modal"
              >Профиль</a
            >
            <!--
            <a
              
              class="nav-link"
              @click="$router.push(`/user`)"
              data-bs-toggle="modal"
              >Профиль</a
            >-->
          </li>
          <!-- <% } else { %> -->
          <!-- <li class="nav-item">
            <RouterLink to="/user" class="nav-link">Профиль</RouterLink>
          </li>-->
          <!-- <% } %> -->
        </ul>
        <!--   <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button> -->
      </div>
    </div>
  </nav>

  <LogIn /> 
</template>

<style></style>

<script>
/*


import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  data: function () {
    return {};
  },
  methods: {
    ...mapMutations({
      changeAuth: "project/ChangeAuth",
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
}; */
</script>

<template>
  <main>
    <div class="coursestatus">
      <div class="courseflag">
        <p class="coursenamestyle">{{ courseStore.courses[id - 1].name }}</p>
        <p>Описание курса: {{ courseStore.courses[id - 1].description }}</p>
        <p>Сколько страниц: 0 из {{ courseStore.courses[id - 1].pageCount }}</p>
        <p>Сложность: Легкая</p>
      </div>
      <div class="course_bottom">
        <div class="card w-75">
          <div class="card-body">
            <h5 class="card-title">О курсе:</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sollicitudin ultrices dictum. Nullam non diam vestibulum, interdum
              nibh quis, sollicitudin sem. Vivamus sit amet sagittis massa. Cras
              aliquet lacus at interdum blandit. Quisque quis tellus nunc. Cras
              at nisi laoreet, suscipit nibh quis, pellentesque diam.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Etiam a bibendum orci. Sed
              fermentum consequat mauris adipiscing condimentum. Phasellus id
              convallis nunc. Nullam vel mollis purus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Cras nec neque vel risus accumsan sollicitudin quis ut velit.
              Fusce et libero hendrerit, accumsan enim non, dictum eros. Proin
              sem justo, porta id magna quis, consequat scelerisque urna.
            </p>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sollicitudin ultrices dictum. Nullam non diam vestibulum, interdum
              nibh quis, sollicitudin sem. Vivamus sit amet sagittis massa. Cras
              aliquet lacus at interdum blandit. Quisque quis tellus nunc. Cras
              at nisi laoreet, suscipit nibh quis, pellentesque diam.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Etiam a bibendum orci. Sed
              fermentum consequat mauris adipiscing condimentum. Phasellus id
              convallis nunc. Nullam vel mollis purus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Cras nec neque vel risus accumsan sollicitudin quis ut velit.
              Fusce et libero hendrerit, accumsan enim non, dictum eros. Proin
              sem justo, porta id magna quis, consequat scelerisque urna.
            </p>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              sollicitudin ultrices dictum. Nullam non diam vestibulum, interdum
              nibh quis, sollicitudin sem. Vivamus sit amet sagittis massa. Cras
              aliquet lacus at interdum blandit. Quisque quis tellus nunc. Cras
              at nisi laoreet, suscipit nibh quis, pellentesque diam.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Etiam a bibendum orci. Sed
              fermentum consequat mauris adipiscing condimentum. Phasellus id
              convallis nunc. Nullam vel mollis purus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Cras nec neque vel risus accumsan sollicitudin quis ut velit.
              Fusce et libero hendrerit, accumsan enim non, dictum eros. Proin
              sem justo, porta id magna quis, consequat scelerisque urna.
            </p>
            <a href="#" class="btn btn-primary">Кнопка</a>
          </div>
        </div>

        <div
          class="card text-center"
          style="width: 15rem; height: 11rem; margin-left: 15px; padding: 10px"
        >
          <div clas="card-body">
            <a class="btn btn-primary" @click="$router.push(`/course/${id}/1`)">
              Перейти к курсу
            </a>
            <p>Прогресс</p>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 33%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                33%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>

<script setup>
import "../scss/courseTitle.scss";
import { useCourseStore } from "../stores/courseStore";
import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;
const courseStore = useCourseStore();
</script>

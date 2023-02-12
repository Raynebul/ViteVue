<template>
  <div class="maintitle">
    <h1>
      <strong>Онлайн тренажер с упражнениями и курсами по SQL</strong>
    </h1>
    <p></p>
    <h4>
      Освой SQL - научись создавать собственные базы данных и составлять запросы
      к ним
    </h4>
  </div>

  <div class="container-xl">
    <div
      class="card mb-3 text-center"
      style="max-width: 100%; padding: 10rem 0; border: none"
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="./img/sql-1024x572.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title"><strong>Курсы по SQL</strong></h3>
            <p class="card-text">Текст с описание курса по SQ</p>
            <RouterLink to="/course" class="btn btn-primary">Перейти к курс</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="card mb-3 text-center"
      style="max-width: 100%; padding: 10rem 0; border: none"
    >
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title"><strong>Курсы по SQL</strong></h3>
            <p class="card-text">Текст с описание онлайн-тренажёра по SQL</p>
            <RouterLink to="/sandbox" class="btn btn-primary"
              >Перейти к редактору кода</RouterLink
            >
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="./img/sql-1024x572.jpg"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.maintitle {
  text-align: center;

  padding-top: 340px;
  padding-bottom: 340px;
  background-color: rgb(24, 89, 187);
  color: white;
  margin: 0;
}
</style>

<script setup>
import { RouterLink } from "vue-router";
</script>

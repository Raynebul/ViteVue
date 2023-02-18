<template>
  <main>
    <div class="list-group shadow-lg list-example">
      <form v-for="page_ in courseStore.courses[id - 1].pages" :key="page_.id_">
        <a
          v-if="page_.id_ === route.params.page"
          class="list-group-item list-group-item-action"
          id="currentId"
          @click="$router.push(`/course/${id}/${page_.id_}`)"
          >{{ page_.id_ }}</a
        >
        <a
          v-else
          class="list-group-item list-group-item-action"
          @click="$router.push(`/course/${id}/${page_.id_}`)"
          >{{ page_.id_ }}</a
        >
      </form>
    </div>
    <div class="container-fluid">
      <div class="row g-0">
        <div class="col-6" style="height: 22rem">
          <div class="row">
            <div class="col-auto me-auto">
              <h3>
                <div class="badge bg-light text-dark">SQL Script</div>
              </h3>
            </div>
            <div class="col-auto" style="display: flex">
              <button
                class="clear btn btn-light"
                onclick="eraseTheText('outputSQLScript')"
              >
                Очистить
              </button>
              <button
                form="courseform"
                class="btn btn-success"
                id="run"
                type="submit"
              >
                Выполнить
              </button>
            </div>
          </div>
          <!-- <div class="elem2 col-auto"> -->
          <!-- </div> -->

          <div class="script">
            <form
              id="courseform"
              method="POST"
              action="/course/<%= courseid %>/<%= data.id %>"
            >
              <textarea
                spellcheck="false"
                id="outputSQLScript"
                name="codetext"
                class="form-control shadow-sm"
              >
              </textarea>
            </form>
          </div>
        </div>
        <div class="col-6" style="height: 22rem">
          <div class="elem3">
            <h3>
              {{
                courseStore.courses[id - 1].pages[$route.params.page - 1].id_
              }}.
              {{
                courseStore.courses[id - 1].pages[$route.params.page - 1].name
              }}
            </h3>
          </div>
          <div class="bg-primary taskpanel">Задание</div>
          <div class="overflow-auto" style="height: 82%">
            <p>
              {{
                courseStore.courses[id - 1].pages[$route.params.page - 1].text
              }}
            </p>
            <!-- <% var newblock = data.taskDescription %> <%- include("blocks/" +
            newblock) -%> -->
          </div>
          <!-- <div data-bs-offset="0" data-bs-spy="scroll">

               </div>    -->
        </div>
        <div class="col-6" style="height: 20rem">
          <div class="output">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Вывод
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Базы данных
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Ошибки
                </button>
              </li>
            </ul>

            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <!--  <% if(error == undefined) { %> -->
                <b>База данных Humans</b>
                <table class="table table-striped table-sm">
                  <thead>
                    <tr>
                      <!-- <% if(select.id != undefined) { %>
                      <th scope="col">id</th>
                      <% } %> <% if(select.sex != undefined) { %>
                      <th scope="col">sex</th>
                      <% } %> <% if(select.name != undefined) { %>
                      <th scope="col">name</th>
                      <% } %> <% if(select.surname != undefined) { %>
                      <th scope="col">surname</th>
                      <% } %> <% if(select.age != undefined) { %>
                      <th scope="col">age</th>
                      <% } %> -->
                    </tr>
                  </thead>
                  <tbody>
                    <!-- <% for(var i=0; i < taskdatabase.length; i++) { %>
                    <tr>
                      <% if(select.id != undefined) { %>
                      <th scope="row"><%= taskdatabase[i].id %></th>
                      <% } %> <% if(select.sex != undefined) { %>
                      <td><%= taskdatabase[i].sex %></td>
                      <% } %> <% if(select.name != undefined) { %>
                      <td><%= taskdatabase[i].name %></td>
                      <% } %> <% if(select.surname != undefined) { %>
                      <td><%= taskdatabase[i].surname %></td>
                      <% } %> <% if(select.age != undefined) { %>
                      <td><%= taskdatabase[i].age %></td>
                      <% } %>
                    </tr>
                    <% } %>-->
                  </tbody>
                </table>
                <!--  <% } %>-->
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <b>База данных Humans</b>
                <table class="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">sex</th>
                      <th scope="col">name</th>
                      <th scope="col">surname</th>
                      <th scope="col">age</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- <% for(var i=0; i < rightdatabase.length; i++) { %>
                    <tr>
                      <th scope="row"><%= rightdatabase[i].id %></th>
                      <td><%= rightdatabase[i].sex %></td>
                      <td><%= rightdatabase[i].name %></td>
                      <td><%= rightdatabase[i].surname %></td>
                      <td><%= rightdatabase[i].age %></td>
                    </tr>
                    <% } %>-->
                  </tbody>
                </table>
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <!--  <% if(error != undefined) { %>-->
                <div
                  class="alert alert-danger d-flex align-items-center"
                  role="alert"
                >
                  <svg
                    class="bi flex-shrink-0 me-2"
                    width="24"
                    height="24"
                    role="img"
                    aria-label="Danger:"
                  >
                    <use xlink:href="#exclamation-triangle-fill" />
                  </svg>
                  <div>ОШИБКА! Неправильно введен запрос</div>
                </div>
                <!--  <% } %>-->
              </div>
            </div>
          </div>
        </div>
        <div class="col-6" style="height: 20rem; display: flex">
          <div
            class="completed alert alert-success d-flex align-items-center"
            role="alert"
          >
            <svg
              class="bi flex-shrink-0 me-2"
              width="24"
              height="24"
              role="img"
              aria-label="Success:"
            >
              <use xlink:href="#check-circle-fill" />
            </svg>
            <div>Задание выполнено!</div>
          </div>
          <!--   <% if(data.id === pages) { %> -->
          <a
            v-if="
              parseInt($route.params.page) !==
              courseStore.courses[id - 1].pageCount
            "
            @click="
              $router.push(
                `/course/${$route.params.id}/${
                  parseInt($route.params.page) + 1
                }`
              )
            "
            class="continue btn btn-primary btn-lg"
            >Дальше</a
          >
          <a
            v-else
            @click="$router.push(`/course/${$route.params.id}`)"
            class="continue btn btn-primary btn-lg"
            >Дальше</a
          >
          <!-- <% } else { %>-->
          <!-- <a
            href="/course/<%= courseid %>/<%= data.id+1 %>"
            class="continue btn btn-primary btn-lg"
            >Дальше</a
          > -->
          <!--  <% } %>-->
        </div>
      </div>
    </div>
    <!-- </div> -->
  </main>
</template>

<script setup>
import "../scss/nav.scss";
import "../scss/coursePage.scss";
import { useCourseStore } from "../stores/courseStore";
import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id;
//let page = route.params.page;
//console.log(id, page, nextpage)
const courseStore = useCourseStore();
</script>

<script></script>

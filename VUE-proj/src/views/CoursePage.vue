<template>
  <main>
    <div id="list-example" class="list-group shadow-lg">
      <!--  <a class="list-group-item list-group-item-action" href="#list-item-1">Элемент 1</a>
              <a class="list-group-item list-group-item-action" href="#list-item-2">Элемент 2</a>
              <a class="list-group-item list-group-item-action" href="#list-item-3">Элемент 3</a>
              <a class="list-group-item list-group-item-action" href="#list-item-4">Элемент 4</a> -->
      <!--  <% for(var i=0; i < pages; i++) { %> <% if(data.id === i+1) { %> -->
      <!--  <a
        class="list-group-item list-group-item-action"
        id="currentId"
        href="/course/<%= courseid %>/<%= i+1 %>"
        ><%= i+1 %></a
      >
      <% } else { %>
      <a
        class="list-group-item list-group-item-action"
        href="/course/<%= courseid %>/<%= i+1 %>"
        ><%= i+1 %></a
      >
      <% } %> <% } %> -->
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
            <!-- <h3><%= data.id %>. <%= data.taskName %></h3> -->
          </div>
          <div class="bg-primary taskpanel">Задание</div>
          <div class="overflow-auto" style="height: 82%">
            <p>
              {{
                courses[$route.params.id - 1].pages[$route.params.page - 1].text
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
              courses[$route.params.id - 1].pages[$route.params.page - 1].id_ !=
              courses[$route.params.id - 1].pageCount
            "
            @click="
              $router.push(
                `/course/${courses[$route.params.id - 1].id}/${
                  courses[$route.params.id - 1].pages[$route.params.page].id_
                }`
              )
            "
            class="continue btn btn-primary btn-lg"
            >Дальше</a
          >
          <a
            v-else
            @click="$router.push(`/course/${courses[$route.params.id - 1].id}`)"
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

<style>
.panel,
.answer,
.task,
.script,
.sqlsquare1,
.output {
  background-color: #ffffff;
}

.SQL-container,
.bottompanel {
  height: 350px;
}
.script,
.output {
  border-right: 1px solid #7c898a;
}

.task,
.answer {
  border-left: 1px solid #7c898a;
  border-right: 1px solid #7c898a;
}

textarea {
  width: 100%;
  height: 350px;
  background-color: #ffffff;
  border: none;
  outline: none;
  padding: 15px;
  font-size: 17px;
}

.answer {
  height: 300px;
}

.task {
  height: 400px;
}

header,
.panel {
  background-color: #3a4350;
}

.sqlsquare1,
.sqlsquare2,
#run,
.clear {
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
}

main {
  display: flex;
  width: 100%;
}

.choicecourse {
  width: 4%;
  background-color: #869297;
  font-size: 25px;
  text-align: center;
  color: white;
}
.choicecourse span {
  display: block;
  padding-bottom: 5px;
  padding-top: 5px;
}

.workpanel {
  width: 48%;
}

.workpanel2 {
  width: 48%;
  margin-right: 15px;
}

.SQL-panel {
  display: flex;
}

.elem1 {
  width: 100%;
  display: flex;
}

.elem3 {
  width: 100%;
  height: 10%;
}

.elem3 span {
  margin-left: 10px;
}

.sqlsquare1,
.sqlsquare2 {
  width: 120px;
  height: 50px;
  font-weight: bold;
  font-size: 20px;
}
.sqlsquare2 {
  /*   background-color: #A3B1B4; */
  background-color: #edf3f4;
}

.elem2 {
  display: flex;
}

#run,
.clear {
  margin-top: 10px;
  height: 30px;

  border: none;
  cursor: pointer;
}

#run {
  margin-right: 10px;
}

.clear {
  margin-right: 15px;
}

.task,
.script {
  width: 100%;
}

.bottompanel {
  width: 100%;
}

.script {
  margin-right: 10px;
}

.task {
  margin-left: 10px;
  font-weight: bold;
}

.taskpanel {
  height: 8%;
  color: white;
  display: flex;
  align-items: center; /* align vertical */
}

.taskpanel span {
  margin-left: 10px;
}

.SQL-container {
  display: flex;
  width: 100%;
}

.panel {
  padding: 0;
  height: 40px;
  font-size: 25px;
}

.bottompanel {
  display: flex;
}

.output {
  width: 100%;
  margin-right: 10px;
}

.answer {
  width: 100%;
  margin-left: 10px;
  border-top: 1px solid #7c898a;
  display: flex;
}

.completed,
.continue {
  margin-top: auto;
  margin-bottom: 20px;
}

.completed {
  margin-left: 20px;
}

.completed span {
  margin-left: 15px;
}

.continue {
  margin-left: auto;
  margin-right: 20px;
  align-items: center; /* align vertical */
  border: none;
  cursor: pointer;
}

/* модальное окно */

.tasktext {
  /*padding: 10px;*/
  /* overflow: scroll; */
  /*font-size: 15px; */
  height: 90%;
  width: 100%;
}

#currentId {
  background-color: rgb(81, 77, 86);
}

.tasktextcourse {
  color: rgb(81, 77, 86);
  font: sans-serif;
  font-size: 1em;
}

.tablinks {
  background-color: #3a4350;
  padding: 10px;
  height: 40px;
  color: white;
  text-decoration: none;
  font: 20px Arial;
  border: none;
}

.tablinks:hover,
.tablinks.active {
  background-color: #2d2f38;
}

.panel {
  overflow: hidden;
}

.tabcontent {
  display: none;
}

#list-example,
.list-group-item {
  background-color: #292b2c;
  -webkit-border-radius: 0 !important;
  -moz-border-radius: 0 !important;
  border-radius: 0 !important;
}

.list-group-item {
  border: none;
  color: #fff;
}

.code {
  height: 20rem;
  min-height: 20rem;
  max-height: 20rem;
}
</style>

<script setup>
import "../assets/nav.css";
</script>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data: function () {
    return {};
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
  },
  computed: {
    ...mapState({
      courses: (state) => state.course.courses,
    }),

    ...mapGetters({}),
  },
};
</script>

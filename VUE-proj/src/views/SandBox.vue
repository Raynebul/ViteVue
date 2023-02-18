<template>
  <ProjectSettings></ProjectSettings>

  <div class="top">
    <div class="settings">
      <div id="Project">
        Проект: {{ projectStore.projects[$route.params.id - 1].name }}
      </div>
      <div id="Username">
        от: {{ projectStore.projects[$route.params.id - 1].author }}
      </div>
    </div>
    <div class="buttons">
      <button form="myform1" class="run1 btn btn-success" type="submit">
        Выполнить
      </button>
      <button
        form="myform2"
        class="button1 btn btn-secondary"
        type="submit"
        onclick="save()"
      >
        Сохранить
      </button>
      <button
        type="button"
        class="btn button1 btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        Настройки
      </button>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row row-cols-2 g-4">
      <div class="col">
        <div class="SQLScript">
          <div class="elem1">
            <h3>
              <div class="badge bg-light text-dark shadow-sm">SQL Script</div>
            </h3>
            <button
              class="clear1 btn btn-light shadow-sm"
              @click="eraseTheText(SQLScript)"
            >
              Очистить
            </button>
          </div>

          <div class="script">
            <textarea
              id="outputSQLScript"
              class="form-control shadow code"
              name="script"
              style="background-color: white"
              spellcheck="false"
              v-model="SQLScript"
            >
            </textarea>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="SQLQuery">
          <div class="elem2">
            <h3>
              <div class="badge bg-light text-dark shadow-sm">SQL Query</div>
            </h3>
            <button
              class="clear1 btn btn-light shadow-sm"
              onclick="eraseTheText('outputSQLquery')"
            >
              Очистить
            </button>
          </div>
          <aside class="query">
            <!--  <form id="myform2" action="/sandbox/<%= data.id %>" method="post"> -->
            <form id="myform1" @submit.prevent="RunCode">
              <!--@submit.prevent="RunCode()"-->
              <textarea
                id="outputSQLquery"
                class="form-control shadow code"
                name="query"
                style="background-color: white"
                spellcheck="false"
                v-model="projectStore.projects[$route.params.id - 1].query"
              >
              </textarea>
            </form>
          </aside>
        </div>
      </div>
    </div>
  </div>

  <hr id="secondline" />
  <div class="container-fluid">
    <div class="row row-cols-1">
      <div class="col">
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
            <b>База данных Humans</b>
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col" v-if="humanStore.humans[0].id != undefined">
                    id
                  </th>
                  <th scope="col" v-if="humanStore.humans[0].sex != undefined">
                    sex
                  </th>
                  <th scope="col" v-if="humanStore.humans[0].name != undefined">
                    name
                  </th>
                  <th
                    scope="col"
                    v-if="humanStore.humans[0].surname != undefined"
                  >
                    surname
                  </th>
                  <th scope="col" v-if="humanStore.humans[0].age != undefined">
                    age
                  </th>
                </tr>
              </thead>
              <tbody v-for="human in humanStore.humans_res" :key="human.id">
                <tr>
                  <th scope="row" v-if="humanStore.humans[0].id != undefined">
                    {{ human.id }}
                  </th>
                  <td v-if="humanStore.humans[0].sex != undefined">
                    {{ human.sex }}
                  </td>
                  <td v-if="humanStore.humans[0].name != undefined">
                    {{ human.name }}
                  </td>
                  <td v-if="humanStore.humans[0].surname != undefined">
                    {{ human.surname }}
                  </td>
                  <td v-if="humanStore.humans[0].age != undefined">
                    {{ human.age }}
                  </td>
                </tr>
              </tbody>
            </table>
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
              <tbody v-for="human in humanStore.humans" :key="human.id">
                <tr>
                  <th scope="row">{{ human.id }}</th>
                  <td>{{ human.sex }}</td>
                  <td>{{ human.name }}</td>
                  <td>{{ human.surname }}</td>
                  <td>{{ human.age }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div
              class="alert alert-danger d-flex align-items-center"
              role="alert"
              v-if="humanStore.error != undefined"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.top {
  margin: 0;
  padding: 0;
  height: 70px;
  display: flex;
}

.buttons {
  margin-left: auto;
  display: flex;
  padding: 10px;
}

.run1,
.button1 {
  margin-bottom: auto;
  margin-right: 10px;
  margin-left: 10px;
}

.clear1 {
  margin-bottom: auto;
  margin-top: auto;
  margin-left: auto;
  margin-right: 10px;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #525861;
  padding: 0;
  margin-bottom: auto;
}

.elem1,
.elem2 {
  display: flex;
}

.sqlsquare1,
.sqlsquare2 {
  text-align: center;
}

.query,
.script {
  margin-top: auto;
  height: 320px;
}

textarea {
  width: 100%;
  height: 320px;
  background-color: #edf3f4;
  border: none;
  outline: none;
  padding: 15px;
  font-size: 17px;
}

.panel {
  margin: 0;
  padding: 0;
  background-color: #3a4350;
  height: 40px;
  font-size: 25px;
}

.output {
  height: 300px;
  width: 100%;
}

#secondline {
  margin-top: auto;
}

/* модальное окно */

.code {
  height: 20rem;
  min-height: 20rem;
  max-height: 20rem;
}
</style>

<script setup>
import ProjectSettings from "../components/ProjectSettings.vue";

import { useHumanStore } from "../stores/humanStore";
import { ref } from "vue";
import "../scss/sandbox.scss";
import { useProjectStore } from "../stores/projectStore";

const projectStore = useProjectStore();

const humanStore = useHumanStore();

const sql = ref({
  query: "",
  script: "",
});
const RunCode = () => {
  humanStore.runCode(sql.value.query);
};
</script>

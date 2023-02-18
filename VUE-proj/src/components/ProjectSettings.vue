<template>
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModalLabel1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="settingsnameproject">
            <h5 class="modal-title" id="exampleModalLabel">
              Проект: {{ projectStore.projects[$route.params.id - 1].name }}
            </h5>
            <h4 class="modal-title">
              от: {{ projectStore.projects[$route.params.id - 1].author }}
            </h4>
          </div>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form id="myform" action="/sandbox/<%= data.id %>" method="post">
            <textarea
              id="description"
              type="text"
              placeholder="Введите текст"
              name="projectDescription"
              v-model="projectStore.projects[$route.params.id - 1].description"
            ></textarea>
            <div
              v-if="projectStore.projects[$route.params.id - 1].autosave"
              class="form-check form-switch"
            >
              <input
                name="autosave"
                class="form-check-input"
                type="checkbox"
                checked
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Автосохранения</label
              >
            </div>
            <div v-else class="form-check form-switch">
              <input
                name="autosave"
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Автосохранения</label
              >
            </div>

            <div
              v-if="projectStore.projects[$route.params.id - 1].private"
              class="form-check form-switch"
            >
              <input
                name="private"
                class="form-check-input"
                type="checkbox"
                checked
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Приватный</label
              >
            </div>
            <div v-else class="form-check form-switch">
              <input
                name="private"
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Приватный</label
              >
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button form="myform" type="submit" class="btn btn-primary">
            Сохранить
          </button>
          <form method="POST" action="/sandbox/<%= data.id %>/delete">
            <button type="submit" class="btn btn-danger">Удалить</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script setup>
import { useProjectStore } from "../stores/projectStore";

const projectStore = useProjectStore();
</script>

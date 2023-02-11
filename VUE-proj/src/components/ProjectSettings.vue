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
            <h5 class="modal-title" id="exampleModalLabel">Проект:</h5>
            <h4 class="modal-title">от:</h4>
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
            ></textarea>
<!--<%= data.projectDescription %></textarea
            >
            -->
            <div class="form-check form-switch">
              <!--  <% if(data.autosave=="true") { %>-->
              <input
                name="autosave"
                class="form-check-input"
                type="checkbox"
                checked
                id="flexSwitchCheckDefault"
              />
              <!-- <% } else { %>
              <input
                name="autosave"
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />-->
              <!-- <% } %>-->
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Автосохранения</label
              >
            </div>

            <div class="form-check form-switch">
              <!--   <% if(data.private=="true") { %>-->
              <input
                name="private"
                class="form-check-input"
                type="checkbox"
                checked
                id="flexSwitchCheckDefault"
              />
              <!--   <% } else { %>
              <input
                name="private"
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />-->
              <!--<% } %> -->
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

<style>

</style>

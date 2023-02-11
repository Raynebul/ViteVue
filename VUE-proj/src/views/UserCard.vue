<template>
  <h1>Страница пользователя: {{ users[currentId-1].username }}</h1>

  <div class="card shadow" style="width: 54rem; margin: 1rem">
    <div class="card-body">
      <div class="card mb-3" style="max-width: 540px; border: none">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="/img/free-settings-icon-3110-thumb.png"
              class="img-fluid rounded-start"
              alt="..."
              width="100"
              height="100"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ users[currentId-1].username }}</h5>
              <p class="card-text">{{ users[currentId-1].email }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-text">Созданные проекты:</div>
      <div class="card-text" id="createdprojects">
        <table>
          <!-- <% for(var i=0; i < data.length; i++) { %> -->
          <tr>
            <td>
              <a href="/sandbox/<%= data[i].id %>"></a>
            </td>
            <td></td>
          </tr>
          <!--   <% } %> -->
        </table>
      </div>
      <form class="form" action="/" method="post">
        <button class="btn btn-primary">Выйти из аккаунта</button>
      </form>
    </div>
  </div>
</template>

<style></style>

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
      users: (state) => state.user.users,
      currentId: (state) => state.user.currentId,
    }),

    ...mapGetters({}),
  },
};
</script>

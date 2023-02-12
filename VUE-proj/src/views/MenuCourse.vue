<template>
  <main>
    <div id="courselist">
      <h2>Все курсы</h2>
      <div
        v-for="course in courses"
        :key="course.id"
        class="row row-cols-1 row-cols-md-3 g-4"
      >
        <a @click="$router.push(`/course/${course.id}`)" class="courselink">
          <div class="col">
            <div class="card h-100 shadow">
              <img src="./img/sql-1024x572.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ course.name }}</h5>
                <p class="card-text">{{ course.description }}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </main>
</template>

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

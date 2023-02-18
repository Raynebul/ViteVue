<template>
  <main>
    <div id="courselist">
      <h2>Все курсы</h2>
      <coursePost
        v-for="course in courseStore.courses"
        :key="course.id"
        :course="course"
        class="row row-cols-1 row-cols-md-3 g-4"
        @click="$router.push(`/course/${course.id}`)"
      />
    </div>
  </main>
</template>

<script setup>
import { useCourseStore } from "../stores/courseStore";
import coursePost from "../components/CoursePost.vue";

const courseStore = useCourseStore();
</script>

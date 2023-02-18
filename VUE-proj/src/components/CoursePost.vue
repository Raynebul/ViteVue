<template>
  <a @click="$router.push(`/course/`)" class="courselink">
    <div class="col">
      <div class="card h-100 shadow">
        <img src="../assets/sql-1024x572.jpg" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ course.name }}</h5>
          <p class="card-text">{{ course.description }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
const props = defineProps({
  course: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>
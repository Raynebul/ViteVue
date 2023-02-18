<template>
  <!-- <table>
    <tr>
      <td>
        <a href="/sandbox/"> {{ project.name }}</a>
      </td>
      <td>{{ project.description }}</td>
    </tr>
  </table>
  -->
  <div>{{ project.name }}</div>
  <div>{{ project.description }}</div>
  <button
    class="btn btn-danger"
    @click="projectStore.deleteProject(project.id)"
  >
    Удалить
  </button>
</template>

<script setup>
import { useProjectStore } from "../stores/projectStore";

const projectStore = useProjectStore();
const props = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => {},
  },
});
</script>

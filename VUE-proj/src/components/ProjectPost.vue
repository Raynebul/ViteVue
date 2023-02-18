<template>
  <a class="projectlink">
    <div class="card mb-3 shadow-sm" style="max-width: 18rem">
      <a @click="$router.push(`/sandbox/${project.id}`)">
        <div class="card-header bg-primary text-white">{{ project.name }}</div>
        <div class="card-body">
          <p class="card-text">{{ project.description }}</p>
        </div>
      </a>
      <div class="card-footer">
        <button
          class="btn btn-danger"
          @click="projectStore.deleteProject(project.id)"
        >
          Удалить
        </button>
      </div>
    </div>
    <!-- <div class="projectblock">        
             <div class="projectbox">
             <p class="projectname"><%= data[i].projectname %></p>
             <p class="projectdate">12.01.2023</p>      
            </div>  
            </div> -->
  </a>
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

<style></style>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Ranker from './components/rankerView.vue'
</script>

<template>
    <div class="wrapper">
      <Ranker/>
    </div>

  <RouterView />
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
</style>

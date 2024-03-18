<template>
  <RouterView />
</template>


<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>


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

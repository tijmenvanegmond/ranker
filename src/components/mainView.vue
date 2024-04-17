<template>
  <div class="wrapper">
    <div class="row">
      <Ranker />
      <Ranker />
      <Ranker />
      <Ranker />
      <Box3D :name="'TEST'"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Ranker from './rankerView.vue'
import Box3D from './box3D.vue'
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
</style>

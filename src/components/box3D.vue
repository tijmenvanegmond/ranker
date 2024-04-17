<template>
    <TresCanvas shadows>
        <TresDirectionalLight />
        <TresOrbitControls />
        <TresPlane />
        <TresBox position="0 0 0" />
        <TresBox position="1 0 0" />
        <TresBox position="0 1 0" />
        <TresBox position="0 0 1" />
        <TresBox position="1 1 0" />
        <TresBox position="0 1 1" />
        <TresBox position="1 0 1" />
        <TresBox position="1 1 1" />
    </TresCanvas>
</template>

<script lang="ts" setup>
import { computed, defineProps, onMounted } from 'vue'

const props = defineProps({
    name: String!,
    color: String, 
})


onMounted(() => {
})

</script>

<style scoped>
#canvas {
  height: 10%;
  width: 10%;
  border: 2px solid red;
}
</style>

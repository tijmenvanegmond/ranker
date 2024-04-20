<template>
    <draggable class="draggable" v-model="tiers" group="testo" @start="onStartDrag()" @end="onEndDrag()" item-key="id">
        <template #item="{ element }">
            <Box3D :key="element.name" :name="element.name" :color="element.color" />
        </template>
    </draggable>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Draggable from 'vuedraggable';
import Box3D from './box3D.vue';

const drag = ref(false);

function onStartDrag() {
    drag.value = true;
};

function onEndDrag() {
    drag.value = true;
};


const tiers = ref([
    { name: 'Red', color: "#ff0000" },
    { name: 'Blue', color: "#0000ff" },
    { name: 'Yellow', color: "#ffff00" },
    { name: 'Green', color: "#00ff00" },
    { name: 'Purple', color: "#800080" },
    { name: 'Orange', color: "#ffa500" },
    { name: 'Pink', color: "#ffc0cb" },
    { name: 'Brown', color: "#a52a2a" }
])

</script>

<style scoped>
.draggable {
    border: 1px solid red;
    display: flex;
    flex-direction: row;

}
</style>
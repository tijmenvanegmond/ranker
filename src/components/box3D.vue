<template>
    <div class="box">
        <h2>{{ props.name }}</h2>
        <canvas id="render"></canvas>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { computed, defineProps, onMounted } from 'vue'
import * as THREE from 'three';

const props = defineProps({
    name: String!,
    color: String,
})


onMounted(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
})

</script>

<style scoped>

canvas {
    height: 100px;
    width: 100px;
    border: 2px solid red !important;
}

</style>

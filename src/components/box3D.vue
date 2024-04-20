<template>
    <div class="box">
        <h2 :style="{ color: props.color}" >{{ props.name }} </h2>
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
    const canvas = document.getElementById('render') as HTMLCanvasElement;
    const renderer = new THREE.WebGLRenderer({ canvas });
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const scene = new THREE.Scene();
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: props.color});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function render(time: number) {
        time *= 0.001;

        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
})

</script>

<style scoped>
canvas {
    height: 100px;
    width: 100px;
    border: 2px solid red !important;
}
</style>

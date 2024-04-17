<template>
    <div class="tier" :style=colorStyle()>
        <h2>{{ props.name }}</h2>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, onMounted } from 'vue'

const props = defineProps({
    name: String!,
    color: String,
})

const colorStyle = () => {
    return {
        color: props.color
    }
}

onMounted(() => {
})

</script>

<style scoped>
.tier {
    display: flex;
    width: 100%;
    height: 3em;
    border: 1px solid red;

}
</style>

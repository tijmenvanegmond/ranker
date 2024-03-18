<template>

    <draggable v-model="tiers" group="testo" @start="drag = true" @end="drag = false" item-key="id">
        <template #item="{ element }">
            <div>{{ element.name }}</div>
        </template>
    </draggable>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import TierRow from './tierRow.vue';
import Draggable from 'vuedraggable';

let drag: boolean = false;

const tiers = ref([
    { name: 'Bronze', sortValue: 100, color: "#f1c500", items: [{ id: 1, name: 'Bronze 1' }, { id: 2, name: 'Bronze 2' }, { id: 3, name: 'Bronze 3' }, { id: 4, name: 'Bronze 4' }, { id: 5, name: 'Bronze 5' }] },
    { name: 'Silver', sortValue: 200, color: "#d1d1d1", items: [{ id: 1, name: 'Silver 1' }, { id: 2, name: 'Silver 2' }, { id: 3, name: 'Silver 3' }, { id: 4, name: 'Silver 4' }, { id: 5, name: 'Silver 5' }] },
    { name: 'Gold', sortValue: 300, color: "#f1c500", items: [{ id: 1, name: 'Gold 1' }, { id: 2, name: 'Gold 2' }, { id: 3, name: 'Gold 3' }, { id: 4, name: 'Gold 4' }, { id: 5, name: 'Gold 5' }] },
    { name: 'Platinum', sortValue: 400, color: "#d1d1d1", items: [{ id: 1, name: 'Platinum 1' }, { id: 2, name: 'Platinum 2' }, { id: 3, name: 'Platinum 3' }, { id: 4, name: 'Platinum 4' }, { id: 5, name: 'Platinum 5' }] },
    { name: 'Diamond', sortValue: 500, color: "#f1c500", items: [{ id: 1, name: 'Diamond 1' }, { id: 2, name: 'Diamond 2' }, { id: 3, name: 'Diamond 3' }, { id: 4, name: 'Diamond 4' }, { id: 5, name: 'Diamond 5' }] },
    { name: 'Master', sortValue: 600, color: "#d1d1d1", items: [{ id: 1, name: 'Master 1' }, { id: 2, name: 'Master 2' }, { id: 3, name: 'Master 3' }, { id: 4, name: 'Master 4' }, { id: 5, name: 'Master 5' }] },
    { name: 'Grandmaster', sortValue: 700, color: "#f1c500", items: [{ id: 1, name: 'Grandmaster 1' }, { id: 2, name: 'Grandmaster 2' }, { id: 3, name: 'Grandmaster 3' }, { id: 4, name: 'Grandmaster 4' }, { id: 5, name: 'Grandmaster 5' }] },
    { name: 'Challenger', sortValue: 800, color: "#d1d1d1", items: [{ id: 1, name: 'Challenger 1' }, { id: 2, name: 'Challenger 2' }, { id: 3, name: 'Challenger 3' }, { id: 4, name: 'Challenger 4' }, { id: 5, name: 'Challenger 5' }] }
])
</script>

<style scoped></style>
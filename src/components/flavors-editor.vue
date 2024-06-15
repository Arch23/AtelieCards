<script setup>
import { ref } from 'vue';
defineProps(['index', 'flavors']);
const emit = defineEmits(['addFlavor', 'removeFlavor']);

const newFlavor = ref('');

const handleNewFlavor = () => {
    emit('addFlavor', newFlavor.value);
    newFlavor.value = '';
};

const handleRemoveFlavor = (index) => {
    emit('removeFlavor', index);
};
</script>

<template>
    <p>Sabores:</p>
    <div>
        <label :for="`add-flavor-${index}`">Adicionar:</label>
        <input :id="`add-flavor-${index}`" :name="`add-flavor-${index}`" v-model="newFlavor" />
        <button @click="handleNewFlavor">+</button>
    </div>
    <div class="flavors-container">
        <div class="flavor-pill" v-for="(flavor, indexF) in flavors" :key="indexF">
            <p>{{ flavor }}</p>
            <span @click="handleRemoveFlavor(indexF)" class="close">&times;</span>
        </div>
    </div>
</template>

<style>
p {
    margin: 0;
}
.flavors-container {
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 5px 10px;
}
.flavor-pill {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    border-radius: 20px;
    padding: 5px 10px;
    height: 20px;
    align-items: center;
}

.flavor-pill p {
    margin: 0;
}

.close {
    margin-left: 5px;
}
</style>

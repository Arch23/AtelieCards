<script setup>
import { ref } from 'vue';
import store from '../store';
import flavorsEditor from './flavors-editor.vue';

const newName = ref('');
const newDescription = ref('');
const newFlavors = ref([]);

const handleNewFlavor = (newFlavorName) => {
    newFlavors.value.push(newFlavorName);
};

const handleRemoveFlavor = (flavorIndex) => {
    newFlavors.value.splice(flavorIndex, 1);
};

const createProduct = () => {
    const newProduct = {
        name: newName.value,
        description: newDescription.value,
        flavors: newFlavors.value
    };

    resetFields();

    store.commit('add', newProduct);
};

const resetFields = () => {
    newName.value = '';
    newDescription.value = '';
    newFlavors.value = [];
};
</script>

<template>
    <h3>Novo produto:</h3>
    <label :for="`name-new`">Nome:</label>
    <input type="text" :id="`name-new`" :name="`name-new`" v-model="newName" />
    <label :for="`desc-new`">Descrição:</label>
    <input type="text" :id="`desc-new`" :name="`desc-new`" v-model="newDescription" />
    <flavorsEditor
        :flavors="newFlavors"
        :index="`new`"
        @addFlavor="handleNewFlavor"
        @removeFlavor="handleRemoveFlavor"
    />
    <button @click="createProduct">Criar</button>
</template>

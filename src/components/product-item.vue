<script setup>
import { computed } from 'vue';
import store from '../store';
import flavorsEditor from './flavors-editor.vue';
const props = defineProps(['index', 'product']);

const computedName = computed({
    get() {
        return props.product.name;
    },
    set(newValue) {
        store.commit('updateName', { index: props.index, newValue });
    }
});

const computedDescription = computed({
    get() {
        return props.product.description;
    },
    set(newValue) {
        store.commit('updateDescription', { index: props.index, newValue });
    }
});

const handleNewFlavor = (newFlavorName) => {
    store.commit('addFlavor', { productIndex: props.index, newFlavorName });
};

const handleRemoveFlavor = (flavorIndex) => {
    store.commit('removeFlavor', { productIndex: props.index, flavorIndex });
};

const handleDelete = () => {
    store.commit('remove', { index: props.index });
};
</script>

<template>
    <span @click="handleDelete">&times;</span>
    <label :for="`name-${index}`">Nome:</label>
    <input type="text" :id="`name-${index}`" :name="`name-${index}`" v-model="computedName" />
    <label :for="`desc-${index}`">Descrição:</label>
    <input
        type="text"
        :id="`desc-${index}`"
        :name="`desc-${index}`"
        v-model="computedDescription"
    />
    <flavorsEditor
        :flavors="product.flavors"
        :index="index"
        @addFlavor="handleNewFlavor"
        @removeFlavor="handleRemoveFlavor"
    />
</template>

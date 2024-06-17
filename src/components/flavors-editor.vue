<script setup>
import { ref } from 'vue';
defineProps(['flavors']);
const emit = defineEmits(['addFlavor', 'removeFlavor']);

const newFlavor = ref('');

const handleNewFlavor = () => {
    if (newFlavor.value === '') {
        return;
    }
    emit('addFlavor', newFlavor.value);
    newFlavor.value = '';
};

const handleRemoveFlavor = (index) => {
    emit('removeFlavor', index);
};
</script>

<template>
    <div class="botton-border-detail">
        <p class="flavors-text">Sabores:</p>
    </div>
    <div style="width: 100%">
        <div class="new-flavor-container">
            <div class="material-textfield">
                <input
                    v-on:keyup.enter="handleNewFlavor"
                    class="material-input"
                    placeholder=" "
                    v-model="newFlavor"
                />
                <label>Novo sabor</label>
            </div>
            <button @click="handleNewFlavor">+</button>
        </div>
    </div>
    <div class="flavors-container">
        <div class="flavor-pill" v-for="(flavor, index) in flavors" :key="index">
            <p>{{ flavor }}</p>
            <span @click="handleRemoveFlavor(index)" class="close">&times;</span>
        </div>
    </div>
</template>

<style scoped>
.new-flavor-container {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.new-flavor-container .material-textfield {
    width: calc(100% - 50px);
}

.new-flavor-container button {
    width: 50px;
    margin-bottom: 20px;
    border: 0;
    background-color: var(--main);
    color: var(--base);
    font-size: 2em;
    text-align: center;
    border-radius: 5px;
}

.flavors-text {
    font-size: 1.25em;
    font-weight: 250;
}

.flavors-container {
    border: 1px solid var(--main);
    border-radius: 5px;
    padding: 1rem 0.7rem;
    background-color: var(--base);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 5px 10px;
    width: 100%;
    min-height: 64px;
    box-sizing: border-box;
}
.flavor-pill {
    display: flex;
    flex-direction: row;
    border: 1px solid var(--main);
    border-radius: 20px;
    padding: 5px 10px;
    height: 32px;
    align-items: center;
    color: var(--textColor);
}

.flavor-pill p {
    margin: 0;
}

.close {
    margin-left: 5px;
    color: var(--main);
    font-size: 2em;
}

.botton-border-detail {
    flex-grow: 0;
}

.botton-border-detail p {
    border-bottom: 3px solid var(--primary);
    display: inline-block;
    padding: 0 10px;
}
</style>

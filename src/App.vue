<script setup>
import { computed } from 'vue';
import productItem from './components/product-item.vue';
import newProduct from './components/new-product.vue';
import store from './store';

const brandName = 'Atelie Doceline';
const appName = 'Gerador de cartões de Produtos';
store.commit('recoverFromLocalStorage');

const products = computed(() => store.state.products.all);

const logProducts = () => {
    console.log(products);
};
</script>

<template>
    <h1 class="brand-name">{{ brandName }}</h1>
    <h2 class="app-name">{{ appName }}</h2>
    <p>List de produtos</p>
    <div v-for="(product, index) in products" :key="index" :id="`product-${index}`">
        <productItem :index="index" :product="product" />
    </div>
    <newProduct />
    <button @click="logProducts">log</button>
</template>

<style>
#app {
    font-family: 'montserrat';
}

.app-name {
    font-weight: 250;
}

.brand-name {
    font-weight: 250;
}
</style>

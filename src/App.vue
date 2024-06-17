<script setup>
import { computed } from 'vue';
import headerFixed from './components/header-fixed.vue';
import productList from './components/product-list.vue';
import store from './store';

const brandName = 'Ateliê Doceline';
const products = computed(() => store.state.products.all);

const saveProducts = () => {
    window.localStorage.setItem('productsToPrint', JSON.stringify(products.value));
};

const exportProducts = () => {
    const a = document.createElement('a');
    const file = new Blob([JSON.stringify(products.value)], { type: 'text/pain' });
    a.href = URL.createObjectURL(file);
    a.download = 'export.json';
    a.click();
};

const print = () => {
    saveProducts();
    const url = './print/index.html';
    window.open(url, '_blank');
};

const handleImportFile = () => {
    document.getElementById('import-file').click();
};

const importFileChange = (event) => {
    const reader = new FileReader();

    reader.onload = (eventInner) => {
        const jsonObj = JSON.parse(eventInner.target.result);
        store.commit('setProductList', jsonObj);
    };

    reader.readAsText(event.target.files[0]);
};
</script>

<template>
    <headerFixed
        :brandName="brandName"
        @saveProducts="saveProducts"
        @print="print"
        @exportProducts="exportProducts"
        @importProducts="handleImportFile"
    />
    <productList />

    <input id="import-file" type="file" @change="importFileChange" />
</template>

<style>
:root {
    --main: #91ddcf;
    --base: #f7f9f2;
    --primary: #e8c5e5;
    --secondary: #f19ed2;
    --textColor: #36454f;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'montserrat';
    color: var(--textColor);
    background-color: var(--base);
}

.btn {
    font-size: 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.btn span {
    margin-right: 3px;
}

.app-name {
    font-weight: 250;
}

.brand-name {
    font-weight: 250;
    font-size: 32px;
    margin: 0;
}

.material-textfield {
    position: relative;
    margin-bottom: 20px;
}

.material-textfield label {
    position: absolute;
    font-size: 1rem;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--base);
    color: var(--textColor);
    padding: 0 0.3rem;
    margin: 0 0.5rem;
    transition: 0.1s ease-out;
    transform-origin: left top;
    pointer-events: none;
}

.material-textfield .material-input {
    font-size: 1rem;
    outline: none;
    border: 1px solid var(--main);
    border-radius: 5px;
    padding: 1rem 0.7rem;
    color: var(--textColor);
    transition: 0.1s ease-out;
    background-color: var(--base);
    width: 100%;
    font-family: 'montserrat';
    box-sizing: border-box;
}
.material-textfield .material-input:focus {
    border-color: var(--secondary);
}
.material-textfield .material-input:focus + label {
    color: var(--textColor);
    top: 0;
    transform: translateY(-50%) scale(0.9);
}
.material-textfield .material-input:not(:placeholder-shown) + label {
    top: 0;
    transform: translateY(-50%) scale(0.9);
}

.no-resize {
    resize: none;
}

#import-file {
    display: none;
}
</style>

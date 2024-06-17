<script setup>
import { computed, ref } from 'vue';
import flavorsEditor from './flavors-editor.vue';
defineProps(['appName']);
import store from '../store';

store.commit('setProductList', JSON.parse(window.localStorage.getItem('productsToPrint')));

const products = computed(() => store.state.products.all);

const currentSelectedProductIndex = ref(null);
if (products.value.length > 0) {
    currentSelectedProductIndex.value = 0;
}

const computedName = computed({
    get() {
        return products.value[currentSelectedProductIndex.value].name;
    },
    set(newValue) {
        store.commit('updateName', { index: currentSelectedProductIndex.value, newValue });
    }
});

const computedDescription = computed({
    get() {
        return products.value[currentSelectedProductIndex.value].description;
    },
    set(newValue) {
        store.commit('updateDescription', { index: currentSelectedProductIndex.value, newValue });
    }
});

const computedFlavors = computed({
    get() {
        return products.value[currentSelectedProductIndex.value].flavors;
    }
});

const handleNewFlavor = (newFlavorName) => {
    store.commit('addFlavor', { productIndex: currentSelectedProductIndex.value, newFlavorName });
};

const handleRemoveFlavor = (flavorIndex) => {
    store.commit('removeFlavor', { productIndex: currentSelectedProductIndex.value, flavorIndex });
};

const deleteProduct = () => {
    const indexToRemove = currentSelectedProductIndex.value;
    currentSelectedProductIndex.value = null;
    store.commit('remove', { index: indexToRemove });
};

const selectProduct = (index) => {
    currentSelectedProductIndex.value = index;
};

const newProduct = () => {
    store.commit('add', {
        name: '',
        description: '',
        flavors: []
    });
    currentSelectedProductIndex.value = products.value.length - 1;
};
</script>

<template>
    <div class="product-body">
        <div class="botton-border-detail">
            <p class="product-text">Lista de produtos</p>
        </div>
        <div class="product-container">
            <div class="product-list">
                <div class="new-product" @click="newProduct">
                    <p>Novo produto</p>
                </div>
                <div v-for="(product, index) in products" :key="index">
                    <div class="divider-hr"></div>
                    <div
                        class="product-list-name"
                        :class="{ selected: index === currentSelectedProductIndex }"
                        @click="selectProduct(index)"
                    >
                        <p v-if="product.name != ''">{{ product.name }}</p>
                        <p v-else>*Sem nome*</p>
                    </div>
                </div>
            </div>
            <div class="product-divider"></div>
            <div class="product-content" v-if="currentSelectedProductIndex != null">
                <div class="botton-border-detail">
                    <p class="details-text">Detalhes</p>
                </div>
                <div class="material-textfield">
                    <input class="material-input" placeholder=" " v-model="computedName" />
                    <label>Nome</label>
                </div>
                <div class="material-textfield">
                    <textarea
                        class="material-input no-resize"
                        placeholder=" "
                        rows="5"
                        v-model="computedDescription"
                    ></textarea>
                    <label>Descrição</label>
                </div>
                <flavorsEditor
                    :flavors="computedFlavors"
                    @addFlavor="handleNewFlavor"
                    @removeFlavor="handleRemoveFlavor"
                />
                <div class="product-actions">
                    <button @click="deleteProduct">Excluir</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.new-product {
    cursor: pointer;
    border: 2px solid var(--primary);
    background-color: var(--primary);
    border-radius: 10px;
    margin: 5px;
}

.new-product p {
    text-align: center;
    color: var(--base);
    font-weight: 500;
}

.product-actions {
    margin-top: 15px;
    display: flex;
    flex-direction: row-reverse;
}

.product-actions button {
    border: 2px solid var(--main);
    border-radius: 10px;
    margin: 5px;
    font-size: 1.25em;
    background-color: var(--main);
    color: var(--base);
    padding: 3px 15px;
    cursor: pointer;
}

.product-body {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 70px);
    width: 100%;
}

.product-list-name {
    cursor: pointer;
    border: 2px solid var(--main);
    border-radius: 10px;
    margin: 5px;
}

.product-list-name p {
    text-align: center;
}

.product-header {
    flex-grow: 0;
}

.divider-hr {
    border-bottom: 2px solid var(--primary);
    height: 90%;
    align-self: center;
    flex-grow: 0;
}

.selected {
    background-color: var(--main);
    color: var(--base);
    font-weight: 500;
}

.product-text {
    font-size: 1.75em;
    font-weight: 250;
    margin-left: 15px;
    margin-bottom: 15px;
}

.details-text {
    font-size: 1.5em;
    font-weight: 250;
}

.botton-border-detail {
    flex-grow: 0;
}

.botton-border-detail p {
    border-bottom: 3px solid var(--primary);
    display: inline-block;
    padding: 0 10px;
}

.product-container {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
}

.product-divider {
    border-left: 2px solid var(--primary);
    height: 100%;
    align-self: center;
}

.product-list {
    flex-grow: 0;
    width: 30vw;
    padding: 0 10px;
    box-sizing: border-box;
}

.product-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin: 0 50px;
}
</style>

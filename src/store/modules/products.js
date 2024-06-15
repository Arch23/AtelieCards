const state = () => ({
    all: []
});

const getters = {
    getProductCount: (state) => state.all.length,
    getProductList: (state) => state.all
};

const mutations = {
    //products
    add(state, { name, description, flavors }) {
        state.all.push({
            name,
            description,
            flavors
        });
    },
    remove(state, { index }) {
        if (index == -1) {
            return;
        }
        state.all.splice(index, 1);
        console.log(state.all);
    },
    updateName(state, { index, newValue }) {
        if (index == -1) {
            return;
        }
        const productToEdit = state.all.at(index);
        productToEdit.name = newValue;
    },
    updateDescription(state, { index, newValue }) {
        if (index == -1) {
            return;
        }
        const productToEdit = state.all.at(index);
        productToEdit.description = newValue;
    },
    //flavors
    addFlavor(state, { productIndex, newFlavorName }) {
        const productToEdit = state.all.at(productIndex);
        productToEdit.flavors.push(newFlavorName);
    },
    removeFlavor(state, { productIndex, flavorIndex }) {
        if (productIndex == -1 || flavorIndex == -1) {
            return;
        }
        const productToEdit = state.all.at(productIndex);
        productToEdit.flavors.splice(flavorIndex, 1);
    },

    recoverFromLocalStorage(state) {
        state.all = JSON.parse(window.localStorage.getItem('productsToPrint'));
    }
};

export default {
    state,
    getters,
    mutations
};

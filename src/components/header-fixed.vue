<script setup>
defineProps(['brandName']);
const emit = defineEmits(['saveProducts', 'print', 'exportProducts', 'importProducts']);
const handleSaveProducts = () => emit('saveProducts');
const handlePrint = () => emit('print');
const handleExport = () => emit('exportProducts');
const handleImport = () => emit('importProducts');
</script>
<template>
    <header>
        <div class="logo-header">
            <span class="logo-icon"></span>
            <h1 class="brand-name">{{ brandName }}</h1>
        </div>
        <div class="header-actions">
            <div @click="handleSaveProducts" class="btn">
                <span class="material-symbols-outlined"> save </span>
                Salvar
            </div>
            <div class="divider"></div>
            <div @click="handlePrint" class="btn">
                <span class="material-symbols-outlined"> print </span>Print
            </div>
            <div class="divider"></div>
            <div @click="handleExport" class="btn">
                <span class="material-symbols-outlined"> ios_share </span>
                Exportar
            </div>
            <div class="divider"></div>
            <div @click="handleImport" class="btn">
                <span class="material-symbols-outlined"> exit_to_app </span>
                Importar
            </div>
        </div>
    </header>
</template>

<style>
header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #91ddcf;
    padding: 2px 5px;
    box-sizing: border-box;
    height: 50px;
    box-shadow:
        rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    color: var(--base);
}

.logo-icon {
    background: url('../img/logo-white.svg') no-repeat;
    display: block;
    width: 32px;
    height: 32px;
}

.divider {
    border-left: 1px solid var(--base);
    height: 80%;
}

.logo-header {
    display: flex;
    gap: 5px;
    align-items: center;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>

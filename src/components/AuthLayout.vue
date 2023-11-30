<template>
    <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue';
import store from '../store';

onMounted(() => {
    if  (!store.state.initialized) {
        store.dispatch('initializeAuthState')
    }
    if (!store.state.user.name) {
        store.dispatch('getCurrentUser')
    }
});
</script>

<style scoped></style>

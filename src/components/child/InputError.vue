<template>
    <div v-for="(message, index) in messages" :key="index"
        class="flex items-center justify-between bg-red-100 p-2 rounded-md">
        <p class="text-sm  text-red-600">
            {{ message }}
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 text-red-600" @click="store.dispatch('resetErrorsForEntity', entity)">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </div>
</template>

<script setup>
import store from '../../store';

defineProps({
    messages: Array,
    entity: String
})
</script>

<style></style>
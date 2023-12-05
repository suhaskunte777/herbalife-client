<template>
    <div>
        <div v-for="(message, index) in messages" :key="index" class="bg-red-100 p-2 rounded-md">
            <div class="flex items-center justify-between">
                <p class="text-sm  text-red-600">
                    {{ message }}
                </p>
                <XCircleIcon class="w-6 h-6 text-red-600" @click="store.dispatch('resetErrorsForEntity', entity)">
                </XCircleIcon>
            </div>
            <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUpdated, ref, toRefs, watch } from 'vue';
import store from '../../store';
import { XCircleIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    messages: Array,
    entity: String
})

const progress = ref(100);
const duration = ref(3000);
const progressBarStarted = ref(false)

const startProgressBar = () => {
    if (!progressBarStarted.value) {
        const interval = 50; // Update interval in milliseconds
        const frames = duration.value / interval;
        const decrementValue = 100 / frames;

        const progressInterval = setInterval(() => {
            progress.value -= decrementValue;

            if (progress.value <= 0) {
                clearInterval(progressInterval);
                store.dispatch('resetErrorsForEntity', entity.value)
                progressBarStarted.value = false;
            }
        }, interval);

        progressBarStarted.value = true;
    }
}

const { entity, messages } = toRefs(props);

onMounted(startProgressBar);


</script>

<style scoped>
.progress-bar {
    height: 2px;
    background-color: #3498db;
    width: 100%;
    transition: width 0.2s ease-out;
    /* Add a transition for a smoother effect */
}
</style>

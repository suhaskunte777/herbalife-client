<template>
    <AuthHeader title="Clients">
        <!-- create a table of clients with search function -->
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <progress v-if="form.progress" :value="form.percentage"
                        class="w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400"
                        max="100" :data-label="form.percentage + '%'">
                        {{ form.percentage }} %
                    </progress>
                    <form class="p-5 mt-5" @submit.prevent="newClientMeasurement">

                        <h2 class="text-base font-semibold leading-7 text-gray-900">
                            Measurement Information
                        </h2>
                        <!-- First Row -->
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                            <div class="sm:col-span-1">
                                <input-error v-if="store.state.errors?.measurementDate"
                                    :messages="store.state.errors?.measurementDate" entity="measurementDate"></input-error>
                                <label for="date_of_birth"
                                    class="block text-sm font-medium leading-6 text-gray-900">Measurement
                                    Date</label>
                                <div class="mt-2">
                                    <input v-model="measurementData.measurementDate" type="date" name="measurementDate"
                                        id="measurementDate" autocomplete="measurementDate"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-1">
                                <input-error v-if="store.state.errors?.age" :messages="store.state.errors?.age"
                                    entity="age"></input-error>
                                <label for="age" class="block text-sm font-medium leading-6 text-gray-900">Age</label>
                                <div class="mt-2">
                                    <input v-model="measurementData.age" type="number" name="age" id="age"
                                        autocomplete="age" min="0" max="150"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-1">
                                <input-error v-if="store.state.errors?.height" :messages="store.state.errors?.height"
                                    entity="height"></input-error>
                                <label for="height" class="block text-sm font-medium leading-6 text-gray-900">Height
                                    (cm)</label>
                                <div class="mt-2">
                                    <input v-model="measurementData.height" type="number" min="40" max="300" step=".1"
                                        name="year_of_birth" id="year_of_birth" autocomplete="family-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                        <!-- Second Row -->
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.weight" :messages="store.state.errors?.weight"
                                    entity="weight"></input-error>
                                <label for="weight" class="block text-sm font-medium leading-6 text-gray-900">Weight (Kg)
                                </label>
                                <div class="mt-2">
                                    <input v-model="measurementData.weight" type="number" min="1" max="700" step=".1"
                                        name="weight" id="weight" autocomplete="weight"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.body_fat" :messages="store.state.errors?.body_fat"
                                    entity="body_fat"></input-error>
                                <label for="bodyFat" class="block text-sm font-medium leading-6 text-gray-900">Body Fat
                                    (%)</label>
                                <div class="mt-2">
                                    <input v-model="measurementData.bodyFat" type="number" min="1" max="200" step=".1"
                                        name="bodyFat" id="bodyFat" autocomplete="bodyFat"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.visceral_fat"
                                    :messages="store.state.errors?.visceral_fat" entity="visceral_fat"></input-error>
                                <label for="visceralFat" class="block text-sm font-medium leading-6 text-gray-900">visceral
                                    Fat (%)</label>
                                <div class="mt-2">
                                    <input v-model="measurementData.visceralFat" type="number" min="1" max="50" step=".1"
                                        name="visceralFat" id="visceralFat" autocomplete="visceralFat"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.bmr" :messages="store.state.errors?.bmr"
                                    entity="bmr"></input-error>
                                <label for="bmr" class="block text-sm font-medium leading-6 text-gray-900">BMR (RM)</label>
                                <div class="mt-2">
                                    <input v-model="measurementData.bmr" type="number" min="500" max="4500" name="bmr"
                                        id="bmr" autocomplete="bmr"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                        <!-- Third Row -->
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-10">
                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.bmi" :messages="store.state.errors?.bmi"
                                    entity="bmi"></input-error>
                                <label for="bmi" class="block text-sm font-medium leading-6 text-gray-900">BMI
                                </label>
                                <div class="mt-2">
                                    <input v-model="measurementData.bmi" type="number" min="5" max="205" step=".1"
                                        name="bmi" id="bmi" autocomplete="bmi"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.body_age" :messages="store.state.errors?.body_age"
                                    entity="body_age"></input-error>
                                <label for="bodyAge" class="block text-sm font-medium leading-6 text-gray-900">Body Age
                                </label>
                                <div class="mt-2">
                                    <input v-model="measurementData.bodyAge" type="number" min="0" max="200" name="bodyAge"
                                        id="bodyAge" autocomplete="bodyAge"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.trunk_fat" :messages="store.state.errors?.trunk_fat"
                                    entity="trunk_fat"></input-error>
                                <label for="trunkFat" class="block text-sm font-medium leading-6 text-gray-900">Trunk
                                    Fat (%)</label>
                                <div class="mt-2">
                                    <input v-model="measurementData.trunkFat" type="number" min="1" max="100" step=".1"
                                        name="trunkFat" id="trunkFat" autocomplete="trunkFat"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.muscle_mass"
                                    :messages="store.state.errors?.muscle_mass" entity="muscle_mass"></input-error>
                                <label for="muscleMass" class="block text-sm font-medium leading-6 text-gray-900">Muscle
                                    Mass (%)</label>
                                <div class="mt-2">
                                    <input v-model="measurementData.muscleMass" type="number" min="1" max="100" step=".1"
                                        name="muscleMass" id="muscleMass" autocomplete="muscleMass"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.trunk_size" :messages="store.state.errors?.trunk_size"
                                    entity="trunk_size"></input-error>
                                <label for="trunkSize" class="block text-sm font-medium leading-6 text-gray-900">Trunk
                                    Size (Inch)</label>
                                <div class="mt-2">
                                    <input v-model="measurementData.trunkSize" type="number" name="trunkSize" id="trunkSize"
                                        autocomplete="trunkSize"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                        <!-- Forth Row -->
                        <div class="border-b border-gray-900/10 pb-12"></div>
                        <div class="mt-6 flex items-center justify-end gap-x-6">
                            <button type="submit" :disabled="form.processing"
                                class="ounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm disabled:bg-gray-400  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthHeader>
</template>

<script setup>
import AuthHeader from '../../components/AuthHeader.vue';
import InputError from '../../components/child/InputError.vue';
import { ref, onMounted, watch } from "vue";
import store from '../../store';
import { useRoute } from 'vue-router';

const router = useRoute();

const measurementData = ref({
    clientId: router.params.id,
    measurementDate: "",
    age: "",
    height: "",

    weight: "",
    bodyFat: "",
    visceralFat: "",
    bmr: "",

    bmi: "",
    bodyAge: "",
    trunkFat: "",
    muscleMass: "",
    trunkSize: "",
});

const form = ref({
    progress: true,
    percentage: 0,
    processing: false,
});

watch(measurementData.value, () => {
    let total = Object.keys(measurementData.value).length;
    let completed = Object.values(measurementData.value).filter(value => value !== '').length;
    let percentage = Math.round((completed / total) * 100);
    form.value.percentage = percentage;
});

const newClientMeasurement = async () => {
    form.value.processing = true;
    const filteredData = Object.fromEntries(
        Object.entries(measurementData.value).filter(([key, value]) => value !== '')
    );

    await store.dispatch("createClientMeasurement", filteredData);
    form.value.processing = false;
}

onMounted(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    measurementData.value.measurementDate = `${year}-${month}-${day}`;
});


</script>

<style scoped>
progress {
    text-align: center;
    height: 25px;
}

progress:before {
    content: attr(value) "%";
    position: relative;
    top: 25px;
}
</style>

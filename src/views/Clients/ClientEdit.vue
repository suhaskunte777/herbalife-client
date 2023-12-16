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
                    <form class="p-5 mt-5" @submit.prevent="updateClient">

                        <h2 class="text-base font-semibold leading-7 text-gray-900">
                            Personal Information
                        </h2>
                        <!-- First Row -->
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.referredBy"
                                    :messages="store.state.errors?.referredBy" entity="referredBy"></input-error>
                                <label for="referredBy" class="block text-sm font-medium leading-6 text-gray-900">Referred
                                    By</label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.referredBy" type="text" name="referredBy"
                                        id="referredBy" autocomplete="referredBy"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <Listbox as="div" v-model="clientInputData.gender">
                                    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Gender
                                    </ListboxLabel>
                                    <div class="relative mt-2">
                                        <ListboxButton
                                            class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                            <span class="flex items-center">
                                                <img :src="clientInputData.gender.avatar" alt=""
                                                    class="h-5 w-5 flex-shrink-0 rounded-full" />
                                                <span class="ml-3 block truncate">{{ clientInputData.gender.name }}</span>
                                            </span>
                                            <span
                                                class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </span>
                                        </ListboxButton>

                                        <transition leave-active-class="transition ease-in duration-100"
                                            leave-from-class="opacity-100" leave-to-class="opacity-0">
                                            <ListboxOptions
                                                class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                <ListboxOption as="template" v-for="gender in genders" :key="gender.id"
                                                    :value="gender" v-slot="{ active, selected }">
                                                    <li :class="[
                                                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                        'relative cursor-default select-none py-2 pl-3 pr-9',
                                                    ]">
                                                        <div class="flex items-center">
                                                            <img :src="gender.avatar" alt=""
                                                                class="h-5 w-5 flex-shrink-0 rounded-full" />
                                                            <span :class="[
                                                                selected ? 'font-semibold' : 'font-normal',
                                                                'ml-3 block truncate',
                                                            ]">{{ gender.name }}</span>
                                                        </div>

                                                        <span v-if="selected" :class="[
                                                            active ? 'text-white' : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4',
                                                        ]">
                                                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    </li>
                                                </ListboxOption>
                                            </ListboxOptions>
                                        </transition>
                                    </div>
                                </Listbox>
                            </div>
                        </div>
                        <!-- Second Row -->
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.first_name"
                                    :messages="store.state.errors?.first_name" entity="first_name"></input-error>
                                <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">First
                                    name</label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.firstName" type="text" name="firstName" id="firstName"
                                        autocomplete="firstName"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.middle_name"
                                    :messages="store.state.errors?.middle_name" entity="middle_name"></input-error>
                                <label for="middleName" class="block text-sm font-medium leading-6 text-gray-900">Middle
                                    name</label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.middleName" type="text" name="middleName"
                                        id="middleName" autocomplete="middleName"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <input-error v-if="store.state.errors?.last_name" :messages="store.state.errors?.last_name"
                                    entity="last_name"></input-error>
                                <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">Last
                                    name</label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.lastName" type="text" name="lastName" id="lastName"
                                        autocomplete="lastName"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                        <!-- Forth Row -->
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
                            <div class="sm:col-span-1">
                                <label for="date_of_birth" class="block text-sm font-medium leading-6 text-gray-900">Birth
                                    Date</label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.birthDate" @input="updateFields('birthDate')"
                                        type="date" name="date_of_birth" id="date_of_birth" autocomplete="date_of_birth"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-1">
                                <input-error v-if="store.state.errors?.birth_year"
                                    :messages="store.state.errors?.birth_year" entity="birth_year"></input-error>
                                <label for="year_of_birth" class="block text-sm font-medium leading-6 text-gray-900">Birth
                                    Year</label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.birthYear" @input="updateFields('birthYear')"
                                        type="number" min="1900" max="2099" name="year_of_birth" id="year_of_birth"
                                        autocomplete="family-name"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-1">
                                <input-error v-if="store.state.errors?.age" :messages="store.state.errors?.age"
                                    entity="age"></input-error>
                                <label for="age" class="block text-sm font-medium leading-6 text-gray-900">Age</label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.age" @input="updateFields('age')" type="number"
                                        name="age" id="age" autocomplete="age" min="0" max="150"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>


                        </div>

                        <h2 class="text-base font-semibold leading-7 py-4 h-0 text-gray-900">
                            Contact Information
                        </h2>
                        <!-- Third Row -->
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <input-error v-if="store.state.errors?.phone" :messages="store.state.errors?.phone"
                                    entity="phone"></input-error>
                                <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <div class="absolute inset-y-0 left-0 flex items-center">
                                        <select v-model="clientInputData.countryCode" id="countryCode" name="countryCode"
                                            class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                            <option>+91</option>
                                            <option>+61</option>
                                            <option>+1</option>
                                        </select>
                                    </div>
                                    <input v-model="clientInputData.phone" type="text" name="phone" id="phone"
                                        class="block w-full rounded-md border-0 py-1.5 pl-16 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <input-error v-if="store.state.errors?.email" :messages="store.state.errors?.email"
                                    entity="email"></input-error>
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.email" type="email" name="email" id="email"
                                        autocomplete="email"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>

                        <!-- Fifth Row -->
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                            <div class="sm:col-span-1">
                                <label for="address1" class="block text-sm font-medium leading-6 text-gray-900">Address Line
                                    1
                                </label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.address1" type="text" name="address1" id="address1"
                                        autocomplete="address1"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-1">
                                <label for="address2" class="block text-sm font-medium leading-6 text-gray-900">Address Line
                                    2
                                </label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.address2" type="text" name="address2" id="address2"
                                        autocomplete="address2"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                        <!-- Six Row -->
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                            <div class="sm:col-span-1">
                                <label for="zip" class="block text-sm font-medium leading-6 text-gray-900">Pincode
                                </label>
                                <div class="mt-2">
                                    <input :value="clientInputData.zip" type="number" name="zip" id="zip"
                                        @keyup="updateAddressFields(clientInputData, $event)" autocomplete="zip"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-1">
                                <label for="city" class="block text-sm font-medium leading-6 text-gray-900">District
                                </label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.city" :disabled="form.disableAddressFields" type="text"
                                        name="city" id="city" autocomplete="city"
                                        class="block w-full disabled:bg-slate-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-1">
                                <label for="state" class="block text-sm font-medium leading-6 text-gray-900">State
                                </label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.state" :disabled="form.disableAddressFields" type="text"
                                        name="state" id="state" autocomplete="state"
                                        class="block w-full disabled:bg-slate-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-1">
                                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country
                                </label>
                                <div class="mt-2">
                                    <input v-model="clientInputData.country" :disabled="form.disableAddressFields"
                                        type="text" name="country" id="country" autocomplete="country"
                                        class="block w-full disabled:bg-slate-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                        <!-- Seven Row -->
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
import { ref, onMounted, computed, watch, onUpdated, onBeforeMount } from "vue";
import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import store from '../../store';
import axios from 'axios';
import { useRoute } from 'vue-router';

const router = useRoute();


const clientInputData = ref({
    referredBy: "",
    gender: {
        name: "Male",
        avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    firstName: "",
    middleName: "",
    lastName: "",

    countryCode: "+91",
    phone: "",
    email: "",

    birthDate: "",
    birthDateType: "",
    birthYear: "",
    birthYearType: "",
    age: "",
    ageType: "",

    address1: "",
    address2: "",

    zip: "",
    city: "",
    state: "",
    country: "",
});

const form = ref({
    disableAddressFields: false,
    progress: true,
    percentage: 0,
    processing: false,
    addressFetched: false
});

watch(clientInputData.value, () => {
    formProgress();
});

const formProgress = () => {
    let total = Object.keys(clientInputData.value).length;
    let completed = Object.values(clientInputData.value).filter(value => value !== '').length;
    let percentage = Math.round((completed / total) * 100);
    form.value.percentage = percentage;
};

onBeforeMount(async () => {
    await store.dispatch("getClient", router.params.id);

    clientInputData.value = store.state.currentClient;
    formProgress();
});

const updateAddressFields = (clientInputData, event) => {
    if (clientInputData.zip !== event.target.value && (event.target.value) > 100000 && (event.target.value) < 999999) {
        form.value.addressFetched = false;
    }

    if (!form.value.addressFetched && (event.target.value) > 100000 && (event.target.value) < 999999) {
        form.value.disableAddressFields = true;
        console.log("API called with value", event.target.value);
        axios.get(`https://api.postalpincode.in/pincode/${event.target.value}`).then(response => {
            if (response.data[0].Status == "Success") {
                clientInputData.city = response.data[0].PostOffice[0].District;
                clientInputData.state = response.data[0].PostOffice[0].State;
                clientInputData.country = response.data[0].PostOffice[0].Country;
            }
            form.value.addressFetched = true;
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            form.value.disableAddressFields = false;
        });

    }

    clientInputData.zip = event.target.value;
}

const updateFields = (initiater) => {
    if (initiater == "birthDate") {
        const dob = new Date(clientInputData.value.birthDate);
        clientInputData.value.birthYear = dob.getFullYear();
        const currentDate = new Date();
        clientInputData.value.age = currentDate.getFullYear() - dob.getFullYear();
        clientInputData.value.birthDateType = "Exact";
        clientInputData.value.birthYearType = "Calculated";
        clientInputData.value.ageType = "Calculated";
    }
    else if (initiater == "birthYear") {
        const currentDate = new Date();
        clientInputData.value.age = currentDate.getFullYear() - clientInputData.value.birthYear;
        clientInputData.value.birthDateType = "";
        clientInputData.value.birthYearType = "Exact";
        clientInputData.value.ageType = "calculated";
    }
    else if (initiater == "age") {
        const currentDate = new Date();
        clientInputData.value.birthYear = currentDate.getFullYear() - clientInputData.value.age;
        clientInputData.value.birthDateType = "";
        clientInputData.value.birthYearType = "calculated";
        clientInputData.value.ageType = "Exact";
    }
}

const updateClient = () => {
    form.value.processing = true;
    const filteredData = Object.fromEntries(
        Object.entries(clientInputData.value).filter(([key, value]) => value !== '')
    );

    const modifiedData = {
        ...filteredData,
        gender: clientInputData.value.gender.name.toLowerCase()
    };

    store.dispatch("updateClient", modifiedData);
    form.value.processing = false;
}

const genders = store.state.genders;

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

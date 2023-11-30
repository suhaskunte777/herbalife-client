<template>
    <div>
        <GuestHeader title="Register for Free"></GuestHeader>
        <div class="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" @submit.prevent="onRegister">
                    <div>
                        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">First and Last
                            name</label>
                        <input-error v-if="store.state.errors?.name" :messages="store.state.errors?.name"
                            entity="name"></input-error>
                        <div class="mt-2">
                            <input id="name" name="name" type="text" v-model="user.name" autocomplete="name" required="true"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <input-error v-if="store.state.errors?.email" :messages="store.state.errors?.email"
                            entity="email"></input-error>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" v-model="user.email" autocomplete="email"
                                required="true"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <input-error v-if="store.state.errors?.password" :messages="store.state.errors?.password"
                            entity="password"></input-error>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" v-model="user.password" required="true"
                                autocomplete="current-password" minlength="8"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm
                                Password</label>
                        </div>
                        <div class="mt-2">
                            <input id="password_confirmation" name="password_confirmation" type="password"
                                v-model="user.password_confirmation" autocomplete="current-password-confirmation"
                                required="true" minlength="8"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                            in</button>
                    </div>
                </form>

                <p class="mt-10 text-center text-sm text-gray-500">
                    Already a member?
                    {{ ' ' }}
                    <router-link :to="{ name: 'Login' }"
                        class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login here</router-link>
                </p>
            </div>
        </div>
    </div>
</template>  

<script setup>
import { ref } from 'vue';
import GuestHeader from '../../components/GuestHeader.vue';
import InputError from '../../components/child/InputError.vue';
import store from '../../store';

const user = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const onRegister = () => {
    console.log(user.value);
    store.dispatch('register', user.value);
}
</script>

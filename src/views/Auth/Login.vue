<template>
    <div>
        <GuestHeader title="Log in to your account"></GuestHeader>
        <div class="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" @submit.prevent="onLogin">
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
                            <div class="text-sm">
                                <router-link :to="{ name: 'RequestPasswordReset' }"
                                    class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot
                                    password?</router-link>
                            </div>
                        </div>
                        <input-error v-if="store.state.errors?.password" :messages="store.state.errors?.password"
                            entity="password"></input-error>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" v-model="user.password" required="true"
                                autocomplete="current-password"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <div class="mt-2 flex items-center">
                            <input id="remember" name="remember" type="checkbox" v-model="user.remember"
                                autocomplete="remember"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                            <label for="remember"
                                class="pl-2 text-block text-sm font-medium leading-6 text-gray-900">Remember
                                me</label>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                            in</button>
                    </div>
                </form>

                <p class="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    {{ ' ' }}
                    <router-link :to="{ name: 'Register' }"
                        class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register here</router-link>
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
    email: '',
    password: '',
    remember: false
});

const onLogin = () => {
    store.dispatch('login', user.value);
}
</script>

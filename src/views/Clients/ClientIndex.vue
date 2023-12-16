<template>
    <AuthHeader title="Clients">

        <router-link :to="{ name: 'ClientsCreate' }" class="bg-blue-500 p-3 rounded-md text-white">Create New Client
        </router-link>

        <!-- create a table of clients with search function -->
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full text-left text-sm font-light">
                            <caption class="p-5 text-lg font-medium text-gray-900">List of clients</caption>
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" class="px-6 py-3">ID</th>
                                    <th scope="col" class="px-6 py-3">Full Name</th>
                                    <th scope="col" class="px-6 py-3">Connect with</th>
                                    <th scope="col" class="px-6 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="client in clients" :key="client.id" class="border-b dark:border-neutral-500">
                                    <td class="whitespace-nowrap px-6 py-4 font-medium">{{ client.id }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ client.fullName }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <a :href="'tel:' + client.countryCode + + client.phone"
                                            class="bg-blue-500 p-1 m-1 rounded-md text-white  inline-block">
                                            <PhoneIcon class="h-5 w-5 mx-3 text-green-300 inline-block"></PhoneIcon>Call
                                        </a>
                                        <!-- add whatsapp action -->
                                        <a :href="'https://wa.me/' + client.countryCode + client.phone" target="_blank"
                                            class="bg-green-500 p-1 m-1 rounded-md text-white  inline-block">
                                            <ChatBubbleOvalLeftIcon class="h-5 w-5 mx-3 text-green-900 inline-block">
                                            </ChatBubbleOvalLeftIcon> WhatsApp
                                        </a>
                                        <!-- Message  -->
                                        <a :href="'sms:' + client.countryCode + + client.phone"
                                            class="bg-blue-600 p-1 m-1 rounded-md text-white  inline-block">
                                            <ChatBubbleLeftRightIcon class="h-5 w-5 mx-3 text-green-300 inline-block">
                                            </ChatBubbleLeftRightIcon> Message
                                        </a>
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <router-link :to="{ name: 'ClientsShow', params: { id: client.id } }"
                                            class="bg-green-500 p-2 m-2 rounded-md text-white">Show</router-link>
                                        <router-link :to="{ name: 'ClientsEdit', params: { id: client.id } }"
                                            class="bg-yellow-500 p-2 m-2 rounded-md text-white">Edit</router-link>
                                        <router-link :to="{ name: 'MeasurementsCreate', params: { id: client.id } }"
                                            class="bg-indigo-500 p-2 m-2 rounded-md text-white">Add
                                            Measurement</router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AuthHeader>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import AuthHeader from '../../components/AuthHeader.vue';
import store from '../../store';
import { PhoneIcon, ChatBubbleOvalLeftIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/solid';

const clients = computed(() => store.state.clients);

onMounted(async () => {
    await store.dispatch('getClients');
});


</script>

<style scoped></style>

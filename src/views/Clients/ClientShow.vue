<template>
    <AuthHeader :title=title>

        <router-link :to="{ name: 'ClientsIndex' }" class="bg-blue-500 p-3 rounded-md text-white"> Back
        </router-link>

        <!-- create a table of clients with search function -->
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <!-- component -->
                        <div class="md:px-32 py-8 w-full">
                            <div class="shadow overflow-hidden rounded border-b border-gray-200">
                                <table class="min-w-full bg-white table-auto">
                                    <tbody class="text-gray-700">
                                        <tr class="bg-gray-100">
                                            <td class="w-1/3 text-left py-3 px-4">Full Name</td>
                                            <td class="w-1/3 text-left py-3 px-4">{{ client.fullName }}</td>
                                        </tr>
                                        <tr>
                                            <td class="w-1/3 text-left py-3 px-4">Birth Date / Birth Year / Age</td>
                                            <td class="w-1/3 text-left py-3 px-4">{{ client.birthDate ? client.birthDate
                                                + " / " + client.age : client.birthYear + " / " + client.age }}</td>
                                        </tr>
                                        <tr class="bg-gray-100">
                                            <td class="w-1/3 text-left py-3 px-4">Sponser Name</td>
                                            <td class="w-1/3 text-left py-3 px-4">{{ client.referredBy }}</td>
                                        </tr>
                                        <tr>
                                            <td class="w-1/3 text-left py-3 px-4">Contact Details</td>
                                            <td class="w-1/3 text-left py-3 px-4">
                                                <a :href="'tel:' + client.countryCode + + client.phone"
                                                    class="bg-blue-500 p-2 m-2 rounded-md text-white  inline-block">
                                                    <PhoneIcon class="h-5 w-5 mx-3 text-green-300 inline-block"></PhoneIcon>
                                                    Call
                                                </a>
                                                <!-- add whatsapp action -->
                                                <a :href="'https://wa.me/' + client.countryCode + client.phone"
                                                    target="_blank"
                                                    class="bg-green-500 p-2 m-2 rounded-md text-white  inline-block">
                                                    <ChatBubbleOvalLeftIcon
                                                        class="h-5 w-5 mx-3 text-green-900 inline-block">
                                                    </ChatBubbleOvalLeftIcon> WhatsApp
                                                </a>
                                                <br />
                                                <!-- Message  -->
                                                <a :href="'sms:' + client.countryCode + + client.phone"
                                                    class="bg-blue-600 p-2 m-2 rounded-md text-white  inline-block">
                                                    <ChatBubbleLeftRightIcon
                                                        class="h-5 w-5 mx-3 text-green-300 inline-block">
                                                    </ChatBubbleLeftRightIcon> Message
                                                </a>
                                                <!-- TODO Ask Coach to select your preferred email provider  :href="'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=' + client.email" -->
                                                <a :href="'mailto:' + client.email"
                                                    class="bg-blue-600 p-2 m-2 rounded-md text-white  inline-block"
                                                    target="_blank">
                                                    <EnvelopeOpenIcon class="h-5 w-5 mx-3 text-green-300 inline-block">
                                                    </EnvelopeOpenIcon> Mail
                                                </a>
                                            </td>
                                        </tr>
                                        <tr class="bg-gray-100">
                                            <td class="w-1/3 text-left py-3 px-4">Address</td>
                                            <td class="w-1/3 text-left py-3 px-4">
                                                <address>
                                                    {{ client?.address1 ? client.address1 + "," : "" }} <br
                                                        v-if="client.address1" />
                                                    {{ client?.address2 ? client.address2 + "," : "" }} <br
                                                        v-if="client.address2" />
                                                    {{ client.city }}, {{ client.state }}, {{ client.country }} - {{
                                                        client.zip }}
                                                </address>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <br />
                        <!-- Measurements Table -->
                        <div class="md:px-16 py-8 w-full">
                            <div class="shadow overflow-hidden rounded border-b border-gray-200">
                                <table class="min-w-full bg-white table-auto">
                                    <thead class="bg-gray-100">
                                        <tr>
                                            <th
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                Age
                                            </th>
                                            <th
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                Height
                                            </th>
                                            <th
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                Weight
                                            </th>
                                            <th
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                Body Fat %
                                            </th>
                                            <th
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                Visceral Fat
                                            </th>
                                            <th
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                BMR (RM)
                                            </th>
                                            <th
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                BMI
                                            </th>
                                            <th
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                Body Age
                                            </th>
                                            <th
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                Trunk Fat
                                            </th>
                                            <th
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                Muscle Mass
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-gray-700">
                                        <tr v-for="measurement in client.measurements" :key="measurement.id"
                                            :class="measurement.id % 2 === 0 ? 'bg-gray-100' : 'bg-white'">
                                            <td
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                {{ measurement.age }}
                                            </td>
                                            <td
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                {{ measurement.height }}
                                            </td>
                                            <td class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider"
                                                :class="{
                                                    'bg-yellow-100': measurement.bmi >= bmiRanges.bmiMal1Min && measurement.bmi <= bmiRanges.bmiMal2Max,
                                                    'bg-green-100': measurement.bmi >= bmiRanges.bmiStandardMin && measurement.bmi <= bmiRanges.bmiStandardMax,
                                                    'bg-orange-100': (measurement.bmi >= bmiRanges.bmiObesMin && measurement.bmi <= bmiRanges.bmiObes1Max) ||
                                                        (measurement.bmi >= bmiRanges.bmiObes2Min && measurement.bmi <= bmiRanges.bmiObes2Max),
                                                    'bg-red-100': measurement.bmi >= bmiRanges.bmiObes3Min
                                                }">
                                                {{ measurement.weight }}
                                            </td>
                                            <td
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                {{ measurement.body_fat }}
                                            </td>
                                            <td
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                {{ measurement.visceral_fat }}
                                            </td>
                                            <td
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                {{ measurement.bmr }}
                                            </td>
                                            <td
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                {{ measurement.bmi }}
                                            </td>
                                            <td
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                {{ measurement.body_age }}
                                            </td>
                                            <td
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                {{ measurement.trunk_fat }}
                                            </td>
                                            <td
                                                class="text-left py-3 px-4 font-medium text-gray-900 uppercase tracking-wider">
                                                {{ measurement.muscle_mass }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthHeader>
</template>

<script setup>
import { computed, onBeforeMount, onMounted } from "vue";
import store from "../../store";
import { useRoute } from "vue-router";
import AuthHeader from "../../components/AuthHeader.vue";
import { PhoneIcon, ChatBubbleOvalLeftIcon, ChatBubbleLeftRightIcon, EnvelopeOpenIcon } from '@heroicons/vue/24/solid';
const router = useRoute();

const client = computed(() => {
    return store.state.currentClient;
});

const title = computed(() => {
    return "Information For : " + store.state.currentClient.fullName
})

const bmiRanges =  {
    bmiMal1: { min: 1, max: 18.0, class: "bg-yellow-100" },
    bmiMal2: { min: 18.1, max: 20.0, class: "bg-yellow-100" },
    bmiStandard: { min: 20.1, max: 23.0, class: "bg-green-100" },
    bmiObesMin: { min: 23.1, max: 25.0, class: "bg-orange-100" },
    bmiObes1: { min: 25.1, max: 28.0, class: "bg-orange-100" },
    bmiObes2: { min: 28.1, max: 30.0, class: "bg-orange-100" },
    bmiObes3: { min: 30.0, max: 99.0, class: "bg-red-100" },
}

onBeforeMount(async () => {
    await store.dispatch('getClient', router.params.id);
    console.log("From mounted", router.params.id, store.state.currentClient);
})
</script>

<style></style>

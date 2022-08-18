import VueJsonPretty from 'vue-json-pretty'

export default defineNuxtPlugin(({ vueApp }) => vueApp.component('JsonPretty', VueJsonPretty))

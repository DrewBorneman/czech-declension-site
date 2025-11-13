import { createApp } from 'vue';
import { createI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import {
    VApp, // required
    VBtn,
    VSwitch
  } from 'vuetify/components';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css'
import './style.css';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { AddIconsToLibrary } from './helpers/FontAwesome'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import MainContent from './views/MainContent.vue'
import Quiz from './views/Quiz.vue'
import { languages } from "./locales/index.js";

/* add icons to the library */
AddIconsToLibrary(library);

const router =  createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: MainContent,
            meta: {
                order: 1
            },
        },
        {
            path:'/quiz',
            name:'quiz',
            component: Quiz,
            meta: {
                order: 2
            },
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
        },
    ]})

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  globalInjection: true,
  messages: languages
})

const vuetify = createVuetify({
    components: {
        VApp,
        VBtn, 
        VSwitch
    },
    directives: {},
    theme: {
        defaultTheme: 'light',
        //
      },
});

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(i18n)
    .use(vuetify)
    .mount('#app')

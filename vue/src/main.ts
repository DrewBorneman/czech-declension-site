import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { AddIconsToLibrary } from './helpers/FontAwesome'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import MainContent from './components/MainContent.vue'
import Contact from './components/Contact.vue'

/* add icons to the library */
AddIconsToLibrary(library);

const router =  createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: MainContent,
        },
        {
            path:'/contact',
            name:'contact',
            component: Contact,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
        },
    ]})

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')

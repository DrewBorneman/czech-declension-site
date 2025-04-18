import { createApp } from 'vue';
import { createVuetify } from 'vuetify'
import {
    VApp, // required
    VCarousel,
    VPagination,
    VMenu,
    VBtn,
    VList,
    VListItem
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
import Contact from './views/Contact.vue'
import Resume from './views/Resume.vue'
import Projects from './views/Projects.vue'
import CMS from './views/cms.vue'
import { verifyPassword } from './helpers/password';

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
            path:'/resume',
            name:'resume',
            component: Resume,
            meta: {
                order: 2
            },
        },
        {
            path:'/projects',
            name:'projects',
            component: Projects,
            meta: {
                order: 3
            },
        },
        {
            path:'/contact',
            name:'contact',
            component: Contact,
            meta: {
                order: 4
            },
        },
        {
            path:'/cms',
            name:'cms',
            component: CMS,
            beforeEnter: async () => {
                return verifyPassword();
            },
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
        },
    ]})

const vuetify = createVuetify({
    components: {
        VApp,
        VPagination,
        VCarousel,
        VMenu, 
        VBtn, 
        VList, 
        VListItem 
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
    .use(vuetify)
    .mount('#app')

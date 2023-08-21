import './bootstrap';

import router from './src/router.js';
import {createApp} from 'vue'

import App from './src/App.vue'


createApp(App).
    use(router).
    mount("#app")


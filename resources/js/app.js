import './bootstrap';

import router from './src/router.js';
import {createApp} from 'vue'
import Store from './src/store/store.js'

import App from './src/App.vue'


createApp(App).
    use(router).
    use(Store).
    mount("#app")


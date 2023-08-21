
import { createWebHistory, createRouter } from 'vue-router';

import Board from './Board.vue';
import Admin_panel from './Admin_panel.vue';

const routes = [
    { path: '/board', name: 'board', component: Board },
    { path: '/admin_panel', name: 'admin_panel', component: Admin_panel },
    // { path: '/admin_panel/design', name: 'admin_panel', component: Admin_panel },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

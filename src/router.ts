import Vue from 'vue';
import VueRouter from 'vue-router';
import FooPage from './pages/FooPage.vue';
import BarPage from './pages/BarPage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'FooPage',
        component: FooPage,
    },
    {
        path: '/barPage',
        name: 'BarPage',
        component: BarPage,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;

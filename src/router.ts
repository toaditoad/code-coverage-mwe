import Vue from 'vue';
import VueRouter from 'vue-router';
import ClassComponentTypescriptPage from './pages/ClassComponentTypescriptPage.vue';
import ClassComponentJavascriptPage from './pages/ClassComponentJavascriptPage.vue';
import ComponentTypescriptPage from './pages/ComponentTypescriptPage.vue';
import ComponentJavascriptPage from './pages/ComponentJavascriptPage.vue';
import UntouchedClassComponentTypescriptPage from './pages/UntouchedClassComponentTypescriptPage.vue';
import UntouchedClassComponentJavascriptPage from './pages/UntouchedClassComponentJavascriptPage.vue';
import UntouchedComponentTypescriptPage from './pages/UntouchedComponentTypescriptPage.vue';
import UntouchedComponentJavascriptPage from './pages/UntouchedComponentJavascriptPage.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/classComponentTypescriptPage',
        name: 'ClassComponentTypescriptPage',
        component: ClassComponentTypescriptPage,
    },
    {
        path: '/classComponentJavascriptPage',
        name: 'ClassComponentJavascriptPage',
        component: ClassComponentJavascriptPage,
    },
    {
        path: '/componentTypescriptPage',
        name: 'ComponentTypescriptPage',
        component: ComponentTypescriptPage,
    },
    {
        path: '/componentJavascriptPage',
        name: 'ComponentJavascriptPage',
        component: ComponentJavascriptPage,
    },
    {
        path: '/untouchedClassComponentTypescriptPage',
        name: 'UntouchedClassComponentTypescriptPage',
        component: UntouchedClassComponentTypescriptPage,
    },
    {
        path: '/untouchedClassComponentJavascriptPage',
        name: 'UntouchedClassComponentJavascriptPage',
        component: UntouchedClassComponentJavascriptPage,
    },
    {
        path: '/untouchedComponentTypescriptPage',
        name: 'UntouchedComponentTypescriptPage',
        component: UntouchedComponentTypescriptPage,
    },
    {
        path: '/untouchedComponentJavascriptPage',
        name: 'UntouchedComponentJavascriptPage',
        component: UntouchedComponentJavascriptPage,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;

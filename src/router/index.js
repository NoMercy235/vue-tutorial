import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Notemaster from '@/components/Notemaster';
import Starbase from '@/components/Starbase';
import Jokester from '@/components/Jokester';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/notemaster',
            name: 'Notemaster',
            component: Notemaster,
        },
        {
            path: '/starbase',
            name: 'Starbase',
            component: Starbase,
        },
        {
            path: '/jokester',
            name: 'Jokester',
            component: Jokester,
        },
    ],
});

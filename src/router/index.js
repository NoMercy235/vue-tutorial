import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Notemaster from '@/components/Notemaster';
import Starbase from '@/components/Starbase';
import Jokester from '@/components/Jokester';
import Turnout from '@/components/turnout/Turnout';
import Signin from '@/components/turnout/Signin';
import Dashboard from '@/components/turnout/Dashboard';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
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
        {
            path: '/turnout',
            component: Turnout,
            children: [
                {
                    path: '',
                    component: Dashboard,
                },
                {
                    path: 'signin',
                    component: Signin,
                },
            ],
        },
    ],
});

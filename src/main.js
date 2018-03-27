// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import router from './router';
import store from './store';
import {firebaseApp, } from './firebase';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        store.dispatch('signIn', user);
        router.push('/turnout');
    } else {
        router.push('/turnout/signin');
    }
});

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(BootstrapVue);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App, },
    template: '<App/>',
});

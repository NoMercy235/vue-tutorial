<template>
    <div>
        <div class="col-xs-12 to-sign-out">
            <b-button :size="'sm'" :variant="'danger'" @click="signOut()">Sign out</b-button>
        </div>
        <p>{{ $store.state.user }}</p>
    </div>
</template>

<script>
import {firebaseApp, } from '../../firebase';

export default {
    name: 'Dashboard',
    data () {
        return {
        };
    },
    methods: {
        signOut () {
            this.$store.dispatch('signOut');
            firebaseApp.auth().signOut();
        },
    },
};
</script>

<style scoped>
    .to-sign-out {
        float: right;
    }
</style>

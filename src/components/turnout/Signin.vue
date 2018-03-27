<template>
    <div>
        <b-form inline>
            <label class="sr-only">Username</label>
            <b-input v-model="email" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Username" />
            <label class="sr-only">Password</label>
            <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-input :type="'password'" v-model="password" placeholder="Password" />
            </b-input-group>
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>
            <b-button @click="signIn()" variant="primary">Login</b-button>
        </b-form>
        <p>{{ error.message }}</p>
    </div>
</template>

<script>
import {firebaseApp, } from '../../firebase';

export default {
    name: 'Signin',
    data () {
        return {
            email: '',
            password: '',
            error: {
                message: '',
            },
        };
    },
    methods: {
        signIn () {
            firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
                .catch(error => { this.error = error; });
        },
    },
};
</script>

<style>

</style>

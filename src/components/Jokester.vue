<template>
    <div>
        <h3>Got jokes?</h3>
        <b-button :size="'sm'" :variant="'primary'" @click="initJokes()">Add 10 random jokes</b-button>
        <b-button :size="'sm'" :variant="'primary'" @click="addJoke()">Add a random joke</b-button>

        <b-card-group>
            <joke v-for="(joke, index) in $store.state.jokes" :joke="joke" v-bind:key="index"></joke>
        </b-card-group>
    </div>
</template>

<script>
import {mapActions, } from 'vuex';
import Joke from './Joke';

export default {
    name: 'Jokester',
    data () {
        return {
        };
    },
    methods: mapActions([
        'initJokes',
        'addJoke',
    ]),
    components: {
        Joke,
    },
};
</script>

<style scoped>

</style>

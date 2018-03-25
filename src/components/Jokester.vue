<template>
    <div>
        <h3>Got jokes?</h3>
        <b-button :size="'sm'" :variant="'primary'" @click="initJokes()">Add 10 random jokes&times;</b-button>

        <div>{{ $store.state }}</div>
    </div>
</template>

<script>
import {mapActions, } from 'vuex';

export default {
    name: 'Jokester',
    data () {
        return {
        };
    },
    methods: mapActions([
        'initJokes',
    ]),
};
</script>

<style scoped>

</style>

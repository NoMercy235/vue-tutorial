<template>
    <b-card :title-tag="'card-title'" class="mb-2" style="min-width: 20rem;">
        <div class="card-title">
            {{ joke.setup }}
            <span class="pull-right" @click="removeJoke(joke.id)">&times;</span>
        </div>
        <div slot="footer">
            <small class="text-muted">{{ joke.punchline }}</small>
        </div>
    </b-card>
</template>

<script>
import {mapActions, } from 'vuex';

export default {
    name: 'Joke',
    data () {
        return {
        };
    },
    actions: mapActions([
        'removeJoke',
    ]),
    props: [ 'joke', ],
};
</script>

<style scoped>
    .pull-right {
        float: right;
    }
</style>

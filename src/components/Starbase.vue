<template>
   <div class="sb-body">
       <h3>{{ title }}</h3>
       <button class="btn btn-primary" @click="fetchCharacter">Get character</button>
   </div>
</template>

<script>
export default {
    name: 'Starbase',
    data () {
        return {
            title: 'Generate Your Team',
        };
    },
    methods: {
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .sb-body {
        background: #263238;
        color: white;
        margin-top: 60px;
        height: 100%;
    }
</style>

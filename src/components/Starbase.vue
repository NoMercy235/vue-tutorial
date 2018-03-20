<template>
   <div class="sb-body">
       <h3>{{ title }}</h3>
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

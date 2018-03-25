<template>
    <div id="app">
        <b-nav>
            <b-nav-item><router-link to="/notemaster">Notemaster</router-link></b-nav-item>
            <b-nav-item><router-link to="/starbase">Starbase</router-link></b-nav-item>
            <b-nav-item><router-link to="/jokester">Jokester</router-link></b-nav-item>
        </b-nav>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

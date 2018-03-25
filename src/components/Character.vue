<template>
    <div></div>
</template>

<script>
export default {
    name: 'Character',
    data () {
        return {
            character: {},
        };
    },
    methods: {
        fetchCharacter () {
            fetch('http://swapi.com/api/people', { method: 'GET', })
                .then(data => {
                    console.log(data);
                });
        },
    },
};
</script>

<style>

</style>

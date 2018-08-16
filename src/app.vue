<template>
    <div>
        <!-- <router-link to="/index"></router-link> -->
        <router-view/>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {
            seeContent () {
                this.$router.push('/about');
            }
        }
    };
</script>






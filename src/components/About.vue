<template>
    <div class="about">

        <topBar></topBar>
        <div class="menu">
            <div class="menuitem"><router-link :to="{path: '/'}">Home</router-link></div>
            <div class="menuitem"><router-link :to="{name: 'About'}">About us</router-link></div>
            <div class="menuitem">History</div>
            <div class="menuitem">Gallery</div>
        </div>
        <div class="right">
            <h2>Who i'm?</h2>
            <p>I'm an agressive developer </p>
            <h2>Where?</h2>
            <p>On the northwest cost of the Italian Riviera, north of the city La Spezia.</p>
            <h2>Price?</h2>
            <p>Availble for 1000$ </p>
            <p>Are you addicted to speeds??</p>

            <p>Licenced MIT</p>
        </div>

    </div>
</template>

<script>
    import topBar from './topnav.vue';

    export default{
        name: 'about',
        components : {
            topBar
        }

    }
</script>
<style>

    .right {
        background-color: lightblue;
        float: left;
        width: 60%;
        padding: 10px 15px;
        margin-top: 7px;
    }

</style>
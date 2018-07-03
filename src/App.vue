<template>
  <div id="app">
    <!-- the router outlet, where all matched components would ber viewed -->
      <router-view></router-view>
    <registrations></registrations>

    <registration></registration>

  </div>
</template>

<script>

    import topBar from './components/HelloWorld.vue'
    import registration from './components/registration.vue'
    import registrations from './components/registrations.vue'

    export default {

        components: {
            'registration': registration,
            'registrations': registrations
        }


    }

</script>
<!-- styling for the component -->
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
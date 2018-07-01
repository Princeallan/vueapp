<template>
  <div class="hello">

    <topBar></topBar>
      <div class="menu">
          <div class="menuitem"><router-link :to="{path: '/'}">Home</router-link></div>
          <div class="menuitem"><router-link :to="{name: 'About'}">About us</router-link></div>
          <div class="menuitem">History</div>
          <div class="menuitem">Gallery</div>
      </div>

      <div class="main">
          <h2>Vue.js</h2>
          <p>Vue.js is a library for building interactive web interfaces.
              It provides data-reactive components with a simple and flexible API.</p>
          <img src="../assets/logo.png" style="width:100%">
      </div>
  </div>
</template>

<script>

    import topBar from './topnav.vue';
export default {
  name: 'HelloWorld',
    components: {
        topBar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        box-sizing: border-box;
    }
    .main {
        float: left;
        width: 60%;
        padding: 0 20px;
        overflow: hidden;
    }


h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

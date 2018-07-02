<template>
  <div class="hello">

    <topBar></topBar>
      <div class="menu">
          <div class="menuitem"><router-link :to="{path: '/'}">Home</router-link></div>
          <div class="menuitem"><router-link :to="{name: 'About'}">About us</router-link></div>
          <div class="menuitem"><router-link :to="{name: 'list'}">My list</router-link></div>
          <div class="menuitem">History</div>
          <div class="menuitem">Gallery</div>
      </div>

      {{counter}} <br>
      <button v-on:click="counter">Start Count</button>
      <input v-model="counterMsg">

      <tabs>
          <tab name="Categories" :selected="true">
              <h4>Welcome to our Categories</h4>
          </tab>

          <tab name="Brands">
              <h4>Welcome to our Brands</h4>
          </tab>

          <tab name="Partners">
              <h4>Welcome to our partners</h4>
          </tab>

      </tabs>

  </div>
</template>

<script>

    import topBar from './topnav.vue';
export default {
  name: 'HelloWorld',
    data(){
      return{
            counter:0,
            counterMsg:''
      }
    },
    components: {
        topBar
    },
    watch: {
        counterMsg: {
            handler: function() {
                this.updateCounter();
            }
        }
    },

    methods: {
        updateCounter(){

            this.counter = this.counterMsg.length;
        }
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

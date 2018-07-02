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

      <div></div>

      <div>
          <b-button-group>
              <b-button @click="showList()">Button 1</b-button>

          </b-button-group>
      </div>
      <component v-bind:is="current_component"></component>

  </div>
</template>

<script>
    import first from './first.vue';
    import second from './second.vue';
    import topBar from './topnav.vue';
export default {
  name: 'HelloWorld',
    data(){
      return{
          message:'',
            counter:0,
            counterMsg:'',
            current_component:"first"

      }
    },
    components: {
        'first' : first,
        'second': second,
        "topBar":topBar
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
        },
        showList(){
            this.current_component = "second"
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

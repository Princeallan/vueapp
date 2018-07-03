<template>
    <div id="blog">
      <p>{{status}}</p>
    </div>
</template>
<script>

    import axios from 'axios';

    export default {
        name:'blog',
        data(){
            return {
                status: ''
            }
        },
        created: function () {
            this.loadQuote();
        },
        methods:{
            loadQuote: function () {
                this.status = 'Loading....';
                var vm = this;
                axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
                    .then(function (response) {
                        vm.status = response.data[0];
                    })
                    .catch(function (error) {
                        vm.status = 'error ocurred' + error;
                    });
            }
        }
    }
</script>

<style>

</style>
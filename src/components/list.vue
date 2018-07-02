<template>
    <div id="list">
        <topBar></topBar>
        <div class="menu">
            <div class="menuitem"><router-link :to="{path: '/'}">Home</router-link></div>
            <div class="menuitem"><router-link :to="{name: 'About'}">About us</router-link></div>
            <div class="menuitem"><router-link :to="{name: 'list'}">My list</router-link></div>
            <div class="menuitem">History</div>
            <div class="menuitem">Gallery</div>
        </div>
        <form action="#">
            First name:<br>
            <input type="text" id="firstname" v-model="user.firstname">
            <br>
            Last name:<br>
            <input type="text" id="lastname" v-model="user.lastname">
            <br>
            Remarks: <br>
            <input type="text" id="input" v-model="user.message">
            <br>
        </form>


        <p>First Name: {{ user.firstname }} </p>
        <p>Last Name: {{ user.lastname }} </p>
        <p>Full Name Name: {{ fullname }} </p>
        <p>Remarks: {{ user.message }} </p>


        <button type="button" @click="addUser()" id="button">Add Customer</button>

        <p v-bind:class="{greenbody:users.length>5}">Daily target achieved: {{ message }} .</p>

        <span v-if="users.length==3">
            <p style="color: red;"> You have added Three Users You can now bw rated</p>
        </span>


        <h2>Users List</h2>


        <table class="table table-hover">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Full Name</th>
                <th>Remarks</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users">
                <td>{{user.firstname}}</td>
                <td>{{user.lastname}}</td>
                <td>{{fullname}}</td>
                <td>{{user.message}}:-</td>
            </tr>
            </tbody>
        </table>
    </div>

</template>
<script>

    import topBar from './topnav.vue';

    export default {
        name: 'list',
        data() {
            return {
                user: {
                    message: '',
                    firsname: '',
                    lastname: ''

                },
                users: []

            }

        },
        components: {
            topBar
        },
        computed:{
            fullname: function () {
                return this.user.firstname + this.user.lastname;

            }
        },
        methods: {
            addUser() {
                this.users.push(this.user);
                this.user={};

            }
        }
    }


</script>

<style>
    table {
        font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
        border-collapse: collapse;
        width: 80%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #008080;
    }

    .greenbody{
        background: green;
    }
</style>


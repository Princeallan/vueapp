import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        registrations: [],
        users: [
            {id: 1, name: 'Allan', registered: false},
            {id: 2, name: 'Max', registered: false},
            {id: 3, name: 'Vin', registered: false}
        ]
    },
    getters: {
        unregistereredUsers(state) {
            return state.users.filter(user => {
                return !user.registered;
            });
        },
        registrations(state) {
            return state.registrations;
        },
        totalRegistrations(state) {
            return state.registrations.length;
        }

    },
    mutations: {
        register(state){
            const date = new Date;
            this.registrations
            user.registered = true;
            return this.$store.state.registrations.push({
                userId: user.id,
                name: user.name,
                date: date.getMonth() + '/' + date.getDay()
            })
        }
    }
});
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '../components/about.vue'
import list from '../components/list.vue'
import blog from '../components/blog.vue'
import registrations from '../components/registrations.vue'
import registration from '../components/registration.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/about',
            name: 'About',
            component: about
        },
        {
            path: '/list',
            name: 'list',
            component: list
        },
        {
            path: '/blog',
            name: 'blog',
            component: blog
        },
        {
            path: '/registrations',
            name: 'registrations',
            component: registrations}
        // },
        // {
        //     path: '/registration',
        //     name: 'registration',
        //     component: registration
        // }


    ]}
)

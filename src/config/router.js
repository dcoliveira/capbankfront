import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminContas from '@/components/admin/AdminContas'
import Auth from '@/components/auth/Auth'


Vue.use(VueRouter)


const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminContas',
    path: '/admin',
    component: AdminContas,
    meta: { requiresAdmin: true }
},{
    name: 'auth',
    path: '/auth',
    component: Auth
}]
export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,

    routes
})

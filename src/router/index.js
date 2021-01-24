import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/auth/Login";
import Dashboard from "@/views/Dashboard";
import TodoList from "@/views/TodoList";
import Notes from "@/views/Notes";
import Contacts from "@/views/Contacts";
import Calendar from "@/views/Calendar";
import Registration from "@/views/auth/Registration";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/todo',
        name: 'Todo',
        component: TodoList
    },
    {
        path: '/notes',
        name: 'Notes',
        component: Notes
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: Calendar
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    },
]

const router = new VueRouter({
    routes
})

export default router

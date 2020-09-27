import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import GameDetailPage from '../views/GameDetailPage'
import GameReviewPage from '../views/GameReviewPage'
import RegisterPage from '../views/RegisterPage'
import SearchPage from '../views/SearchPage'
import FAQPage from '../views/FAQPage'
import ProfilePage from '../views/ProfilePage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/gamedetail/:slug',
        name: 'gamedetail',
        component: GameDetailPage
    },
    {
        path: '/gamereview/:slug',
        name: 'gamereview',
        component: GameReviewPage
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    },
    {
        path: '/search',
        name: 'search',
        component: SearchPage
    },
    {
        path: '/FAQ',
        name: 'FAQ',
        component: FAQPage
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfilePage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

    scrollBehavior() {
        return { x: 0, y: 0 };
    }
})

export default router;
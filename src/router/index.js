import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import GameDetailPage from '../views/GameDetailPage'
import GameReviewPage from '../views/GameReviewPage'
import RegisterPage from '../views/RegisterPage'
import SearchPage from '../views/SearchPage'
import FAQPage from '../views/FAQPage'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage   
    },
    {
        path: '/gamedetail',
        name: 'gamedetail',
        component: GameDetailPage
    },
    {
        path: '/gamereview',
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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
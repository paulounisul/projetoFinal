import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'

Vue.use( VueRouter )
// definir rotas 
const routes = [{
    name: 'home',
    path: '/',
    component: Home
},{
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
}]

//instanciar o Vue Router. Lembrar que router <- const criaad acom as rotas.
// const router = new VueRouter({
//     mode: 'history',
//     router: routes 
// })
// export default router 

//ou direto..

export default new VueRouter({
    mode:'history',
    routes
})

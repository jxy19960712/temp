import vueRouter from 'vue-router'
import entrance from './components/entrance/entrance.vue'
import cadreOverview from './components/cadreOverview/cadreOverview.vue'
import overviewCity from './components/cadreOverview/overviewCity/overviewCity.vue'
import overviewCountry  from './components/cadreOverview/overviewCountry/overviewCountry.vue'
import leadershipOverview  from './components/leadershipOverview/leadershipOverview.vue'



const routes = [{
    name: 'entrance',
    path: '/',
    component: entrance,
},{
    name: 'cadreOverview',
    path: '/cadreOverview',
    component: cadreOverview,
    children: [{
        name:'overviewCity',
        path:'overviewCity',
        component: overviewCity
    },{
        name: 'overviewCountry',
        path: 'overviewCountry',
        component: overviewCountry
    }]
},{
    name:'leadershipOverview',
    path:'/leadershipOverview',
    component:leadershipOverview
}]

const router = new vueRouter({
    routes,
    // mode:'history'
})

export default router

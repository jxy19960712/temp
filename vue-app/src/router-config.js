import vueRouter from 'vue-router'
import entrance from './components/entrance/entrance.vue'
import cadreOverview from './components/cadreOverview/cadreOverview.vue'
import overviewCity from './components/cadreOverview/overviewCity/overviewCity.vue'
import overviewCountry  from './components/cadreOverview/overviewCountry/overviewCountry.vue'
import leadershipOverview  from './components/leadershipOverview/leadershipOverview.vue'
import leadershipOverview2 from './components/leadershipOverview2/leadershipOverview2.vue'


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
},{
    name:'leadershipOverview2',
    path:'/leadershipOverview2',
    component:leadershipOverview2
}]

const router = new vueRouter({
    routes,
    // mode:'history'
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import companyList from '@/pages/CompanyList/index'
import miningRecord from '@/pages/miningRecord/index'
import moonMineralSchedule from '@/pages/moonMineralSchedule/index'
import roleList from '@/pages/roleList/index'
import skillStatistics from '@/pages/skillStatistics/index'
import spy from '@/pages/spy/index'
import management from '@/pages/Management'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'management',
      component: management,
      redirect:'/companyList',
      children:[
        {
          path: '/companyList',
          name: 'companyList',
          component: companyList
        }, {
          path: '/moonMineralSchedule',
          name: 'moonMineralSchedule',
          component: moonMineralSchedule
        }, {
          path: '/miningRecord',
          name: 'miningRecord',
          component: miningRecord
        }, {
          path: '/roleList',
          name: 'roleList',
          component: roleList
        }, {
          path: '/skillStatistics',
          name: 'skillStatistics',
          component: skillStatistics
        }, {
          path: '/spy',
          name: 'spy',
          component: spy
        },
      ]
    }
  ]
})

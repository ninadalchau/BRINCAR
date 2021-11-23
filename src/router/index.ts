import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  
  {
    path:'',
    component: () => import ('@/layout/full.vue'),
    children: [
      {
        path: '',
        component: () => import ('../views/home.vue')
      },
      {
        path: '/home',
        component: () => import ('../views/home.vue')
      },
      
      {
        path: '/configuracoes',
        component: () => import ('../views/configuracoes.vue')
      },

      {
        path: '/perfil',
        component: () => import ('../views/perfil.vue')
      },

      {
        path: '/editarPerfil',
        component: () => import ('../views/editarPerfil.vue')
      },

      {
        path: '/perfilCrianca',
        component: () => import ('../views/perfilCrianca.vue')
      },

      {
        path: '/perfilCriancaEnderecos',
        component: () => import ('../views/perfilCriancaEnderecos.vue')
      },

      {
        path: '/perfilCriancaMedidas',
        component: () => import ('../views/perfilCriancaMedidas.vue')
      },

      {
        path: '/perfilCriancaOcorrencias',
        component: () => import ('../views/perfilCriancaOcorrencias.vue')
      },
      {
        path: '/teste',
        component: () => import ('../views/teste.vue')
      },
      {
        path: '/perfilCriancaResponsavel',
        component: () => import ('../views/perfilCriancaResponsavel.vue')
      },
    ]
  },
  {
    path:'',
    component: () => import ('@/layout/blank.vue'),
    children: [
      {
        path: '/login',
        component: () => import ('../views/login.vue')
      },
      {
        path: '/cadastroConselheiro',
        component: () => import ('../views/cadastroConselheiro.vue')
      },
    ]
  },
  // {
  //   path: '/folder/:id',
  //   component: () => import ('../views/Folder.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Home from './components/Home';
import Componente from './components/Componente';
import Acercade from './components/Acercade';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
Vue.config.productionTip = false;
Vue.use(Router);
const routes=[
  {path:'/home',component:Home},
  {path:'/',component:Home},
  {path:'/listar',component:Componente},
  {path:'/acerca',component:Acercade},
];
const router=new Router({
  routes,
  mode:'history'
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

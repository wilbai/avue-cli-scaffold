/**
 * 全站路由配置
 *
 * meta参数说明
 * keepAlive是否缓冲页面
 * isTab是否加入到tag导航
 * isAuth是否需要授权
 */
import VueRouter from 'vue-router';
import PageRouter from './page/'
import ViewsRouter from './views/'
import AvueRouter from './avue-router';
import Store from '../store/';
export const createRouter = () => new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  },
  routes: [...PageRouter, ...ViewsRouter]
});
let Router = createRouter()
AvueRouter.install(Router, Store);
Router.$avueRouter.formatRoutes(Store.state.user.menuAll, true);
export function resetRouter () {
  const newRouter = createRouter()
  Router.matcher = newRouter.matcher // reset router
  AvueRouter.install(Router, Store);
}
export default Router;
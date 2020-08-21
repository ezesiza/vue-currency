const View = (resolve) => {
  require.ensure(['../components/view/View.vue'], () => {
    resolve(require('../components/view/View.vue'))
  })
}
const routes = [
  {
    path: '/',
    name: 'view',
    component: View
  }

]

export default routes

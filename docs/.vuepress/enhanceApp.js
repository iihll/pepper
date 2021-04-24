
import Pepper from '../../src/index'
import '../../packages/theme-chalk/src/index.less'

export default ({
  Vue,
  options,
  router,
  siteData,
  isServer
}) => {
  Vue.use(Pepper)
}

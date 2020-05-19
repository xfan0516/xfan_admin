import XHeader from './XHeader'
import XLayout from './XLayout/index.vue'
import XMenu from './XLayout/XMenu.vue'
import XContainer from './XContainer.vue'

const components = {
  XHeader,
  XLayout,
  XMenu,
  XContainer
}

const install = function (Vue) {
  if (install.installed) return;

  for (var k in components) {
    // console.log(k)
    Vue.component(k, components[k]);
  }
  // Vue.prototype.$Message = Message
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  install,
};
export default Object.assign(API, components)
// module.exports.default = module.exports = components
import Waterfall from './components/waterfall.vue'

Waterfall.install = function(Vue) {
    Vue.component(Waterfall.name, Waterfall)
}

const components = [
    Waterfall
]

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}

export {
    Waterfall
}

export default {
    install,
    Waterfall
}
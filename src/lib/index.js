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

export default {
    install,
    Waterfall
}
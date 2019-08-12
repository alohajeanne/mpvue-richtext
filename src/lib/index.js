import mpvueRichText from './mpvueRichText.vue'
const component = {
    install (Vue, options) {
        Vue.component(mpvueRichText.name, mpvueRichText)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(paykeyboard);
}
export default component
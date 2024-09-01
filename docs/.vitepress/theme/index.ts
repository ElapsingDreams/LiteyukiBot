import DefaultTheme from 'vitepress/theme'
import './liteyuki.css'

import StatsBar from '../../components/StatsBar.vue'



export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('StatsBar', StatsBar)
    },
    Layout: StatsBar
}
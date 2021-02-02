import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import './scss/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb,faHandPointRight, faListAlt, faDesktop, faUser, faComment, faEnvelope, faHome, faFileDownload, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faLightbulb,
  faHandPointRight,
  faListAlt,
  faDesktop,
  faCode,
  faEnvelope,
  faUser,
  faHome,
  faComment,
  faFileDownload,
  faDatabase,
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
  faTwitterSquare,
  )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

var app = new Vue({
  el: "#app",
  store,
  render: h => h(App),
  data: {
    theme: "light"
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme;
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    }
  }
});

export default app;
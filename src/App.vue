<template>
  <div id="app">
    <Home/>
    <div class="green_bg menu">
      <nav class="main-nav">
        <Theme/>
        <Burger></Burger>
      </nav>
      <Sidebar>
        <ul class="sidebar-panel-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about-us">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Sidebar>
    </div>
    <About/>
    <Education/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home.vue';
const About =  () => import('./components/About.vue'); //lazy loading component
const Education = () => import('./components/Education.vue');
const Projects = () => import('./components/Projects.vue');
const Contact = () => import('./components/Contact.vue');

import Footer from './components/Footer.vue';
import Burger from "./components/Menu/Burger.vue";
import Sidebar from "./components/Menu/Sidebar.vue";
import Theme from "./components/Menu/Theme.vue";

export default {
  name: 'App',
  components: {
    Home,
    Theme,
    About,
    Education,
    Projects,
    Contact,
    Footer,
    Burger,
    Sidebar,
  },
}

</script>

<style  lang="scss">

.menu {
  position: -webkit-sticky;
  position: sticky;
  top:0;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>



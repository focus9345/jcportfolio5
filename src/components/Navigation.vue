<template>
    <nav class="alt_bg">
        <button class="icon"><font-awesome-icon class="icon-color menu" icon="list-alt" /> Menu</button>
        <scrollactive class="my-nav" active-class="active" :offset="80" :duration="800" bezier-easing-value=".5,0,.35,1">
            <a href="#home" class="scrollactive-item">Home</a>
            <a href="#about-us" class="scrollactive-item">About Us</a>
            <a href="#projects" class="scrollactive-item">Projects</a>
            <a href="#contact" class="scrollactive-item">Contact</a>
        </scrollactive>
        <button @click="toggleTheme" class="icon theme-mode"><font-awesome-icon class="icon-color" icon="lightbulb" /></button>
    </nav>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      theme: 'light' // default theme to use when the site is first loaded
    }
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme // this is where the magic happens
    } // the `dataset.theme` is the data-theme attribute I set in my SCSS file (highlighted above)
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light' // switch themes based on current value of `this.theme`
    }
  }
}
</script>

<style lang="scss">
  nav {
    padding: 10px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .my-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .scrollactive-item {
      display:block;
      padding: 10px 5px;
    }
  }
</style>
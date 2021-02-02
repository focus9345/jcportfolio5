<template>
    <button @click="toggleTheme" class="icon bright-txt"><font-awesome-icon icon="lightbulb" /></button>
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


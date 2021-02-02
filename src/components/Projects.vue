<template>
    <section id="projects" class="full_height">
      <h2>Projects</h2>
      <div class="container">
        <div class="card alt_bdr alt_bg">
          <h3>Inside Southern Arts and Science</h3>
          <p><em>Jan. 2020</em><br />
          <strong>Stack:</strong> html, css, javascript, bootstrap, drupal
          </p>
          <a class="btn">Info</a>
          <a class="btn" href="#">Demo</a>
          <button @click="toggleNav()">Toggle</button>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  methods: {
    toggleNav () {
      this.$parent.$emit('toggleNav')
    }
  }
}
</script>

<style lang="scss" scoped>

  .card {
    border-style: solid;
    border-width: 1px;
    border-radius: 1em;
    width: 28%;
    text-align: center;
    padding: 1.6% 1%;
    margin-bottom: 1.5em;
  }
</style>
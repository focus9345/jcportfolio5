<template>
    <section id="projects" class="full_height patterned">
      <h2>Projects</h2>
      <div class="container">
        <div class="card alt_bdr alt_bg">
          <h3>Inside Southern Arts and Science</h3>
          <time datetime="2020-01-15">Janurary 2020</time>
          <p><strong>Stack:</strong> html, css, javascript, bootstrap, drupal
          </p>
          <footer>
          <a class="btn" href="#">Info</a>
          <button @click="toggleNav()" class="btn">Toggle</button>
          </footer>
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
 .patterned {
   background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="18" viewBox="0 0 100 18"%3E%3Cpath fill="%239C92AC" fill-opacity="0.1" d="M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z"%3E%3C/path%3E%3C/svg%3E');
 }
  .card {
    border-style: solid;
    border-width: 1px;
    border-radius: 1em;
    width: 28%;
    text-align: center;
    padding: 1.6% 1%;
    margin-bottom: 1.5em;

    h3 {
      margin:.75em 0 .25em;
      padding:0;
    }
    time {
      font-size: 0.8em;
      font-style: italic;
    }
    p {
      margin: 0.25em 0 0.5em;
    }
    .btn {
      display: inline-block;
      margin: 0.5em;
      padding: 0.85em 1.85em;
      width:auto;
    }
    footer {
      margin:0.25em 0;
      padding:0;
    }
  }
</style>
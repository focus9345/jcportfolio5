<template>
    <aside :class="{ active: active}">
      <h3>Project Title</h3>
      <img src="https://via.placeholder.com/200">
      <p>Description here</p>
      <p>Technology</p>
    </aside>
</template>

<script>
export default {
    mounted () {
    this.$parent.$on('toggleNav', () => {
      console.log('received')
      this.active = !this.active
    })
  }
}
</script>

<style scoped>

</style>
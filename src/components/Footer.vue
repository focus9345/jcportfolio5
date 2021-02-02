<template>
  <footer class="footer">
          
          
          <div class="col">
            <p>Copyright &copy; {{ new Date().getFullYear().toLocaleString().replace(/,/g, "") }} Joshua Connor | <a id="show-modal" @click="showModal = true"> Privacy Policy</a></p>
          </div>

          <modal v-if="showModal" @close="showModal = false">
          </modal>

    </footer>  
</template>

<script>
import modal from './Items/privacypolicy';

export default {
  data:  function () {
      return {
        showModal: false,
      }
  },
  components: {
    modal
 }
}
</script>


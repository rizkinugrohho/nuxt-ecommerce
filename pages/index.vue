<template>
  <div class="mr-custom mb-5">
    <div class="fade-in">
      <!-- slider -->
      <Slider />
      <!-- end slider -->
    </div>
  </div>
</template>
<script>
// import slider
import Slider from '@/components/web/slider.vue'
export default {
  // register components
  components: {
    Slider
  },
  // meta
  head() {
    return {
      title: 'SHOE STORE - Official Indonesia SHOES Distributor',
      meta: [{
        hid: 'og:title',
        name: 'og:title',
        content: 'SHOE STORE - Official Indonesia SHOES Distributor'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'SHOE STORE - Official Indonesia SHOES Distributor'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/images/logo.png'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Official Online Store Selling Shoe Products'
      },
      ]
    }
  },
}
</script>
<style></style>
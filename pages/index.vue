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
      title: 'MI STORE - Distributor Xiaomi Indonesia Resmi',
      meta: [{
        hid: 'og:title',
        name: 'og:title',
        content: 'MI STORE - Distributor Xiaomi Indonesia Resmi'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'MI STORE - Distributor Xiaomi Indonesia Resmi'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/images/logo.png'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Official Toko Online Penjualan Produk Xiaomi'
      },
      ]
    }
  },
}
</script>
<style></style>
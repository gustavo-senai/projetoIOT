<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

</script>
<template>
  <Navbar />
  <div class="container-fluid current-page">
    <RouterView />
  </div>
  <Footer />
</template>
<style>
body {
    background-image: url('assets/img/background.jpg'); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
}
</style>
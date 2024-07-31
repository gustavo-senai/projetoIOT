<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import PaginaInicial from '@/components/paginaInicial/PaginaInicial.vue'

</script>
<template>
  <Navbar />
  <div class="container-fluid current-page">
    <PaginaInicial />
  </div>
  <Footer />
</template>

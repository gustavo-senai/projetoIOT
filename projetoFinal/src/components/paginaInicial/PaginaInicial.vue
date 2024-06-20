<script setup lang="ts">
import CardAtivar from '@/components/paginaInicial/CardAtivar.vue'
import GraficoInicial from '../GraficoInicial.vue'
</script>
<template>
  <div class="container text-center">
    <div class="row row-cols-2 p-2">
      <div class="col"><CardAtivar /></div>
      <div class="col"><GraficoInicial /></div>
    </div>
  </div>
</template>

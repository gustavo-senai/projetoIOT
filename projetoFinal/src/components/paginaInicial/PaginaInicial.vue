<script setup lang="ts">
import CardAtivar from '@/components/paginaInicial/CardAtivar.vue'
import GraficoInicial from '../GraficoInicial.vue'
import UmidadeAtual from '../UmidadeAtual.vue'
</script>
<template>
  <div class="container-fluid text-center">
    <div class="row row-cols-2 p-2">
      <div class="col-3">
        <CardAtivar class="my-5" />
        <UmidadeAtual />
      </div>
      <div class="col my-5">
        <GraficoInicial />
      </div>
    </div>
  </div>
</template>

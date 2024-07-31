<script setup lang="ts">
import CardAtivar from '@/components/paginaInicial/CardAtivar.vue'
import GraficoInicial from '../GraficoInicial.vue'
import UmidadeAtual from '../UmidadeAtual.vue'
</script>
<template>
  <div class="container">
    <div class="left-page">
        <CardAtivar />
        <UmidadeAtual />
    </div>
      <div class="chart">
        <GraficoInicial />
      </div>
    </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  background-color: #C4D3BE;
  margin: 0;
  padding: 0;
}
.left-page {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.chart {
  display: flex;
}
</style>
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
  background-color: #c4d3be;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh; /* Make sure the container covers the full viewport height */
}

.left-page, .chart {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.left-page {
  flex: 1 1 auto; /* Flex property to distribute space */
}

.chart {
  flex: 1 1 auto; /* Adjust as needed to give the chart more space */
}
</style>

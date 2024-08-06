<script setup lang="ts">
import CardAtivar from '@/components/paginaInicial/CardAtivar.vue'
import GraficoInicial from '../GraficoInicial.vue'
import UmidadeAtual from '../UmidadeAtual.vue'
</script>

<template>
  <div class="contaainer">
    <div class="left-page">
      <CardAtivar class="ativar" />
      <UmidadeAtual />
    </div>
    <div class="chart">
      <GraficoInicial />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contaainer {
  display: flex;
  flex-direction: row;
  background-color: #c4d3be;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 90vh;
}

.left-page,
.chart {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.left-page {
  flex: 1 1 auto;
}

.chart {
  flex: 1 0 auto;
}
</style>

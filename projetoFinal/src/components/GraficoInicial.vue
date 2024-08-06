<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import http from '@/http'
import getDates from '@/util/date'

const humidityHistory: number[] = []
const daysNum = 5

onBeforeMount(async () => {
  for (let i = 1; i <= daysNum; i++) {
    try {
      const response = await http.get('period=WEEK&granularityType=DAILY&output=JSON&pin=V0')
      humidityHistory.unshift(response.data)
    } catch (error) {
      console.error('Error fetching value:', error)
    }
  }
})
const options = ref({
  chart: {
    id: 'vuechart-example',
    background: '#1B3B12',
    foreColor: '#C4D3BE'
  },
  xaxis: {
    categories: getDates(daysNum)
  },
  title: {
    text: 'Historico de umidade',
    align: 'center',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: true,
    style: {
      fontSize: '18px',
      fontWeight: 'bold',
      fontFamily: undefined,
      color: '#C4D3BE'
    }
  },
  colors: '#C4D3BE'
})
const series = computed(() => [
  {
    data: humidityHistory
  }
])
</script>
<template>
  <div class="container">
    <apexchart type="bar" :options="options" :series="series" class="chart" />
  </div>
</template>
<style scoped lang="scss">
.chart {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

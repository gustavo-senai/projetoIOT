<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import getDates from '@/util/date'
import axios from "axios";
import http from "@/http";

const humidityHistory: number[] = []
const daysNum = 5
const umidade = ref()

onBeforeMount(async () => {
    try {
      // const response = await axios.get('https://ny3.blynk.cloud/external/api/data/get?token=2Mqfk3a3xe8JprDv8OaFTjiaB-IpYrxm&period=WEEK&granularityType=DAILY&output=JSON&pin=V0')
      // humidityHistory.unshift(response.data.value)
      // console.log(response.data)
      const response = await http.get('&pin=V0')
      umidade.value = response.data
    } catch (error) {
      console.error('Error fetching value:', error)
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
    data: [umidade.value, 32, 100, 94, 87]
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

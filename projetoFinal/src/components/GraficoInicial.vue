<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import http from '@/http'
import getDates from '@/util/date'

const humidityHistory = []

onMounted(async () => {
  try {
    const response = await http.get('&pin=V0')
    humidityHistory.push(response.data)
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
    categories: getDates(5)
  },
  colors: '#C4D3BE'
})
const series = computed(() => [
  {
    data: [40, 20 ,30]
  }
])
</script>
<template>
  <div class="container-fluid">
    <div class="card text-center">
      <apexchart type="bar" :options="options" :series="series"></apexchart>
    </div>
  </div>
</template>

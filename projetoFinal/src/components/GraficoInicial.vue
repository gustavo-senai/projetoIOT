<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import http from '@/http'

const umidade = ref()

onMounted(async () => {
  try {
    const response = await http.get('&pin=V0')
    umidade.value = response.data
    console.log(umidade.value)
  } catch (error) {
    console.error('Error fetching value:', error)
  }
})
const options = ref({
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: ['26/06', '27/06', '28/06', '29/06', '30/06', '01/07']
  }
})
const series = computed(() => [
  {
    data: [100, 100, 90, 90, 100, umidade.value]
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

<script setup lang="ts">
import http from '@/http'
import { onMounted, ref } from 'vue'

const umidade = ref()
const imagem = ref('')

const fetchUmidade = async () => {
  try {
    const response = await http.get('&pin=V0')
    umidade.value = response.data
  } catch (error) {
    console.error('Error fetching value:', error)
  }
  if (umidade.value <= 50) {
    imagem.value = '/src/assets/img/solo1.png'
  } else if (umidade.value > 50 && umidade.value <= 70) {
    imagem.value = '/src/assets/img/solo2.png'
  } else if (umidade.value > 70 && umidade.value <= 80) {
    imagem.value = '/src/assets/img/solo3.png'
  } else {
    imagem.value = '/src/assets/img/solo4.png'
  }
}
onMounted(async () => {
  fetchUmidade()
  setInterval(fetchUmidade, 30000)
})
</script>

<template>
  <div class="container">
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title text-success">Umidade Atual</h5>
        <p class="text-warning">{{ umidade }}%</p>
        <img :src="imagem" alt="" style="height: 12.5rem" />
      </div>
    </div>
  </div>
</template>

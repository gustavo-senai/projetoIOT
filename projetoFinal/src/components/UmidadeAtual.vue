<script setup lang="ts">
import http from '@/http';
import { onMounted, ref } from 'vue'

const umidade = ref()
const imagem = ref('')

onMounted(async () => {
  try {
    const response = await http.get('&pin=V0')
    umidade.value = response.data

  } catch (error) {
    console.error('Error fetching value:', error)
  }
})
switch (umidade.value) {
  case 1:
    imagem.value = '/src/assets/img/solo1.png'
    break
  case 2:
    imagem.value = '/src/assets/img/solo2.png'
    break
  case 3:
    imagem.value = '/src/assets/img/solo3.png'
    break
  case 4:
    imagem.value = '/src/assets/img/solo4.png'
    break
}
</script>

<template>
  <div class="container">
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title text-success">Umidade Atual</h5>
        <p class="text-warning">{{ umidade }}</p>
        <img :src="imagem" alt="" style="height: 12.5rem;" />
      </div>
    </div>
  </div>
</template>

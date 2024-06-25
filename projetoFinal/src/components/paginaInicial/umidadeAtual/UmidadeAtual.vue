<script setup lang="ts">
import { ref } from 'vue'

const umidade = ref(1)
const imagem = ref('')

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
        <img :src="imagem" alt="" style="height: 12.5rem; width: 80%;" />
      </div>
    </div>
  </div>
</template>

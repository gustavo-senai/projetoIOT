<script setup lang="ts">
import { ref } from 'vue'

const umidade = ref(4)

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
  <div class="card text-center" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Umidade Atual</h5>
      <span>{{ umidade }}</span>
      <img :src="imagem" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/http/index'
import axios from 'axios'

const bomba = ref<number>()
const estadoAtual = ref('')
const buttonText = ref('')

onMounted(async () => {
  try {
    const response = await http.get('&pin=V1')
    bomba.value = response.data
    if (bomba.value == 1) {
      estadoAtual.value = 'Ligado'
      buttonText.value = 'Desligar'
    } else {
      estadoAtual.value = 'Desligado'
      buttonText.value = 'Ativar'
    }
  } catch (error) {
    console.error('Error fetching value:', error)
  }
})
async function buttonClick() {
  if (bomba.value == 1) {
    try {
      bomba.value = 0

      await axios.get(
        'https://ny3.blynk.cloud/external/api/update?token=2Mqfk3a3xe8JprDv8OaFTjiaB-IpYrxm&V1=0'
      )
      estadoAtual.value = 'Ligado'
      buttonText.value = 'Desligar'
    } catch (error) {
      console.error('Error updating value:', error)
    }
  } else {
    try {
      bomba.value = 1

      await axios.get(
        'https://ny3.blynk.cloud/external/api/update?token=2Mqfk3a3xe8JprDv8OaFTjiaB-IpYrxm&V1=1'
      )
      estadoAtual.value = 'Desligado'
      buttonText.value = 'Ativar'
    } catch (error) {
      console.error('Error updating value:', error)
    }
  }
}
</script>

<template>
    <div class="card text-center card-ativar mb-3" style="width: 18rem">
      <div class="card-body">
        <h6 class="card-title text-light">Ativar bomba</h6>
        <p class="card-title text-light">Estado atual: {{ estadoAtual }}</p>
        <button type="button" class="btn btn-light" @click="buttonClick()">
          {{ buttonText }}
        </button>
      </div>
    </div>
</template>
<style scoped lang="scss">
.card-ativar {
  background-color: #0a615b;
}
</style>

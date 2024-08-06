<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/http/index'
import axios from 'axios'

const bomba = ref<number>()
const buttonText = ref('')

onMounted(async () => {
  try {
    const response = await http.get('&pin=V1')
    bomba.value = response.data
    if (bomba.value == 1) {
      buttonText.value = '../../assets/img/regador.png'
    } else {
      buttonText.value = '../../assets/img/regador.png'
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
      buttonText.value = '../../assets/img/regador.png'
    } catch (error) {
      console.error('Error updating value:', error)
    }
  } else {
    try {
      bomba.value = 1

      await axios.get(
        'https://ny3.blynk.cloud/external/api/update?token=2Mqfk3a3xe8JprDv8OaFTjiaB-IpYrxm&V1=1'
      )
      buttonText.value = '../../assets/img/regador.png'
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
      <button type="button" class="btn btn-light" @click="buttonClick()">
        <img :src="buttonText" style="height: 50px;">
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-ativar {
  background-color: #0a615b;
}
</style>

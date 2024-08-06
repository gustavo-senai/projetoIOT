<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/http/index'
import axios from 'axios'

const bomba = ref<number>()
const buttonText = ref(true)

const defuseBomb = async () => {
  try {
    bomba.value = 0

    await axios.get(
      'https://ny3.blynk.cloud/external/api/update?token=2Mqfk3a3xe8JprDv8OaFTjiaB-IpYrxm&V1=0'
    )
    buttonText.value = true
  } catch (error) {
    console.error('Error updating value:', error)
  }
}
onMounted(async () => {
  try {
    const response = await http.get('&pin=V1')
    bomba.value = response.data
    if (bomba.value == 1) {
      buttonText.value = false
    } else {
      buttonText.value = true
    }
  } catch (error) {
    console.error('Error fetching value:', error)
  }
})
async function buttonClick() {
  if (bomba.value == 1) {
    setInterval(defuseBomb, 10000)
  } else {
    try {
      bomba.value = 1

      await axios.get(
        'https://ny3.blynk.cloud/external/api/update?token=2Mqfk3a3xe8JprDv8OaFTjiaB-IpYrxm&V1=1'
      )
      buttonText.value = false
    } catch (error) {
      console.error('Error updating value:', error)
    }
  }
}
</script>

<template>
  <div class="card text-center card-ativar mb-5" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title text-light pb-3">Ativar regador</h5>
      <button type="button" class="btn btn-light" @click="buttonClick()">
        <img
          v-if="buttonText"
          src="../../assets/img/regador.png"
          alt="regador"
          style="height: 50px"
        />
        <img v-else src="../../assets/img/regador.gif" alt="regador" style="height: 50px" />
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card-ativar {
  background-color: #1b3b12;
  border-radius: 20px;
  padding-bottom: 20px;
}
</style>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type Bomba from '@/interfaces/Bomba'
import http from '@/http/index';

// Define a reactive reference for bomba
const bomba = ref<Bomba>()

// Fetch the current value when the component is mounted
onMounted(async () => {
  try {
    const response = await http.get('&pin=V1')
    bomba.value = response.data

    console.log('Current value:', bomba.value)
  } catch (error) {
    console.error('Error fetching value:', error)
  }
})

function buttonClick() {
  watch(
    () => bomba.value?.value,
    async (newValue) => {
      if (newValue === 1 && bomba.value) {
        try {
          // Update the value from 1 to 0
          bomba.value.value = 0

          // Send the updated value back to the ESP
          await requestBomba.post('update?pin=V1', { value: bomba.value.value })

          console.log('Updated value sent:', bomba.value.value)
        } catch (error) {
          console.error('Error updating value:', error)
        }
      }
    }
  )
}
</script>

<template>
  <div class="container-fluid">
    <div class="card text-center text-bg-info mb-3" style="width: 18rem; margin: auto">
      <div class="card-body">
        <h5 class="card-title text-light">Ativar bomba</h5>
        <button type="button" class="btn btn-light text-info" @click="buttonClick()">Ativar</button>
      </div>
    </div>
  </div>
</template>

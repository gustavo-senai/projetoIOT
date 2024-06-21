<script setup lang="ts">
function buttonClick() {
  const confirmacao = confirm("Deseja ativar a bomba de água manualmente?")
  if(confirmacao) {
    alert("Bomba de água ativada")
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="card text-center text-bg-info mb-3" style="width: 18rem; margin: auto;">
      <div class="card-body">
        <h5 class="card-title text-light">Ativar bomba</h5>
        <button type="button" class="btn btn-light text-info" @click="buttonClick()">Ativar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ButtonProps } from '@/components/button/types'

const props = defineProps<ButtonProps>()
</script>
<template>
  <input :type="props.type" :value="props.value" />
</template>

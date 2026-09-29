<script setup lang="ts">
type Item = {
  id: number,
  x: number,
  y: number,
  closed: boolean,
}

const props = defineProps<{item: Item, isCharacter: boolean}>()
const bgColor = computed(() => {
  if(props.isCharacter) return 'bg-red-500'
  if(props.item.closed) return 'bg-gray-600'
  else return 'bg-blue-500'
})
</script>

<template>
  <div class="border flex items-center justify-center aspect-square" :class="bgColor"></div>
</template>

<style scoped>

</style>
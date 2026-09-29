<script setup lang="ts">
import { useCharacter } from "~/composables/useCharacter.ts";

const { data } = useFetch('/api/generateMap')

const gridStyle = computed(() => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${data.value?.meta.width}, 72px)`,
}))

const { charCoords, move } = useCharacter(data)
useKeys({
  h: () => move(-1, 0),
  l: () => move(1, 0),
  j: () => move(0, 1),
  k: () => move(0, -1),
})
</script>

<template>
  <div class="p-8 w-full min-h-screen flex justify-center items-center">
    <div :style="gridStyle" v-if="data?.data">
      <grid-cell
          v-for="item of data?.data"
          :item="item"
          :is-character="charCoords.x === item.x && charCoords.y === item.y"
          :finish="item.id === data.meta.finish"/>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import CharacterImage from '~/assets/images/character.png';
type Item = {
  id: number;
  x: number;
  y: number;
  closed: boolean;
};

const props = defineProps<{ item: Item; isCharacter: boolean; finish: boolean }>();
const bgColor = computed(() => {
  // if (props.isCharacter) return 'bg-green-800';
  if (props.item.closed) return 'bg-gray-600';
  if (props.finish) return 'bg-red-500';
  else return 'bg-green-600';
});
function randomLetter() {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * letters.length);
  return letters[randomIndex];
}
</script>

<template>
  <div class="flex aspect-square items-center justify-center border text-2xl" :class="bgColor">
    <template v-if="item.closed">{{ randomLetter() }}</template>
    <template v-if="isCharacter"><img :src="CharacterImage" alt="V" /></template>
  </div>
</template>

<style scoped></style>

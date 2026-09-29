import { ref } from 'vue';

// useCharacter.ts
export function useCharacter(data: Ref<any | null>) {
  const router = useRouter();
  const charCoords = ref({ x: 0, y: 0 });
  const steps = ref<number>(0);
  const closedCells = computed(() => {
    const res = new Set();
    for (const item of data.value.data) {
      if (item.closed) res.add(`${item.x}-${item.y}`);
    }
    return res;
  });
  function move(dx: number, dy: number) {
    steps.value++;
    const meta = data.value?.meta;
    if (!meta) return;

    const targetX = charCoords.value.x + dx;
    const targetY = charCoords.value.y + dy;

    if (targetX < 0 || targetX >= meta.width) return;
    if (targetY < 0 || targetY >= meta.height) return;
    if (closedCells.value.has(`${targetX}-${targetY}`)) return;
    charCoords.value.x = targetX;
    charCoords.value.y = targetY;
  }

  const finish = computed(() => {
    return data.value?.data?.find((c) => c.id === data.value.meta.finish);
  });
  watch(
    () => charCoords.value,
    () => {
      if (charCoords.value.x === finish.value?.x && charCoords.value.y === finish.value?.y) {
        alert(`You won for ${steps.value} steps!`);
        steps.value = 0;
        router.push({ path: '/' });
      }
    },
    { deep: true, immediate: true }
  );
  return { charCoords, move };
}

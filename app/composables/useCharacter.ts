import { ref } from 'vue'

// useCharacter.ts
export function useCharacter(data: Ref<any | null>) {
    const charCoords = ref({ x: 0, y: 0 })

    function move(dx: number, dy: number) {
        const meta = data.value?.meta
        if (!meta) return

        const targetX = charCoords.value.x + dx
        const targetY = charCoords.value.y + dy

        if (targetX < 0 || targetX >= meta.width) return
        if (targetY < 0 || targetY >= meta.height) return

        charCoords.value.x = targetX
        charCoords.value.y = targetY
    }

    const finish = computed(() => {
        return data.value?.data?.find((c) => c.id === data.value.meta.finish)
    })
    watch(charCoords, () => {
        if (charCoords.value.x === finish.value?.x &&
            charCoords.value.y === finish.value?.y) {
            console.log('FINISHED!')
        }
    }, { deep: true, immediate: true })
    return { charCoords, move }
}
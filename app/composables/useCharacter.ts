export const useCharacter = () => {
    // координаты персонажа
    const charCoords = ref({
        x: 3,
        y: 5,
    })

    return { charCoords }
}
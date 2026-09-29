import { onMounted, onBeforeUnmount } from 'vue';

export function useKeys(map: Record<string, () => void>) {
  function handle(e: KeyboardEvent) {
    const key = e.key.toLowerCase();
    const action = map[key];
    if (action) {
      e.preventDefault();
      action();
    }
  }

  onMounted(() => window.addEventListener('keydown', handle));
  onBeforeUnmount(() => window.removeEventListener('keydown', handle));
}

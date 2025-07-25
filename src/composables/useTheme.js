import { ref, computed, watch } from 'vue'

const isDark = ref(false)

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
  isDark.value = savedTheme === 'dark'
} else {
  // Check system preference
  isDark.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  const theme = computed(() => isDark.value ? 'dark' : 'light')

  // Watch for theme changes and update localStorage and document class
  watch(isDark, (newValue) => {
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', newValue ? 'dark' : 'light')
  }, { immediate: true })

  // Listen for system theme changes
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        isDark.value = e.matches
      }
    })
  }

  return {
    isDark,
    theme,
    toggleTheme
  }
} 
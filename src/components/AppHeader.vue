<template>
  <header class="header">
    <div class="header-background"></div>
    <div class="header-content">
      <div class="header-top">
        <div class="header-info">
          <h1>🇧🇷 מדריך טיול ברזיל</h1>
          <p>אוקטובר 2025 • כמעט חודש של חוויות בלתי נשכחות</p>
        </div>
        <button 
          class="theme-toggle" 
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <div class="toggle-track">
            <div class="toggle-thumb" :class="{ 'toggle-thumb--dark': isDark }">
              <i :class="isDark ? 'fas fa-moon' : 'fas fa-sun'"></i>
            </div>
          </div>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { useTheme } from '../composables/useTheme.js'

export default {
  name: 'AppHeader',
  setup() {
    const { isDark, toggleTheme } = useTheme()
    
    return {
      isDark,
      toggleTheme
    }
  }
}
</script>

<style scoped>
.header {
  background: var(--gradient-primary);
  color: var(--text-inverse);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20"><defs><radialGradient id="a" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(255,255,255,.1)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient></defs><circle cx="10" cy="10" r="10" fill="url(%23a)"><animate attributeName="cx" values="10;90;10" dur="10s" repeatCount="indefinite"/></circle><circle cx="50" cy="5" r="5" fill="url(%23a)"><animate attributeName="cx" values="50;20;80;50" dur="8s" repeatCount="indefinite"/></circle></svg>') repeat;
  opacity: 0.2;
}

.header-content {
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.header-info {
  flex: 1;
  text-align: center;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
  background: linear-gradient(135deg, #ffffff, #f0f9ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header p {
  font-size: 1.25rem;
  opacity: 0.95;
  font-weight: 500;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.2);
}

/* Theme Toggle Button */
.theme-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: var(--shadow-lg);
  min-width: 80px;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.theme-toggle:focus {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}

.toggle-track {
  width: 60px;
  height: 30px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  position: relative;
  transition: all 0.3s ease;
}

.toggle-thumb {
  width: 26px;
  height: 26px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.toggle-thumb--dark {
  transform: translateX(30px);
  background: linear-gradient(135deg, #6366f1, #4f46e5);
}

.toggle-thumb i {
  font-size: 0.75rem;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .header {
    padding: 1.5rem 1rem;
  }
  
  .header-top {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .header-info {
    text-align: center;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .header p {
    font-size: 1.125rem;
  }
  
  .theme-toggle {
    align-self: center;
  }
}

@media (max-width: 480px) {
  .header h1 {
    font-size: 1.75rem;
  }
  
  .header p {
    font-size: 1rem;
  }
}
</style> 
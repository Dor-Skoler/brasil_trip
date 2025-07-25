<template>
  <div class="tabs-container">
    <div class="tabs">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        class="tab" 
        :class="{ active: activeTab === tab.id }"
        @click="$emit('tab-change', tab.id)"
      >
        <i :class="tab.icon"></i>
        <span>{{ tab.name }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    activeTab: {
      type: String,
      required: true
    }
  },
  emits: ['tab-change']
}
</script>

<style scoped>
.tabs-container {
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: var(--shadow-lg);
}

.tabs {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.tabs::-webkit-scrollbar {
  display: none;
}

.tab {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  position: relative;
  font-size: 0.875rem;
  font-weight: 500;
  min-width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 12px 12px 0 0;
  margin: 0 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tab:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  transform: translateY(-2px);
}

.tab.active {
  background: var(--bg-primary);
  color: var(--primary-color);
  box-shadow: var(--shadow-lg);
  font-weight: 600;
  border: 1px solid var(--border-color);
  border-bottom: 1px solid var(--bg-primary);
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 2px 2px 0 0;
}

.tab i {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.tab:hover i {
  transform: scale(1.1);
}

.tab.active i {
  color: var(--primary-color);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .tabs {
    padding: 0 0.5rem;
  }
  
  .tab {
    flex: 1;
    min-width: 100px;
    padding: 1rem 0.75rem;
    font-size: 0.8rem;
    margin: 0 0.125rem;
  }
  
  .tab span {
    display: none;
  }
  
  .tab i {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .tab {
    padding: 0.875rem 0.5rem;
    min-width: 80px;
  }
  
  .tab i {
    font-size: 1rem;
  }
}
</style> 
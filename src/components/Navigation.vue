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
        {{ tab.name }}
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
  background: #2c3e50;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.tabs {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.tabs::-webkit-scrollbar {
  display: none;
}

.tab {
  background: transparent;
  border: none;
  color: white;
  padding: 1.2rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  font-size: 1rem;
  font-weight: 500;
  min-width: fit-content;
}

.tab:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-2px);
}

.tab.active {
  background: #3498db;
  color: white;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}

.tab i {
  margin-left: 0.5rem;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .tabs {
    flex-wrap: wrap;
  }
  
  .tab {
    flex: 1;
    min-width: 120px;
    padding: 1rem;
    font-size: 0.9rem;
  }
}
</style> 
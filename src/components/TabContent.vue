<template>
  <div class="tab-content-container">
    <!-- Timeline Tab -->
    <TimelineTab 
      v-if="activeTab === 'timeline'" 
      :timeline-items="timelineItems" 
      class="tab-content"
    />
    
    <!-- Map Tab -->
    <MapTab 
      v-if="activeTab === 'map'" 
      :locations="locations"
      :selected-location-info="selectedLocationInfo"
      @location-selected="$emit('location-selected', $event)"
      class="tab-content"
    />
    
    <!-- Other Tabs -->
    <FlightsTab v-if="activeTab === 'flights'" class="tab-content" />
    <HotelsTab v-if="activeTab === 'hotels'" class="tab-content" />
    <TransportTab v-if="activeTab === 'transport'" class="tab-content" />
    <WeatherTab v-if="activeTab === 'weather'" class="tab-content" />
    <BudgetTab v-if="activeTab === 'budget'" class="tab-content" />
    <BackupTab v-if="activeTab === 'backup'" class="tab-content" />
  </div>
</template>

<script>
import TimelineTab from './tabs/TimelineTab.vue'
import MapTab from './tabs/MapTab.vue'
import FlightsTab from './tabs/FlightsTab.vue'
import HotelsTab from './tabs/HotelsTab.vue'
import TransportTab from './tabs/TransportTab.vue'
import WeatherTab from './tabs/WeatherTab.vue'
import BudgetTab from './tabs/BudgetTab.vue'
import BackupTab from './tabs/BackupTab.vue'

export default {
  name: 'TabContent',
  components: {
    TimelineTab,
    MapTab,
    FlightsTab,
    HotelsTab,
    TransportTab,
    WeatherTab,
    BudgetTab,
    BackupTab
  },
  props: {
    activeTab: {
      type: String,
      required: true
    },
    timelineItems: {
      type: Array,
      required: true
    },
    locations: {
      type: Array,
      required: true
    },
    selectedLocationInfo: {
      type: Object,
      default: null
    }
  },
  emits: ['location-selected']
}
</script>

<style scoped>
.tab-content-container {
  max-width: 1400px;
  margin: 0 auto;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-2xl);
  border-radius: 0 0 24px 24px;
  overflow: hidden;
  min-height: 600px;
  position: relative;
}

.tab-content-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
}

.tab-content {
  animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .tab-content-container {
    border-radius: 0 0 20px 20px;
    min-height: 500px;
  }
}

@media (max-width: 480px) {
  .tab-content-container {
    border-radius: 0 0 16px 16px;
    min-height: 400px;
  }
}
</style> 
<template>
  <div class="tab-content-container">
    <!-- Timeline Tab -->
    <TimelineTab 
      v-if="activeTab === 'timeline'" 
      :timeline-items="timelineItems" 
    />
    
    <!-- Map Tab -->
    <MapTab 
      v-if="activeTab === 'map'" 
      :locations="locations"
      :selected-location-info="selectedLocationInfo"
      @location-selected="$emit('location-selected', $event)"
    />
    
    <!-- Other Tabs -->
    <FlightsTab v-if="activeTab === 'flights'" />
    <HotelsTab v-if="activeTab === 'hotels'" />
    <TransportTab v-if="activeTab === 'transport'" />
    <ActivitiesTab v-if="activeTab === 'activities'" />
    <WeatherTab v-if="activeTab === 'weather'" />
    <BudgetTab v-if="activeTab === 'budget'" />
    <BackupTab v-if="activeTab === 'backup'" />
  </div>
</template>

<script>
import TimelineTab from './tabs/TimelineTab.vue'
import MapTab from './tabs/MapTab.vue'
import FlightsTab from './tabs/FlightsTab.vue'
import HotelsTab from './tabs/HotelsTab.vue'
import TransportTab from './tabs/TransportTab.vue'
import ActivitiesTab from './tabs/ActivitiesTab.vue'
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
    ActivitiesTab,
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
  background: white;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  border-radius: 0 0 20px 20px;
  overflow: hidden;
  min-height: 500px;
}
</style> 
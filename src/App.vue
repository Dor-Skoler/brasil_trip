<template>
  <div class="app">
    <AppHeader />
    <Navigation 
      :tabs="tabs" 
      :active-tab="activeTab" 
      @tab-change="handleTabChange" 
    />
    <LoadingSpinner v-if="loading" />
    <main class="content">
      <TabContent 
        :active-tab="activeTab"
        :timeline-items="timelineItems"
        :locations="locations"
        :selected-location-info="selectedLocationInfo"
        @location-selected="handleLocationSelected"
      />
      <AppFooter />
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import Navigation from './components/Navigation.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import TabContent from './components/TabContent.vue'
import AppFooter from './components/AppFooter.vue'
import { travelData } from './data/travelData.js'

export default {
  name: 'App',
  components: {
    AppHeader,
    Navigation,
    LoadingSpinner,
    TabContent,
    AppFooter
  },
  data() {
    return {
      activeTab: 'timeline',
      loading: false,
      selectedLocationInfo: null,
      ...travelData
    }
  },
  methods: {
    handleTabChange(tabId) {
      this.loading = true
      setTimeout(() => {
        this.activeTab = tabId
        this.loading = false
      }, 300)
    },
    handleLocationSelected(locationInfo) {
      this.selectedLocationInfo = locationInfo
    }
  },
  mounted() {
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      const currentIndex = this.tabs.findIndex(tab => tab.id === this.activeTab)
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        this.handleTabChange(this.tabs[currentIndex - 1].id)
      } else if (e.key === 'ArrowRight' && currentIndex < this.tabs.length - 1) {
        this.handleTabChange(this.tabs[currentIndex + 1].id)
      }
    })
  }
}
</script>

<style>
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.content {
  padding: 0;
}
</style> 
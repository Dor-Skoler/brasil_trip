<template>
  <div class="map-tab">
    <div class="section">
      <h2><i class="fas fa-map-marked-alt"></i> מפת המסלול האינטראקטיבית</h2>
      
      <div class="map-controls">
        <button 
          v-for="location in locations" 
          :key="location.id"
          class="map-control-btn"
          :class="{ active: selectedLocation === location.id }"
          @click="focusOnLocation(location)"
        >
          {{ location.name }}
        </button>
        <button class="map-control-btn" @click="showFullRoute">
          <i class="fas fa-route"></i> מסלול מלא
        </button>
      </div>

      <div id="map" class="map-container" ref="mapContainer"></div>

      <div v-if="selectedLocationInfo" class="location-info">
        <h4>{{ selectedLocationInfo.name }}</h4>
        <div class="dates">{{ selectedLocationInfo.dates }}</div>
        <p><strong>פעילויות עיקריות:</strong> {{ selectedLocationInfo.activities }}</p>
        <p><strong>לינה מומלצת:</strong> {{ selectedLocationInfo.accommodation }}</p>
        <div v-if="selectedLocationInfo.links">
          <p><strong>קישורים שימושיים:</strong></p>
          <ul>
            <li v-for="link in selectedLocationInfo.links" :key="link.name">
              <a :href="link.url" target="_blank" class="url-link">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'

export default {
  name: 'MapTab',
  props: {
    locations: {
      type: Array,
      required: true
    },
    selectedLocationInfo: {
      type: Object,
      default: null
    }
  },
  emits: ['location-selected'],
  data() {
    return {
      map: null,
      markers: [],
      routeLine: null,
      selectedLocation: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initMap()
    })
  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove()
    }
  },
  methods: {
    initMap() {
      if (!this.map && this.$refs.mapContainer) {
        // Initialize map centered on Brazil
        this.map = L.map(this.$refs.mapContainer).setView([-14.2350, -51.9253], 5)
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(this.map)
        
        // Add markers for all locations
        this.addMarkersToMap()
        this.showFullRoute()
      }
    },
    addMarkersToMap() {
      this.locations.forEach(location => {
        const marker = L.marker([location.lat, location.lng])
          .addTo(this.map)
          .bindPopup(`
            <div style="text-align: right; direction: rtl;">
              <h4>${location.name}</h4>
              <p><strong>${location.dates}</strong></p>
              <p>${location.activities}</p>
            </div>
          `)
        
        marker.on('click', () => {
          this.selectedLocation = location.id
          this.$emit('location-selected', location)
        })
        
        this.markers.push({ id: location.id, marker })
      })
    },
    focusOnLocation(location) {
      if (this.map) {
        this.selectedLocation = location.id
        this.$emit('location-selected', location)
        this.map.setView([location.lat, location.lng], 10)
        
        // Find and open the popup for this location
        const markerData = this.markers.find(m => m.id === location.id)
        if (markerData) {
          markerData.marker.openPopup()
        }
      }
    },
    showFullRoute() {
      if (this.map && this.routeLine) {
        this.map.removeLayer(this.routeLine)
      }
      
      if (this.map) {
        const routeCoords = this.locations.map(loc => [loc.lat, loc.lng])
        this.routeLine = L.polyline(routeCoords, {
          color: '#e74c3c',
          weight: 3,
          opacity: 0.8
        }).addTo(this.map)
        
        // Fit map to show all locations
        const group = new L.featureGroup(this.markers.map(m => m.marker))
        this.map.fitBounds(group.getBounds().pad(0.1))
        
        this.selectedLocation = null
        this.$emit('location-selected', null)
      }
    }
  }
}
</script>

<style scoped>
.map-tab {
  padding: 2rem;
  animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section {
  margin-bottom: 3rem;
  padding: 2.5rem;
  border-radius: 15px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.section h2 {
  color: #2c3e50;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #3498db;
  position: relative;
}

.section h2::before {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 50px;
  height: 3px;
  background: #e74c3c;
  border-radius: 2px;
}

.map-container {
  width: 100%;
  height: 600px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  margin: 2rem 0;
}

.map-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.map-control-btn {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.map-control-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
}

.map-control-btn.active {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
}

.location-info {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  margin: 1rem 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-right: 4px solid #3498db;
}

.location-info h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.location-info .dates {
  background: #3498db;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.url-link {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.url-link:hover {
  color: #2980b9;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .map-tab {
    padding: 1.5rem;
  }
  
  .section {
    padding: 1.5rem;
  }
  
  .map-container {
    height: 400px;
  }
  
  .map-controls {
    justify-content: center;
  }
}
</style> 
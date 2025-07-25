<template>
  <div class="timeline-tab">
    <div class="section">
      <h2><i class="fas fa-calendar-alt"></i> לוח זמנים אינטראקטיבי</h2>
      <p class="timeline-description">
        לחצו על כל יעד כדי לראות פעילויות מפורטות וקישורים שימושיים
      </p>
      
      <div class="timeline">
        <div 
          v-for="item in timelineItems" 
          :key="item.id" 
          class="timeline-item"
          :class="{ 'expanded': expandedItem === item.id }"
          @click="toggleExpanded(item.id)"
        >
          <div class="timeline-header">
            <div class="timeline-icon" :style="{ backgroundColor: item.color }">
              <i :class="item.icon"></i>
            </div>
            <div class="timeline-content">
              <h4>
                <i class="fas fa-calendar-day"></i> 
                {{ item.dates }}
                <span class="expand-indicator">
                  <i :class="expandedItem === item.id ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
                </span>
              </h4>
              <h3 class="location-name">{{ item.location }}</h3>
              <p class="location-description">{{ item.description }}</p>
            </div>
          </div>
          
          <!-- Expandable Activities Section -->
          <transition name="expand">
            <div v-if="expandedItem === item.id" class="activities-section">
              <h5><i class="fas fa-star"></i> פעילויות מומלצות</h5>
              
              <div class="activities-grid">
                <div 
                  v-for="activity in item.activities" 
                  :key="activity.name"
                  class="activity-card"
                >
                  <div class="activity-header">
                    <h6>{{ activity.name }}</h6>
                    <div class="activity-price">{{ activity.price }}</div>
                  </div>
                  
                  <p class="activity-description">{{ activity.description }}</p>
                  
                  <div class="activity-details">
                    <div class="activity-duration">
                      <i class="fas fa-clock"></i>
                      {{ activity.duration }}
                    </div>
                  </div>
                  
                  <div v-if="activity.urls && activity.urls.length > 0" class="activity-links">
                    <a 
                      v-for="link in activity.urls" 
                      :key="link.name"
                      :href="link.url" 
                      target="_blank" 
                      class="activity-link"
                    >
                      <i class="fas fa-external-link-alt"></i>
                      {{ link.name }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineTab',
  props: {
    timelineItems: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      expandedItem: null
    }
  },
  methods: {
    toggleExpanded(itemId) {
      this.expandedItem = this.expandedItem === itemId ? null : itemId
    }
  }
}
</script>

<style scoped>
.timeline-tab {
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

.timeline-description {
  color: var(--text-secondary);
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  border-left: 4px solid var(--primary-color);
}

.timeline {
  position: relative;
  padding-right: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  right: 1rem;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  background: var(--bg-primary);
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;
}

.timeline-item:hover {
  transform: translateX(-8px) translateY(-4px);
  box-shadow: var(--shadow-2xl);
}

.timeline-item.expanded {
  transform: translateX(-12px) translateY(-4px);
  box-shadow: var(--shadow-2xl);
}

.timeline-item::before {
  content: '';
  position: absolute;
  right: -1.25rem;
  top: 3rem;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  border-radius: 50%;
  border: 4px solid var(--bg-primary);
  box-shadow: 0 0 0 4px var(--primary-color);
  transition: all 0.3s ease;
  z-index: 2;
}

.timeline-item:hover::before,
.timeline-item.expanded::before {
  transform: scale(1.2);
  box-shadow: 0 0 0 6px var(--accent-color);
}

.timeline-header {
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.timeline-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: var(--shadow-lg);
  flex-shrink: 0;
}

.timeline-content {
  flex: 1;
}

.timeline-content h4 {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.timeline-content h4 i {
  color: var(--primary-color);
  font-size: 1.125rem;
}

.expand-indicator {
  color: var(--text-secondary);
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.timeline-item.expanded .expand-indicator {
  transform: rotate(180deg);
}

.location-name {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.location-description {
  color: var(--text-secondary);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

/* Activities Section */
.activities-section {
  padding: 0 2rem 2rem;
  border-top: 1px solid var(--border-color);
  margin-top: 1rem;
}

.activities-section h5 {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.5rem 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.activities-section h5 i {
  color: var(--warning-color);
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.activity-card {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 16px;
  border-left: 3px solid var(--accent-color);
  box-shadow: var(--shadow-md);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.activity-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-left-color: var(--primary-color);
}

.activity-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.activity-header h6 {
  color: var(--text-primary);
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
}

.activity-price {
  background: linear-gradient(135deg, var(--warning-color), var(--secondary-color));
  color: var(--text-inverse);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: var(--shadow-sm);
}

.activity-description {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.activity-details {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.activity-duration {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

.activity-duration i {
  color: var(--primary-color);
}

.activity-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.activity-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: var(--text-inverse);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-sm);
}

.activity-link:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  background: linear-gradient(135deg, var(--primary-hover), var(--accent-color));
}

.activity-link i {
  font-size: 0.75rem;
}

/* Expand Animation */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-20px);
}

.expand-enter-to,
.expand-leave-from {
  max-height: 2000px;
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .timeline-tab {
    padding: 1.5rem;
  }
  
  .timeline {
    padding-right: 1.5rem;
  }
  
  .timeline::before {
    right: 0.75rem;
  }
  
  .timeline-item::before {
    right: -1rem;
    width: 1.25rem;
    height: 1.25rem;
  }
  
  .timeline-header {
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
  
  .timeline-icon {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
  }
  
  .activities-section {
    padding: 0 1.5rem 1.5rem;
  }
  
  .activities-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .activity-card {
    padding: 1.25rem;
  }
  
  .activity-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .activity-links {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .timeline-tab {
    padding: 1rem;
  }
  
  .timeline {
    padding-right: 1rem;
  }
  
  .timeline::before {
    right: 0.5rem;
    width: 2px;
  }
  
  .timeline-item::before {
    right: -0.75rem;
    width: 1rem;
    height: 1rem;
  }
  
  .timeline-header {
    padding: 1.25rem;
  }
  
  .timeline-icon {
    width: 45px;
    height: 45px;
    font-size: 1.125rem;
  }
  
  .location-name {
    font-size: 1.25rem;
  }
  
  .activities-section {
    padding: 0 1.25rem 1.25rem;
  }
  
  .activity-card {
    padding: 1rem;
  }
}
</style> 
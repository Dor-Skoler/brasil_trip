<template>
  <div class="timeline-tab">
    <div class="section">
      <h2><i class="fas fa-calendar-alt"></i> לוח זמנים כללי</h2>
      <div class="timeline">
        <div 
          v-for="item in timelineItems" 
          :key="item.id" 
          class="timeline-item"
        >
          <h4><i class="fas fa-calendar-day"></i> {{ item.dates }}</h4>
          <strong>{{ item.location }}</strong><br>
          {{ item.description }}
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
  }
}
</script>

<style scoped>
.timeline-tab {
  padding: 3rem;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
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

.timeline {
  position: relative;
  padding-right: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  right: 1.5rem;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #3498db, #2980b9);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(-10px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.timeline-item::before {
  content: '';
  position: absolute;
  right: -1rem;
  top: 2rem;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(135deg, #3498db, #2980b9);
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 0 0 4px #3498db;
}

.timeline-item h4 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.timeline-item h4 i {
  margin-left: 0.5rem;
  color: #3498db;
}

@media (max-width: 768px) {
  .timeline-tab {
    padding: 1.5rem;
  }
  
  .section {
    padding: 1.5rem;
  }
  
  .timeline {
    padding-right: 2rem;
  }
  
  .timeline::before {
    right: 1rem;
  }
  
  .timeline-item::before {
    right: -0.5rem;
  }
}
</style> 
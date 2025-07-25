<template>
  <div class="flights-tab">
    <div class="section">
      <h2><i class="fas fa-plane"></i> טיסות</h2>
      
      <h3><i class="fas fa-globe-americas"></i> טיסות בינלאומיות</h3>
      <div class="flight-card international">
        <h4>{{ flightData.international.route }}</h4>
        <div class="flight-details">
          <div class="price">{{ flightData.international.price }}</div>
          <p><strong>משך טיסה:</strong> {{ flightData.international.duration }}</p>
          <p><strong>הערות:</strong> {{ flightData.international.notes }}</p>
        </div>
        <div class="links">
          <a v-for="link in flightData.international.links" 
             :key="link.name" 
             :href="link.url" 
             target="_blank" 
             class="url-link">
            {{ link.name }}
          </a>
        </div>
      </div>

      <h3><i class="fas fa-map-marked-alt"></i> טיסות פנימיות</h3>
      <div v-for="flight in flightData.domestic" :key="flight.date" class="flight-card domestic">
        <h4>{{ flight.date }} - {{ flight.route }}</h4>
        <div class="flight-details">
          <div class="price">{{ flight.price }}</div>
          <p><strong>משך טיסה:</strong> {{ flight.duration }}</p>
          <p><strong>חברות תעופה:</strong> {{ flight.airlines }}</p>
        </div>
        <div v-if="flight.links" class="links">
          <a v-for="link in flight.links" 
             :key="link.name" 
             :href="link.url" 
             target="_blank" 
             class="url-link">
            {{ link.name }}
          </a>
        </div>
      </div>

      <div class="important">
        <strong>טיפים חשובים:</strong><br>
        • הזמינו טיסות פנימיות מוקדם לקבלת מחירים טובים יותר<br>
        • בדקו מגבלות משקל במטען בטיסות פנימיות<br>
        • הגיעו לשדה התעופה 2-3 שעות לפני טיסות בינלאומיות<br>
        • שמרו על דרכון בתוקף לפחות 6 חודשים
      </div>
    </div>
  </div>
</template>

<script>
import { travelData } from '../../data/travelData.js'

export default {
  name: 'FlightsTab',
  computed: {
    flightData() {
      return travelData.flights
    }
  }
}
</script>

<style scoped>
.flights-tab {
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

.flight-card {
  background: var(--bg-primary);
  padding: 2rem;
  margin: 1.5rem 0;
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.flight-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-glass);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.flight-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
}

.flight-card:hover::before {
  opacity: 1;
}

.flight-card.international {
  border-left: 4px solid var(--error-color);
}

.flight-card.domestic {
  border-left: 4px solid var(--primary-color);
}

.flight-card h4 {
  color: var(--text-primary);
  font-size: 1.375rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.flight-details {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.flight-details p {
  margin: 0.5rem 0;
  color: var(--text-secondary);
  font-weight: 500;
}

.flight-details strong {
  color: var(--text-primary);
}

.links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .flights-tab {
    padding: 1.5rem;
  }
  
  .flight-card {
    padding: 1.5rem;
    border-radius: 16px;
  }
  
  .flight-details {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .flights-tab {
    padding: 1rem;
  }
  
  .flight-card {
    padding: 1.25rem;
    border-radius: 12px;
  }
}
</style> 
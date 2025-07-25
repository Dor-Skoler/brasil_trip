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

.flight-card {
  background: white;
  padding: 2rem;
  margin: 1.5rem 0;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.flight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.flight-card.international {
  border-left: 5px solid #e74c3c;
}

.flight-card.domestic {
  border-left: 5px solid #3498db;
}

.flight-card h4 {
  color: #2c3e50;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.flight-details {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.flight-details p {
  margin: 0.5rem 0;
}

.links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .flights-tab {
    padding: 1.5rem;
  }
  
  .flight-details {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style> 
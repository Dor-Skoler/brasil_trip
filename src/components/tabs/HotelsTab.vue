<template>
  <div class="hotels-tab">
    <div class="section">
      <h2><i class="fas fa-hotel"></i> מלונות מומלצים</h2>
      
      <div v-for="(hotels, city) in hotelData" :key="city" class="city-hotels">
        <h3><i class="fas fa-map-marker-alt"></i> {{ getCityName(city) }}</h3>
        
        <div v-for="hotel in hotels" :key="hotel.name" class="hotel-card">
          <div class="hotel-header">
            <h4>{{ hotel.name }}</h4>
            <div class="rating">{{ hotel.rating }}</div>
          </div>
          <p class="description">{{ hotel.description }}</p>
          <div class="hotel-footer">
            <div class="price">{{ hotel.price }}</div>
            <a v-if="hotel.link" :href="hotel.link" target="_blank" class="url-link">
              <i class="fas fa-external-link-alt"></i> הזמנה
            </a>
          </div>
        </div>
      </div>

      <div class="important">
        <strong>טיפים לבחירת מלון:</strong><br>
        • בדקו ביטולים חינם למקרה של שינויים<br>
        • וודאו שיש Wi-Fi חינם ומיזוג אוויר<br>
        • בחרו מלונות קרוב לאטרקציות או תחבורה ציבורית<br>
        • קראו ביקורות עדכניות לפני ההזמנה<br>
        • שקלו מלונות עם בריכה באקלים הטרופי
      </div>
    </div>
  </div>
</template>

<script>
import { travelData } from '../../data/travelData.js'

export default {
  name: 'HotelsTab',
  computed: {
    hotelData() {
      return travelData.hotels
    }
  },
  methods: {
    getCityName(cityKey) {
      const cityNames = {
        rio: 'ריו דה ז\'ניירו',
        saoPaulo: 'סאו פאולו/איטו',
        morro: 'מורו דה סאו פאולו',
        itacare: 'איטאקרה',
        jericoacoara: 'ג\'ריקואקוארה'
      }
      return cityNames[cityKey] || cityKey
    }
  }
}
</script>

<style scoped>
.hotels-tab {
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

.city-hotels {
  margin-bottom: 2.5rem;
}

.hotel-card {
  background: var(--bg-primary);
  padding: 2rem;
  margin: 1.5rem 0;
  border-radius: 20px;
  border-left: 4px solid var(--warning-color);
  box-shadow: var(--shadow-lg);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.hotel-card::before {
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

.hotel-card:hover {
  transform: translateX(-8px) translateY(-4px);
  box-shadow: var(--shadow-2xl);
  border-left-color: var(--secondary-color);
}

.hotel-card:hover::before {
  opacity: 1;
}

.hotel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.hotel-header h4 {
  color: var(--text-primary);
  font-size: 1.375rem;
  font-weight: 600;
  margin: 0;
}

.rating {
  background: linear-gradient(135deg, var(--warning-color), var(--secondary-color));
  color: var(--text-inverse);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: var(--shadow-md);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.hotel-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
}

.url-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: var(--text-inverse);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-md);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.url-link:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  background: linear-gradient(135deg, var(--primary-hover), var(--accent-color));
}

@media (max-width: 768px) {
  .hotels-tab {
    padding: 1.5rem;
  }
  
  .hotel-card {
    padding: 1.5rem;
    border-radius: 16px;
  }
  
  .hotel-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .hotel-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .hotels-tab {
    padding: 1rem;
  }
  
  .hotel-card {
    padding: 1.25rem;
    border-radius: 12px;
  }
  
  .hotel-header h4 {
    font-size: 1.25rem;
  }
}
</style> 
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

.city-hotels {
  margin-bottom: 3rem;
}

.hotel-card {
  background: white;
  padding: 2rem;
  margin: 1.5rem 0;
  border-radius: 12px;
  border-right: 5px solid #f39c12;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.hotel-card:hover {
  transform: translateX(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.hotel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.hotel-header h4 {
  color: #2c3e50;
  font-size: 1.4rem;
  margin: 0;
}

.rating {
  background: linear-gradient(135deg, #f39c12, #e67e22);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
}

.description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.hotel-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.url-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.url-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
}

@media (max-width: 768px) {
  .hotels-tab {
    padding: 1.5rem;
  }
  
  .hotel-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .hotel-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style> 
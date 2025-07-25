<template>
  <div class="weather-tab">
    <div class="section">
      <h2><i class="fas fa-cloud-sun"></i> מזג אוויר ובריאות</h2>
      
      <h3><i class="fas fa-thermometer-half"></i> מזג אוויר באוקטובר</h3>
      
      <div class="weather-info">
        <h4><i class="fas fa-map-marker-alt"></i> ריו דה ז'ניירו</h4>
        <p><strong>טמפרטורה:</strong> 20-28°C (68-82°F)</p>
        <p><strong>גשמים:</strong> מתונים, בעיקר אחר הצהריים</p>
        <p><strong>לחות:</strong> גבוהה (70-80%)</p>
        <p><strong>מה ללבוש:</strong> בגדים קלים, מטריה קטנה</p>
      </div>

      <div class="weather-info">
        <h4><i class="fas fa-map-marker-alt"></i> באיה (מורו, איטאקרה)</h4>
        <p><strong>טמפרטורה:</strong> 22-30°C (72-86°F)</p>
        <p><strong>גשמים:</strong> מעטים, עונה יבשה</p>
        <p><strong>לחות:</strong> בינונית (60-70%)</p>
        <p><strong>מה ללבוש:</strong> בגדי קיץ, כובע, משקפי שמש</p>
      </div>

      <div class="weather-info">
        <h4><i class="fas fa-map-marker-alt"></i> ג'ריקואקוארה</h4>
        <p><strong>טמפרטורה:</strong> 24-32°C (75-90°F)</p>
        <p><strong>גשמים:</strong> כמעט ללא גשם</p>
        <p><strong>רוחות:</strong> קבועות וחזקות (מושלם לספורט ימי)</p>
        <p><strong>מה ללבוש:</strong> בגדים קלים, הגנה מרוח</p>
      </div>

      <h3><i class="fas fa-syringe"></i> חיסונים ובריאות</h3>
      
      <div class="info-card">
        <h4><i class="fas fa-shield-virus"></i> חיסונים נדרשים</h4>
        <ul class="checklist">
          <li>צהבת A ו-B - מומלץ מאוד</li>
          <li>טיפוס - מומלץ לאזורים כפריים</li>
          <li>חיסון נגד קדחת צהובה - נדרש בכניסה למדינות מסוימות</li>
          <li>חיסונים שגרתיים - ודאו שהם עדכניים</li>
        </ul>
      </div>

      <div class="info-card">
        <h4><i class="fas fa-mosquito"></i> מניעת מלריה ודנגי</h4>
        <ul class="checklist">
          <li>השתמשו בדוחה יתושים עם DEET</li>
          <li>לבשו שרוולים ארוכים בערב</li>
          <li>ישנו תחת כילה במקומות נדרשים</li>
          <li>הימנעו ממים עומדים</li>
        </ul>
      </div>

      <div class="info-card">
        <h4><i class="fas fa-first-aid"></i> ערכת עזרה ראשונה</h4>
        <ul class="checklist">
          <li>משככי כאבים (פרצטמול, איבופרופן)</li>
          <li>תרופות נגד שלשול</li>
          <li>קרם הגנה SPF 50+</li>
          <li>חבישות ופלסטרים</li>
          <li>אנטיביוטיקה (לפי המלצת רופא)</li>
          <li>תרופות אישיות בכמות מספקת</li>
        </ul>
      </div>

      <div class="important">
        <strong>טיפי בריאות חשובים:</strong><br>
        • שתו רק מים בבקבוקים אטומים<br>
        • הימנעו מקרח במשקאות<br>
        • אכלו רק פירות שאתם קולפים בעצמכם<br>
        • השתמשו בקרם הגנה כל יום<br>
        • שטפו ידיים לעתים קרובות<br>
        • פנו לרופא מקומי במקרה של חום גבוה
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherTab'
}
</script>

<style scoped>
.weather-tab {
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

@media (max-width: 768px) {
  .weather-tab {
    padding: 1.5rem;
  }
}
</style> 
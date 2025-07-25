<template>
  <div class="backup-tab">
    <div class="section">
      <h2><i class="fas fa-shield-alt"></i> תוכנית גיבוי וחירום</h2>
      
      <h3><i class="fas fa-phone"></i> מספרי חירום חשובים</h3>
      
      <div class="info-card">
        <h4><i class="fas fa-ambulance"></i> שירותי חירום ברזיל</h4>
        <ul class="checklist">
          <li><strong>משטרה:</strong> 190</li>
          <li><strong>כיבוי אש:</strong> 193</li>
          <li><strong>אמבולנס:</strong> 192</li>
          <li><strong>חירום כללי:</strong> 911</li>
          <li><strong>תיירות:</strong> 136 (קו עזרה לתיירים)</li>
        </ul>
      </div>

      <div class="info-card">
        <h4><i class="fas fa-flag"></i> נציגויות ישראל בברזיל</h4>
        <ul class="checklist">
          <li><strong>שגרירות ישראל בברזיליה:</strong> +55-61-3242-8344</li>
          <li><strong>קונסוליה בריו:</strong> +55-21-2548-4432</li>
          <li><strong>קונסוליה בסאו פאולו:</strong> +55-11-3067-0744</li>
          <li><strong>חירום קונסולרי 24/7:</strong> +972-2-530-3111</li>
        </ul>
      </div>

      <h3><i class="fas fa-route"></i> תוכניות גיבוי למסלול</h3>
      
      <div class="destination">
        <h4><i class="fas fa-cloud-rain"></i> אם יש גשמים/מזג אוויר קשה</h4>
        <ul class="checklist">
          <li><strong>ריו:</strong> מוזיאונים (מחר, אמנה מודרנית), קניות בקופקבנה</li>
          <li><strong>מורו:</strong> עיסויים, בתי קפה, סדנאות קפוארה</li>
          <li><strong>איטאקרה:</strong> סיור מטעי שוקולד, ספא מקומי</li>
          <li><strong>ג'רי:</strong> אמנים מקומיים, בתי מלאכה, יוגה</li>
        </ul>
      </div>

      <div class="destination">
        <h4><i class="fas fa-exclamation-triangle"></i> אם יש ביטול טיסות</h4>
        <ul class="checklist">
          <li>יום גיבוי נוסף בריו (29-31 אוקטובר)</li>
          <li>טיסות חלופיות דרך סאו פאולו או בואנוס איירס</li>
          <li>מלון נוסף ליד שדה התעופה בריו</li>
          <li>ביטוח נסיעות מכסה עיכובים</li>
        </ul>
      </div>

      <div class="destination">
        <h4><i class="fas fa-user-injured"></i> אם יש בעיות בריאות</h4>
        <ul class="checklist">
          <li><strong>ריו:</strong> Hospital Samaritano, Copa D'Or</li>
          <li><strong>סאו פאולו:</strong> Hospital Israelita Albert Einstein</li>
          <li><strong>איטאקרה:</strong> Hospital Municipal, מרפאות פרטיות</li>
          <li><strong>ג'רי:</strong> UPA Jericoacoara, Hospital em Jijoca</li>
        </ul>
      </div>

      <h3><i class="fas fa-suitcase"></i> רשימת ביטחון ומסמכים</h3>
      
      <div class="info-card">
        <h4><i class="fas fa-passport"></i> מסמכים חיוניים</h4>
        <ul class="checklist">
          <li>דרכון (תוקף 6+ חודשים) + העתקים</li>
          <li>ויזה (אם נדרשת) + העתקים</li>
          <li>כרטיסי טיסה מודפסים + דיגיטליים</li>
          <li>אישורי מלונות</li>
          <li>ביטוח נסיעות + מספר חברה</li>
          <li>כרטיס בינלאומי לנהיגה (אם נדרש)</li>
          <li>תעודת חיסונים (צהוב)</li>
        </ul>
      </div>

      <div class="info-card">
        <h4><i class="fas fa-money-check-alt"></i> כספים וכרטיסים</h4>
        <ul class="checklist">
          <li>2-3 כרטיסי אשראי שונים</li>
          <li>מזומן בדולרים + ריאלים</li>
          <li>כרטיס חיוב מקומי (אם יש)</li>
          <li>מספרי חסימת כרטיסים</li>
          <li>פרטי בנק וחברת ביטוח</li>
        </ul>
      </div>

      <div class="info-card">
        <h4><i class="fas fa-mobile-alt"></i> טכנולוגיה ותקשורת</h4>
        <ul class="checklist">
          <li>טלפון + מטען + פאוור בנק</li>
          <li>SIM כרטיס מקומי או נדידה</li>
          <li>אפליקציות: Google Translate, Maps, Uber</li>
          <li>Wi-Fi נייד (אם נדרש)</li>
          <li>מצלמה + כרטיסי זיכרון נוספים</li>
        </ul>
      </div>

      <div class="important">
        <strong>טיפי ביטחון חשובים:</strong><br>
        • שלחו עותק מכל המסמכים למייל<br>
        • השאירו עותקים עם קרוב משפחה בישראל<br>
        • רשמו מספרי חירום בטלפון<br>
        • הודיעו לבנק ולחברת כרטיס האשראי על הנסיעה<br>
        • בדקו שהביטוח מכסה פעילויות אקסטרים<br>
        • שמרו על קשר קבוע עם הבית
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackupTab'
}
</script>

<style scoped>
.backup-tab {
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

@media (max-width: 768px) {
  .backup-tab {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .backup-tab {
    padding: 1rem;
  }
}
</style> 
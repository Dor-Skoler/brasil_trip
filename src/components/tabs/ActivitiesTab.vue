<template>
  <div class="activities-tab">
    <div class="section">
      <h2><i class="fas fa-hiking"></i> פעילויות מומלצות</h2>
      
      <div class="destination">
        <h4><i class="fas fa-mountain"></i> ריו דה ז'ניירו (3-8 אוקטובר)</h4>
        <ul class="checklist">
          <li>עלייה לפסל ישו המושיע (Cristo Redentor) - רכבל או רכבת</li>
          <li>טיול להר הסוכר (Pão de Açúcar) - רכבל עם נוף מדהים</li>
          <li>חופי קופקבנה ואיפנמה - שיזוף, שחייה, ואוכל רחוב</li>
          <li>שכונת סנטה תרזה - אמנות רחוב וקפה ברזילאי אותנטי</li>
          <li>מדרגות סלרון (Escadaria Selarón) - מדרגות צבעוניות מפורסמות</li>
          <li>אצטדיון מרקנה - סיור במקדש הכדורגל הברזילאי</li>
          <li>שוק השבת בקופקבנה - מוצרי יד וכלי נגינה</li>
        </ul>
      </div>

      <div class="destination">
        <h4><i class="fas fa-music"></i> סאו פאולו/איטו (9-12 אוקטובר)</h4>
        <ul class="checklist">
          <li>פסטיבל טומורולנד ברזיל - 3 ימים של מוזיקה אלקטרונית</li>
          <li>מתחם הגולף - פעילויות ספורט ונופי טבע</li>
          <li>עיר איטו ההיסטורית - ארכיטקטורה קולוניאלית</li>
          <li>מוזיאון הרפובליקה - היסטוריה ברזילאית</li>
          <li>פארק האקולוגי - טיולי טבע וצפרות</li>
        </ul>
      </div>

      <div class="destination">
        <h4><i class="fas fa-umbrella-beach"></i> מורו דה סאו פאולו (13-16 אוקטובר)</h4>
        <ul class="checklist">
          <li>4 החופים - כל חוף עם אופי שונה ופעילויות מגוונות</li>
          <li>אומגת טירולזה מעל הים - אדרנלין עם נוף מדהים</li>
          <li>שייט שקיעה עם קפיריניה - רומנטי ומרגיע</li>
          <li>שנורקל בשוניות האלמוגים - חיי ים עשירים</li>
          <li>טיול לפורטה דו ספי - נוף פנורמי של האי</li>
          <li>בילויים לילה בחוף השני - מוזיקה וריקודים</li>
        </ul>
      </div>

      <div class="destination">
        <h4><i class="fas fa-tree"></i> איטאקרה (17-21 אוקטובר)</h4>
        <ul class="checklist">
          <li>טרק 4 החופים - הליכה בין חופים דרך יער גשם</li>
          <li>מפלי טיג'ויפי - בריכות טבעיות וקפיצות למים</li>
          <li>שיעורי גלישה - גלים מושלמים למתחילים</li>
          <li>סיור מטעי שוקולד - מהזרע ועד הטבלה</li>
          <li>טיול קיאקים בנהרות - דרך מנגרובים וחיות בר</li>
          <li>רפטינג בנהר דה קונטס - אדרנלין ונופים</li>
          <li>עיסוי בספא מקומי - רגיעה אחרי יום פעיל</li>
        </ul>
      </div>

      <div class="destination">
        <h4><i class="fas fa-wind"></i> ג'ריקואקוארה (22-28 אוקטובר)</h4>
        <ul class="checklist">
          <li>דיונת השקיעה - מקום הטוב ביותר לשקיעות בעולם</li>
          <li>לגונת פרדיסו - מים טורקיז וערסלים במים</li>
          <li>גלישת רוח וקייטסרפינג - רוחות קבועות ומושלמות</li>
          <li>טיול באגי לדיונת טטאז'ובה - הרפתקה במדבר החולי</li>
          <li>לגונת אזול - מים כחולים קריסטליים</li>
          <li>רכיבה על סוסים בחוף - בזמן שקיעה</li>
          <li>צפייה בכוכבים - שמיים צלולים ללא זיהום אור</li>
          <li>קפוארה על החוף - אמנות לחימה ברזילאית</li>
        </ul>
      </div>

      <div class="important">
        <strong>טיפים לפעילויות:</strong><br>
        • הזמינו פעילויות פופולריות מראש<br>
        • קחו קרם הגנה חזק (SPF 50+) לפעילויות חוץ<br>
        • לבשו נעליים נוחות לטיולים<br>
        • שתו הרבה מים בפעילויות באקלים חם<br>
        • בדקו תנאי מזג האוויר לפני פעילויות ימיות<br>
        • למדו כמה מילים בפורטוגזית למדריכים מקומיים
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivitiesTab'
}
</script>

<style scoped>
.activities-tab {
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
  .activities-tab {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .activities-tab {
    padding: 1rem;
  }
}
</style> 
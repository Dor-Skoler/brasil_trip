<template>
  <div class="budget-tab">
    <div class="section">
      <h2><i class="fas fa-calculator"></i> תקציב מפורט</h2>
      
      <table class="budget-table">
        <thead>
          <tr>
            <th>פריט</th>
            <th>לאדם (₪)</th>
            <th>לזוג (₪)</th>
            <th>הערות</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in budgetData" :key="item.item">
            <td><strong>{{ item.item }}</strong></td>
            <td>{{ formatPrice(item.perPerson) }}</td>
            <td>{{ formatPrice(item.perCouple) }}</td>
            <td>{{ item.notes }}</td>
          </tr>
          <tr class="total-row">
            <td><strong>סה"כ</strong></td>
            <td><strong>{{ formatPrice(totalPerPerson) }}</strong></td>
            <td><strong>{{ formatPrice(totalPerCouple) }}</strong></td>
            <td><strong>כ-26 ימים</strong></td>
          </tr>
        </tbody>
      </table>

      <h3><i class="fas fa-credit-card"></i> טיפים לחיסכון וניהול כסף</h3>
      
      <div class="info-card">
        <h4><i class="fas fa-money-bill-wave"></i> מטבע ותשלומים</h4>
        <ul class="checklist">
          <li>המטבע המקומי: ריאל ברזילאי (BRL)</li>
          <li>שער חליפין: 1 ריאל ≈ ₪1.9 (משתנה)</li>
          <li>כרטיסי אשראי מתקבלים ברוב המקומות</li>
          <li>משכו מזומן מכספומטים לעמלות נמוכות יותר</li>
          <li>שמרו על מזומן לשווקים ואוכל רחוב</li>
        </ul>
      </div>

      <div class="info-card">
        <h4><i class="fas fa-piggy-bank"></i> דרכים לחסוך</h4>
        <ul class="checklist">
          <li>אכלו במסעדות מקומיות במקום תיירותיות</li>
          <li>השתמשו בתחבורה ציבורית</li>
          <li>הזמינו טיסות ומלונות מוקדם</li>
          <li>בחרו בפעילויות חינמיות כמו חופים וטיולים</li>
          <li>קנו מזון בסופרמרקטים מקומיים</li>
        </ul>
      </div>

      <div class="info-card">
        <h4><i class="fas fa-exclamation-triangle"></i> הוצאות בלתי צפויות</h4>
        <ul class="checklist">
          <li>שמרו 10-15% מהתקציב לחירום</li>
          <li>ביטוח נסיעות - חובה!</li>
          <li>עמלות כרטיסי אשראי בחו"ל</li>
          <li>טיפים במסעדות (10-15%)</li>
          <li>קניות ומזכרות</li>
        </ul>
      </div>

      <div class="important">
        <strong>טיפים פיננסיים חשובים:</strong><br>
        • הודיעו לבנק על הנסיעה מראש<br>
        • קחו 2-3 כרטיסי אשראי שונים<br>
        • צלמו את הכרטיסים (בנפרד מהמקור)<br>
        • השתמשו באפליקציות להמרת מטבע<br>
        • שמרו על קבלות לצורכי מס<br>
        • בדקו עמלות חיוב בחו"ל מראש
      </div>
    </div>
  </div>
</template>

<script>
import { travelData } from '../../data/travelData.js'

export default {
  name: 'BudgetTab',
  computed: {
    budgetData() {
      return travelData.budgetBreakdown
    },
    totalPerPerson() {
      return this.budgetData.reduce((sum, item) => sum + item.perPerson, 0)
    },
    totalPerCouple() {
      return this.budgetData.reduce((sum, item) => sum + item.perCouple, 0)
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat('he-IL', {
        style: 'currency',
        currency: 'ILS',
        minimumFractionDigits: 0
      }).format(price)
    }
  }
}
</script>

<style scoped>
.budget-tab {
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

.total-row {
  background: linear-gradient(135deg, #f39c12, #e67e22) !important;
  color: white !important;
  font-weight: bold;
}

.total-row td {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .budget-tab {
    padding: 1.5rem;
  }
  
  .budget-table {
    font-size: 0.8rem;
  }
  
  .budget-table th,
  .budget-table td {
    padding: 0.5rem 0.3rem;
  }
}
</style> 
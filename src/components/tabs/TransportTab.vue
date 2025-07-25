<template>
  <div class="transport-tab">
    <div class="section">
      <h2><i class="fas fa-bus"></i> תחבורה והעברות</h2>
      
      <h3><i class="fas fa-ship"></i> העברות ימיות</h3>
      <div class="transport-card">
        <h4>סלבדור → מורו דה סאו פאולו</h4>
        <p><strong>אמצעי:</strong> מעבורת מהירה (Catamaran)</p>
        <p><strong>משך:</strong> 2.5 שעות</p>
        <p><strong>מחיר:</strong> ~R$80-120 (כ-₪100-150)</p>
        <p><strong>חברה:</strong> Biotur, Catamaran Morro</p>
        <div class="links">
          <a href="https://www.catamaranmorro.com.br" target="_blank" class="url-link">
            הזמנת כרטיסים
          </a>
        </div>
      </div>

      <h3><i class="fas fa-car"></i> העברות יבשתיות</h3>
      
      <div class="transport-card">
        <h4>מורו דה סאו פאולו → איטאקרה</h4>
        <p><strong>אמצעי:</strong> מעבורת + אוטובוס/מונית שירות</p>
        <p><strong>משך:</strong> 4-5 שעות (כולל העברות)</p>
        <p><strong>מחיר:</strong> ~R$150-200 (כ-₪190-250)</p>
        <p><strong>מסלול:</strong> מעבורת לוולנסה → אוטובוס לאיטאקרה</p>
      </div>

      <div class="transport-card">
        <h4>איטאקרה → איליאוס (לג'ריקואקוארה)</h4>
        <p><strong>אמצעי:</strong> אוטובוס + מונית שירות</p>
        <p><strong>משך:</strong> 8-10 שעות</p>
        <p><strong>מחיר:</strong> ~R$200-300 (כ-₪250-380)</p>
        <p><strong>מסלול:</strong> איטאקרה → סלבדור → פורטלזה → איליאוס → ג'רי</p>
      </div>

      <div class="transport-card">
        <h4>ג'ריקואקוארה → פורטלזה</h4>
        <p><strong>אמצעי:</strong> מונית שירות/אוטובוס</p>
        <p><strong>משך:</strong> 4-5 שעות</p>
        <p><strong>מחיר:</strong> ~R$80-120 (כ-₪100-150)</p>
        <p><strong>הערה:</strong> יש שירותי הסעה ישירים למלונות</p>
      </div>

      <h3><i class="fas fa-taxi"></i> תחבורה מקומית</h3>
      
      <div class="info-card">
        <h4><i class="fas fa-subway"></i> ריו דה ז'ניירו</h4>
        <p><strong>מטרו:</strong> קו 1 (כתום) ו-4 (צהוב) מחברים את האזורים העיקריים</p>
        <p><strong>אוטובוס:</strong> רשת נרחבת, השתמשו באפליקציה Moovit</p>
        <p><strong>אובר/99:</strong> זמין ובטוח, מומלץ לנסיעות לילה</p>
        <p><strong>טאקסי:</strong> ודאו שהמונה פועל או הסכימו על מחיר מראש</p>
      </div>

      <div class="info-card">
        <h4><i class="fas fa-walking"></i> יעדים קטנים (מורו, איטאקרה, ג'רי)</h4>
        <p><strong>הליכה:</strong> רוב האטרקציות במרחק הליכה</p>
        <p><strong>אופניים:</strong> השכרה זמינה ברוב המקומות</p>
        <p><strong>באגי/ATV:</strong> פופולרי בג'ריקואקוארה לסיורים</p>
        <p><strong>סירות:</strong> לאיים ולגונות</p>
      </div>

      <div class="important">
        <strong>טיפי תחבורה חשובים:</strong><br>
        • הזמינו העברות מראש בעונת השיא<br>
        • שמרו על כסף מזומן לתחבורה מקומית<br>
        • השתמשו באפליקציות GPS (Google Maps/Waze)<br>
        • למדו כמה מילים בפורטוגזית בסיסית<br>
        • שמרו על הדרכון תמיד איתכם בנסיעות בין ערים
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransportTab'
}
</script>

<style scoped>
.transport-tab {
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

.transport-card {
  background: var(--bg-primary);
  padding: 2rem;
  margin: 1.5rem 0;
  border-radius: 20px;
  border-left: 4px solid var(--success-color);
  box-shadow: var(--shadow-lg);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.transport-card::before {
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

.transport-card:hover {
  transform: translateX(-8px) translateY(-4px);
  box-shadow: var(--shadow-2xl);
  border-left-color: var(--accent-color);
}

.transport-card:hover::before {
  opacity: 1;
}

.transport-card h4 {
  color: var(--text-primary);
  font-size: 1.375rem;
  font-weight: 600;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.transport-card p {
  color: var(--text-secondary);
  margin: 0.75rem 0;
  font-weight: 500;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.transport-card strong {
  color: var(--text-primary);
  font-weight: 600;
}

.links {
  margin-top: 1rem;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .transport-tab {
    padding: 1.5rem;
  }
  
  .transport-card {
    padding: 1.5rem;
    border-radius: 16px;
  }
}

@media (max-width: 480px) {
  .transport-tab {
    padding: 1rem;
  }
  
  .transport-card {
    padding: 1.25rem;
    border-radius: 12px;
  }
  
  .transport-card h4 {
    font-size: 1.25rem;
  }
}
</style> 
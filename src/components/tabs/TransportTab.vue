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

.transport-card {
  background: white;
  padding: 2rem;
  margin: 1.5rem 0;
  border-radius: 12px;
  border-right: 5px solid #27ae60;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.transport-card:hover {
  transform: translateX(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.transport-card h4 {
  color: #27ae60;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.links {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .transport-tab {
    padding: 1.5rem;
  }
}
</style> 
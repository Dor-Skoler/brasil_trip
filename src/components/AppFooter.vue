<template>
  <footer class="footer">
    <div class="footer-content">
      <h2><i class="fas fa-star"></i> סיכום</h2>
      <p>
        כמעט חודש מלא של חוויות בלתי נשכחות בברזיל!<br>
        מנופי ריו המדהימים, דרך פסטיבל טומורולנד העולמי,<br>
        חופים קסומים בבאיה, יערות גשם באיטאקרה,<br>
        ועד למדבר החולי של ג'ריקואקוארה עם לגונות טורקיז.<br><br>
        <strong>¡Boa viagem! שיהיה טיול חלומי! 🇧🇷</strong>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 3rem;
  margin-top: 2rem;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.footer h2 {
  color: white;
  border-bottom: 3px solid white;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  display: inline-block;
}

.footer p {
  font-size: 1.3rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1rem;
  }
  
  .footer p {
    font-size: 1.1rem;
  }
}
</style> 
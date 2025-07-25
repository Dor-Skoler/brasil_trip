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
      
      <div class="footer-decorations">
        <div class="decoration-circle"></div>
        <div class="decoration-circle"></div>
        <div class="decoration-circle"></div>
      </div>
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
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  text-align: center;
  padding: 3rem 2rem;
  margin: 2rem auto 0;
  max-width: 1400px;
  border-radius: 24px 24px 0 0;
  box-shadow: var(--shadow-xl);
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.footer h2 {
  color: var(--text-primary);
  font-size: 2rem;
  font-weight: 700;
  border-bottom: 3px solid var(--primary-color);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
}

.footer h2::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--accent-color);
  border-radius: 2px;
}

.footer h2 i {
  color: var(--warning-color);
  font-size: 1.75rem;
  animation: twinkle 2s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.footer p {
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-weight: 500;
}

.footer strong {
  color: var(--primary-color);
  font-size: 1.375rem;
  font-weight: 700;
  display: block;
  margin-top: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.footer-decorations {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  opacity: 0.1;
}

.decoration-circle:nth-child(1) {
  width: 200px;
  height: 200px;
  top: -100px;
  left: -100px;
  animation: float 8s ease-in-out infinite;
}

.decoration-circle:nth-child(2) {
  width: 150px;
  height: 150px;
  top: -75px;
  right: -75px;
  animation: float 6s ease-in-out infinite reverse;
}

.decoration-circle:nth-child(3) {
  width: 100px;
  height: 100px;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  animation: float 10s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1.5rem;
    border-radius: 20px 20px 0 0;
  }
  
  .footer h2 {
    font-size: 1.75rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .footer p {
    font-size: 1.125rem;
  }
  
  .footer strong {
    font-size: 1.25rem;
  }
  
  .decoration-circle:nth-child(1) {
    width: 150px;
    height: 150px;
  }
  
  .decoration-circle:nth-child(2) {
    width: 100px;
    height: 100px;
  }
  
  .decoration-circle:nth-child(3) {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1.5rem 1rem;
    border-radius: 16px 16px 0 0;
  }
  
  .footer h2 {
    font-size: 1.5rem;
  }
  
  .footer p {
    font-size: 1rem;
  }
  
  .footer strong {
    font-size: 1.125rem;
  }
}
</style> 
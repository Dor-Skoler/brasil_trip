<template>
  <header class="header">
    <div class="header-background"></div>
    <div class="header-content">
      <h1>🇧🇷 מדריך טיול ברזיל</h1>
      <p>אוקטובר 2025 • כמעט חודש של חוויות בלתי נשכחות</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20"><defs><radialGradient id="a" cx="50%" cy="50%"><stop offset="0%" stop-color="rgba(255,255,255,.1)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient></defs><circle cx="10" cy="10" r="10" fill="url(%23a)"><animate attributeName="cx" values="10;90;10" dur="10s" repeatCount="indefinite"/></circle><circle cx="50" cy="5" r="5" fill="url(%23a)"><animate attributeName="cx" values="50;20;80;50" dur="8s" repeatCount="indefinite"/></circle></svg>') repeat;
  opacity: 0.3;
}

.header-content {
  position: relative;
  z-index: 1;
}

.header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
}

.header p {
  font-size: 1.4rem;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .header {
    padding: 2rem 1rem;
  }
  
  .header h1 {
    font-size: 2.2rem;
  }
  
  .header p {
    font-size: 1.1rem;
  }
}
</style> 
<template>
  <div class="loading">
    <div class="spinner-container">
      <div class="spinner"></div>
      <div class="spinner-glow"></div>
    </div>
    <p>טוען תוכן...</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner'
}
</script>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  box-shadow: var(--shadow-2xl);
  z-index: 9999;
  min-width: 200px;
}

.spinner-container {
  position: relative;
  margin-bottom: 1.5rem;
}

.spinner {
  border: 3px solid transparent;
  border-top: 3px solid var(--primary-color);
  border-right: 3px solid var(--accent-color);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  position: relative;
  z-index: 2;
}

.spinner-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
  opacity: 0.3;
  animation: pulse 2s ease-in-out infinite;
  z-index: 1;
}

@keyframes spin {
  0% { 
    transform: rotate(0deg);
  }
  100% { 
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

.loading p {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1.125rem;
  text-align: center;
  margin: 0;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

@media (max-width: 480px) {
  .loading {
    padding: 2rem;
    min-width: 160px;
    border-radius: 20px;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
  }
  
  .loading p {
    font-size: 1rem;
  }
}
</style> 
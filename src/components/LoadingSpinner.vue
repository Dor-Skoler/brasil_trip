<template>
  <div class="loading">
    <div class="spinner"></div>
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
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  z-index: 9999;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading p {
  color: #2c3e50;
  font-weight: 500;
  font-size: 1.1rem;
}
</style> 
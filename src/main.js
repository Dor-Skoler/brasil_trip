import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'

// Import Leaflet CSS and JS
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default markers in Leaflet with Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const app = createApp(App)

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err, info)
}

app.mount('#app') 
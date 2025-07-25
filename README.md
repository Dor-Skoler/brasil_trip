# 🇧🇷 Brazil Travel Guide - October 2025

An interactive travel guide for a month-long Brazil trip featuring an interactive map, detailed itinerary, accommodation recommendations, activities, and comprehensive travel information.

## ✨ Features

- **📅 Interactive Timeline** - Visual timeline of the entire trip
- **🗺️ Interactive Map** - Clickable map with all destinations and route visualization
- **✈️ Flight Information** - Complete flight matrix with booking links
- **🏨 Hotel Recommendations** - 4-star hotels with ratings and booking links
- **🚌 Transportation** - Ground and sea transport options
- **🏃‍♂️ Activities** - Curated activities for each destination
- **🌤️ Weather & Health** - Weather info and vaccination requirements
- **💰 Budget Breakdown** - Detailed cost analysis
- **🛡️ Backup Plans** - Emergency plans and alternatives

## 🚀 Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **Leaflet** - Interactive maps
- **Font Awesome** - Icons
- **CSS3** - Modern styling with gradients and animations

## 📱 Destinations

1. **Rio de Janeiro** (Oct 3-8) - Christ the Redeemer, Sugarloaf, Copacabana
2. **São Paulo/Itu** (Oct 9-12) - Tomorrowland Brazil Festival
3. **Morro de São Paulo** (Oct 13-16) - Tropical beaches, zipline, sunset sailing
4. **Itacaré** (Oct 17-21) - Atlantic Forest, waterfalls, surfing, chocolate
5. **Jericoacoara** (Oct 22-28) - Sand dunes, lagoons, windsurfing, sunsets

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/brazil-travel-guide.git
cd brazil-travel-guide

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Build settings are configured in `netlify.toml`
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 📁 Project Structure

```
brazil-travel-guide/
├── public/                 # Static assets
├── src/
│   ├── components/         # Vue components
│   │   ├── tabs/          # Tab-specific components
│   │   ├── AppHeader.vue
│   │   ├── Navigation.vue
│   │   └── ...
│   ├── data/              # Travel data
│   │   └── travelData.js
│   ├── styles/            # Global styles
│   │   └── main.css
│   ├── App.vue            # Main app component
│   └── main.js            # App entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── netlify.toml           # Netlify deployment config
└── README.md              # This file
```

## 🎨 Customization

### Adding New Destinations

1. Update `src/data/travelData.js` with new location data
2. Add coordinates for map visualization
3. Include activities, accommodation, and links

### Styling

- Global styles: `src/styles/main.css`
- Component-specific styles: Use scoped styles in Vue components
- Color scheme: Modify CSS custom properties for consistent theming

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Configuration

### Environment Variables

Create a `.env` file for any API keys or configuration:

```env
# Example - not currently used but available for future features
VITE_MAPBOX_TOKEN=your_mapbox_token_here
VITE_API_URL=your_api_url_here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenStreetMap** - Map tiles and data
- **Leaflet** - Interactive mapping library
- **Font Awesome** - Beautiful icons
- **Vue.js Team** - Amazing framework
- **Vite Team** - Lightning-fast build tool

## 📞 Support

If you have any questions or need help with the project:

1. Check the [Issues](https://github.com/yourusername/brazil-travel-guide/issues) page
2. Create a new issue if needed
3. Contact the maintainer

---

**¡Boa viagem! Have an amazing trip to Brazil! 🇧🇷** 
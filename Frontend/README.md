
# Movie Database Application

A modern movie database application inspired by The Movie Database (TMDB), showcasing "Guardians of the Galaxy Vol. 2" with a sleek, responsive design.

## 🎬 Features

- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Movie Information**: Displays comprehensive movie data from OMDB API
- **Interactive Elements**: 
  - Trailer modal with embedded video player
  - Full-screen poster viewer
  - Cast information with character details
  - User reviews and ratings system
  - Movie recommendations carousel
- **Modern UI**: Clean, dark theme with smooth animations
- **Tab Navigation**: Multiple content sections (Overview, Cast, Videos, Reviews, etc.)

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Local Development Setup

1. **Clone the repository** (if working locally)
   ```bash
   git clone <your-repo-url>
   cd movie-database-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5000`
   - The application should load with movie data from the OMDB API

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CastSection.tsx
│   │   │   ├── TrailerModal.tsx
│   │   │   ├── PosterModal.tsx
│   │   │   └── ...
│   │   ├── App.tsx         # Main application component
│   │   ├── main.tsx        # Application entry point
│   │   └── index.css       # Global styles and animations
│   └── index.html          # HTML template
├── server/                 # Backend Express server
│   ├── index.ts            # Server entry point
│   └── routes.ts           # API routes
├── package.json            # Dependencies and scripts
└── vite.config.ts          # Build configuration
```

## 🛠 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development and building
- **Font Awesome** for icons
- **Custom animations** with CSS keyframes

### Backend
- **Express.js** with TypeScript
- **OMDB API** integration for movie data
- **CORS handling** for cross-origin requests

### Development Tools
- **Hot Module Replacement** (HMR) for instant updates
- **TypeScript** for type safety
- **ESLint** and **Prettier** for code quality

## 🎨 Key Improvements Made

### 1. Enhanced User Interaction
- **Interactive Rating System**: Users can rate movies with animated star feedback
- **Bookmark Functionality**: Save movies with satisfying animation feedback
- **Smooth Modal Transitions**: Professional-grade modal animations for trailers and posters

### 2. Advanced Animations
- **Page Load Animations**: Staggered fade-in effects for a polished first impression
- **Hover Effects**: Subtle lift and glow effects on interactive elements
- **Micro-interactions**: Button feedback, star ratings, and loading states

## 📱 Responsive Design

The application is fully responsive with:
- **Mobile-first approach**: Optimized for small screens
- **Flexible grid layouts**: Adapts to different screen sizes
- **Touch-friendly interactions**: Appropriate button sizes and spacing
- **Performance optimized**: Lazy loading and efficient rendering

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with HMR

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run check       # TypeScript type checking
```

## 🌐 API Integration

The application fetches movie data from the OMDB API:
- **Endpoint**: `http://www.omdbapi.com/?i=tt3896198&apikey=d2132124`
- **Movie ID**: `tt3896198` (Guardians of the Galaxy Vol. 2)
- **Fallback Data**: Includes hardcoded fallback for offline development

## 🎯 Vue.js Implementation Notes

While this current implementation uses React, here's how you could approach a Vue.js version:

### Vue.js Structure
```javascript
// Vue 3 Composition API approach
<template>
  <div class="movie-app">
    <HeroSection :movieData="movieData" @show-trailer="showTrailer" />
    <TabNavigation :activeTab="activeTab" @tab-change="setActiveTab" />
    <!-- Other components -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchMovieData } from './api/omdb'

const movieData = ref({})
const activeTab = ref('overview')
const loading = ref(true)

onMounted(async () => {
  try {
    movieData.value = await fetchMovieData('tt3896198')
  } catch (error) {
    console.error('Failed to fetch movie data:', error)
  } finally {
    loading.value = false
  }
})
</script>
```

### Key Vue.js Considerations
- Use **Vue 3 Composition API** for modern, type-safe code
- Implement **Pinia** for state management if needed
- Use **Vue Router** for navigation between tabs
- Leverage **Transition** components for smooth animations


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- **OMDB API** for providing movie data
- **The Movie Database (TMDB)** for design inspiration
- **Tailwind CSS** for the utility-first CSS framework
- **React & Vite** for the amazing developer experience
- **ChatGPT** (by OpenAI) and **DeepSeek** for assistance in debugging, code improvements, and documentation support
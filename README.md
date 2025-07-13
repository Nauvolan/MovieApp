# 🎬 MovieApp

<div align="center">

![MovieApp Banner](./src/assets/img/hero-img.png)

**A modern, responsive movie search application built with React + TypeScript + Vite**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TMDB](https://img.shields.io/badge/TMDB-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)

[🚀 Live Demo](#) | [📖 Documentation](#features) | [🐛 Report Bug](#issues) | [💡 Request Feature](#contributing)

</div>

---

## ✨ Features

🔍 **Smart Search** - Real-time movie search with instant results  
🎨 **Modern UI** - Clean, responsive design with smooth animations  
⚡ **Lightning Fast** - Built with Vite for optimal performance  
🛡️ **Type Safe** - Full TypeScript support for better development experience  
📱 **Mobile Ready** - Responsive design that works on all devices  
🎭 **Rich Data** - Powered by The Movie Database (TMDB) API  

## 🚀 Quick Start

### Prerequisites

Make sure you have installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movieapp.git
   cd movieapp
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your TMDB API key:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` and start exploring! 🎉

## 🏗️ Project Structure

```
movieapp/
├── 📁 public/             # Static assets
├── 📁 src/
│   ├── 📁 assets/         # Images, icons, etc.
│   ├── 📁 components/     # Reusable UI components
│   │   └── Search.tsx
│   ├── 📁 hooks/          # Custom React hooks
│   │   └── useMovie.ts
│   ├── 📁 interfaces/     # TypeScript type definitions
│   │   └── Movies.ts
│   ├── 📁 services/       # API calls and external services
│   │   └── api.ts
│   ├── App.tsx            # Main application component
│   ├── App.css            # Global styles
│   └── main.tsx           # Application entry point
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 vite.config.ts
└── 📄 README.md
```

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| ⚛️ **React** | Frontend Framework | ^18.0.0 |
| 📘 **TypeScript** | Type Safety | ^5.0.0 |
| ⚡ **Vite** | Build Tool | ^5.0.0 |
| 🎨 **CSS3** | Styling | - |
| 🌐 **TMDB API** | Movie Data | v3 |

## 🎯 Architecture

This project follows modern React best practices:

### 🏗️ **Component Architecture**
- **Functional components** with hooks
- **Custom hooks** for business logic separation
- **TypeScript interfaces** for type safety

### 📡 **Data Management**
- **Custom hooks** (`useMovie`) for state management
- **Service layer** for API abstractions
- **TypeScript** for type-safe data handling

### 🎨 **Styling Strategy**
- **CSS modules** for component-scoped styles
- **Responsive design** with mobile-first approach
- **Modern CSS** with flexbox and grid

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## 🌟 Key Features Explained

### 🔍 Smart Search Component
```typescript
// Real-time search with debouncing
const { movieList, isLoading, searchMovies } = useMovie();
```

### 🎭 Custom Hook Architecture
```typescript
// Encapsulated business logic
export const useMovie = () => {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  // ... more state and logic
};
```

### 🛡️ Type-Safe API Layer
```typescript
// Strongly typed API responses
export const fetchMovies = async ({ searchTerm }: SearchParams): Promise<TMDBResponse> => {
  // ... implementation
};
```

## 🌍 Environment Variables

Create a `.env` file in the root directory:

```env
# TMDB API Configuration
VITE_TMDB_API_KEY=your_api_key_here

# Optional: API Base URL (defaults to TMDB)
VITE_API_BASE_URL=https://api.themoviedb.org/3
```

> 💡 **Getting TMDB API Key**: Visit [TMDB API](https://www.themoviedb.org/settings/api) to get your free API key

## 🚀 Deployment

### Vercel (Recommended)
```bash
pnpm build
vercel --prod
```

### Netlify
```bash
pnpm build
# Upload dist/ folder to Netlify
```

### Docker
```bash
docker build -t movieapp .
docker run -p 3000:3000 movieapp
```

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### 📋 Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [React Team](https://reactjs.org/) for the amazing framework
- [Vite Team](https://vitejs.dev/) for the blazing fast build tool
- [TypeScript Team](https://www.typescriptlang.org/) for type safety

## 📞 Support

Having issues? We're here to help!

- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/movieapp/issues)
- 📖 **Documentation**: Check out the code comments and this README

---

<div align="center">

**Made with ❤️ by a passionate developer**

⭐ **Star this repo if you find it helpful!** ⭐

</div>
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

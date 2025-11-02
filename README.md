# Sawa Sawa Coffee - B2B Website

Premium specialty coffee B2B website showcasing single-origin Arabica beans from Lake Kivu, DRC.

## Overview

This is a React-based single-page application (SPA) designed for wholesale buyers, roasters, and importers to learn about Sawa Sawa Coffee's premium Arabica beans and request samples or pricing information.

## Features

- Responsive design with Tailwind CSS
- Interactive navigation with smooth scrolling
- Product information and pricing details
- Harvest season calendar
- Contact form (mailto integration)
- Modern UI with Lucide React icons

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
B2B Website/
├── src/
│   ├── components/
│   │   └── SawaSawaCoffee.jsx    # Main component
│   ├── App.jsx                    # Root component
│   ├── index.jsx                  # Entry point
│   └── index.css                  # Global styles + Tailwind
├── public/                        # Static assets
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
└── package.json                   # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Contact Information

For inquiries: sales@sawasawagroup.com

## License

© 2025 Sawa Sawa Coffee

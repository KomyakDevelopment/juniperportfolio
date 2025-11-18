# Juniper Portfolio - Roblox VFX & Animation Developer

A modern, animated portfolio website for a Roblox developer specializing in VFX and animations. Built with React, Framer Motion, and CSS Modules.

## Features

- ✨ **Smooth Animations**: Powered by Framer Motion for professional transitions
- 🎨 **Modern Design**: Clean, minimalist aesthetic with a cohesive color palette
- 📱 **Fully Responsive**: Works beautifully on desktop, tablet, and mobile
- 🚀 **Performance Optimized**: Fast loading and smooth scrolling
- 🎯 **Interactive Elements**: Hover effects, scroll animations, and engaging UI

## Tech Stack

- **React 18** - Modern React with functional components
- **Framer Motion** - Smooth animations and transitions
- **CSS Modules** - Scoped styling for maintainability
- **Google Fonts** - Inter and Space Grotesk for typography

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Navigation.js          # Fixed navigation with smooth scrolling
│   ├── Navigation.module.css
│   ├── Hero.js                # Hero section with particles and CTA
│   ├── Hero.module.css
│   ├── Portfolio.js           # Project showcase grid
│   ├── Portfolio.module.css
│   ├── About.js               # Bio and skills section
│   ├── About.module.css
│   ├── Contact.js             # Contact form and social links
│   └── Contact.module.css
├── App.js                     # Main app component
├── App.css
├── index.js                   # Entry point
└── index.css                  # Global styles
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --accent: #ec4899;
  /* ... */
}
```

### Portfolio Projects

Edit the `projects` array in `src/components/Portfolio.js` to add your own projects.

### Social Links

Update the `socialLinks` array in `src/components/Contact.js` with your actual social media profiles.

### Content

All text content can be customized in the respective component files.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.


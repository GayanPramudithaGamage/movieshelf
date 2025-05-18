# Movie Library Website

A modern, responsive web application for browsing and discovering TV series. Built with Vue.js and powered by the TVMaze API, this application provides an intuitive interface for exploring entertainment content.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **TV Series Search**: Real-time search functionality using TVMaze API
- **Interactive Animations**: Smooth transitions and effects powered by GSAP
- **Modern UI**: Clean, contemporary design built with Tailwind CSS
- **Performance Optimized**: Fast loading times with Vite build system

## Technology Stack

- **Frontend Framework**: Vue.js 3
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animation Library**: GSAP (GreenSock Animation Platform)
- **API**: TVMaze API (http://www.tvmaze.com/api)

## Project Structure

```
MOVI.../
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── img/
│   ├── components/
│   ├── dto/
│   ├── services/
│   ├── store/
│   └── views/
├── public/
├── App.vue
├── main.js
├── style.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Application Sections

The website is organized into several key sections:

- **Header**: Navigation menu with responsive design
- **Site Introduction**: Welcome section with project overview
- **Quick Info & Search**: Search functionality and Add Favorites 
- **Contact Us**: Contact information and communication channels
- **Footer**: Additional links and site information

## Installation

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd movieshelf
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linting checks

## API Integration

The application integrates with the TVMaze API to fetch TV series information. The API provides comprehensive data including:

- Show titles 
- descriptions
- Images

### API Endpoints Used

- Show details: `http://api.tvmaze.com/shows/{id}`

## Responsive Design

The application is fully responsive and adapts to different screen sizes:

- **Desktop**: Full-featured layout with sidebar navigation
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly interface with collapsible navigation

## Contributing

When contributing to this project, please follow these guidelines:

1. Create feature branches from the main branch
2. Write clear, descriptive commit messages
3. Test responsive design across multiple devices
4. Ensure all animations perform smoothly
5. Update documentation as needed

## Browser Compatibility

The application supports modern browsers including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

For questions or support regarding this project, please refer to the Contact Us section of the website or reach out through the provided communication channels.

---

Built with ❤️ using Vue.js, Vite, and modern web technologies.
# FitZone Gym - Static Website

## Overview
A static HTML/CSS/JS website for FitZone Gym. Originally converted from a React application, this standalone site can be served directly without any build process.

## Project Structure
```
/
├── index.html              # Home page (hero, stats, features, tips, gallery, CTA)
├── about.html              # About page (history, philosophy, team)
├── programs.html           # Programs page (program grid with details)
├── contact.html            # Contact page (booking form, map)
├── testimonials.html       # Testimonials page (reviews, form)
├── css/
│   └── styles.css          # Main stylesheet with CSS variables
├── js/
│   ├── main.js             # Main JavaScript (navigation, mobile menu)
│   ├── data.js             # Mock data
│   └── icons.js            # SVG icons helper
├── images/
│   └── RAINA_RITNESS_LOGO.png  # Logo image
└── replit.md               # Project documentation
```

## Running the Project
The project is served using Python's built-in HTTP server:
```bash
python -m http.server 5000 --bind 0.0.0.0
```

## Customization
- **Colors**: Modify CSS variables in `css/styles.css` under `:root`
- **Content**: Edit HTML files directly
- **Programs/Testimonials**: Edit JavaScript data in respective HTML files

## Recent Changes
- 2026-01-26: Initial Replit setup with Python HTTP server on port 5000

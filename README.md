# Fotojornalismo 2024/2025 Portfolio

[![Live Website](https://img.shields.io/badge/View-Live%20Website-e9b44c?style=for-the-badge)](https://anaacaarolina.github.io/fotojornalismo)

A personal photography portfolio website showcasing photojournalism exercises from the Fotojornalismo course at FLUP (Faculty of Arts and Humanities, University of Porto).

## About This Project

This website serves as a digital portfolio for photojournalism assignments completed during the 2024/2025 academic year. Each exercise explores different aspects of visual storytelling through photography, from historical reflections to urban soundscapes.

**Created by:** Ana Carolina Oliveira Pinto  
**Course:** Fotojornalismo - Licenciatura em Ciências da Comunicação (Multimedia)  
**Institution:** Faculdade de Letras da Universidade do Porto (FLUP)

## What You'll Find

The portfolio currently features four photographic essays:

1. **Historical Moments** - Reflecting on significant events worth capturing through photography
2. **Influential Photojournalists** - Exploring the work of contemporary photojournalism pioneers
3. **Campus Character Study** - Finding beauty in everyday objects around the university
4. **Urban Soundscapes** - Visualizing the sonic landscape of Porto through photography

Each exercise includes:

- The assignment prompt
- Publication date
- Detailed written reflections
- A curated photo gallery with captions
- Personal insights about the creative process

## How to View

Visit the live website: **[anaacaarolina.github.io/fotojornalismo](https://anaacaarolina.github.io/fotojornalismo)**

### Navigation

- **Início (Home)** - See the three most recent exercises
- **Exercícios (Exercises)** - Browse all assignments
- **Sobre (About)** - Learn more about the creator
- **Search** - Find exercises by keywords in Portuguese

## Technical Highlights

This project demonstrates practical web development skills:

- **Clean, Modern Design** - Responsive layout that works on phones, tablets, and computers
- **User-Friendly Interface** - Easy navigation and search functionality
- **Performance Optimized** - Fast loading times with no complex backend
- **Accessible** - Proper image descriptions and semantic HTML structure
- **Pure Code** - Built from scratch without website builders (no WordPress or Blogger)

### Technologies Used

- HTML5 for structure
- CSS3 for styling and visual design
- JavaScript (ES6 modules) for interactivity
- Bootstrap 5 framework for responsive grid system
- GitHub Pages for free hosting

## Design Philosophy

The website uses a warm color palette inspired by vintage photography:

- Dark brown (#1c110a) for headers
- Warm beige (#e4d6a7) for primary text
- Golden yellow (#e9b44c) for accents and highlights
- Soft cream background (#fff9e6) for comfortable reading

Typography combines the modern **Archivo** font family with touches of the decorative **Baskervville SC** font for a professional yet creative aesthetic.

## Project Structure

```
fotojornalismo/
├── index.html              # Homepage
├── exercicios.html         # Exercise gallery page
├── exercicio.html          # Individual exercise detail page
├── sobre.html              # About page
├── style.css               # All styling
├── exerciciosObject.js     # Exercise data (photos, text, dates)
├── index.js                # Homepage functionality
├── exercicios.js           # Gallery functionality
├── exercicio.js            # Detail page functionality
├── searchBar.js            # Search feature
└── assets/                 # Images organized by exercise
    ├── exercicio_1/
    ├── exercicio_2/
    ├── exercicio_3/
    └── exercicio_4/
```

## Key Features

### Dynamic Content Loading

All exercise content is stored in a single data file (`exerciciosObject.js`) and dynamically loaded onto pages, making updates quick and consistent.

### Smart Search

The search functionality looks through exercise titles, dates, descriptions, and even photo captions to help find specific content.

### Responsive Photo Galleries

Photo galleries automatically adjust their layout based on the number of images - single photos get more space, while multiple photos arrange in an elegant grid.

### Modal Image Viewer

Click any photo to view it in full size with its caption in an elegant overlay.

### Text Preview

Exercise previews on the homepage and gallery page intelligently truncate text at word boundaries for clean presentation.

## Photography Equipment

Exercises were photographed using a **Nikon D5600** DSLR camera, capturing the vibrant streets and atmosphere of Porto, Portugal.

## Skills Demonstrated

This project showcases:

- **Visual Communication** - Storytelling through photography
- **Written Communication** - Reflective essays in Portuguese
- **Web Development** - Front-end coding and design
- **Project Organization** - Structured file management
- **Problem Solving** - Building custom solutions instead of using templates
- **Attention to Detail** - Consistent styling and user experience
- **Self-Directed Learning** - Teaching programming skills independently

## Contact

**Ana Carolina Oliveira Pinto**  
Email: up202209088@up.pt  
GitHub: [@anaacaarolina](https://github.com/anaacaarolina)

## For Developers

If you're a developer interested in the technical implementation, see [.github/copilot-instructions.md](.github/copilot-instructions.md) for architecture details and coding conventions.

### Local Development

1. Clone this repository
2. Open `index.html` in a web browser (no build process needed)
3. Use a local server (like Live Server extension) for ES6 module support

### Adding New Exercises

1. Add exercise object to `exerciciosObject.js`
2. Create `assets/exercicio_{id}/` folder
3. Add images to the new folder
4. Refresh the website - changes appear automatically

_This portfolio is part of the academic coursework for Fotojornalismo at FLUP and demonstrates both creative and technical skills in multimedia communication._

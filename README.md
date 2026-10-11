# Jogender Singh - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing backend engineering, distributed microservices, and event-driven architecture with a VSCode-inspired dark theme.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS 4
- **VSCode-inspired Design**: Dark theme with floating code elements and animations
- **Dynamic Content**: All content driven by JSON configuration files
- **Fully Responsive**: Mobile-first design with smooth animations
- **Performance Optimized**: Server-side rendering and optimized assets
- **Type Safety**: Full TypeScript implementation with proper interfaces

## 🛠️ Tech Stack

- **Frontend**: React 19, Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4 with custom VSCode theme
- **Language**: TypeScript for type safety
- **Development**: Turbopack for fast development builds
- **Deployment**: Optimized for Vercel deployment

## 🏗️ Project Structure

```
src/
├── app/                   # Next.js app directory
│   ├── globals.css       # Global styles and VSCode theme
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/           # React components
│   └── sections/         # Page section components
│       ├── HeroSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ServicesSection.tsx
│       ├── ProjectsSection.tsx
│       └── ContactSection.tsx
├── data/                 # JSON configuration files
│   ├── personal.json     # Personal info and stats
│   ├── experience.json   # Professional experience
│   ├── services.json     # Services and tech stack
│   └── projects.json     # Portfolio projects
├── types/                # TypeScript interfaces
│   └── index.ts
└── utils/                # Utility functions
    └── data.ts           # Data loading utilities
```

## 🎨 Design System

### Color Palette

- **Background**: `#1e1e1e` (VSCode dark theme)
- **Foreground**: `#d4d4d4`
- **Primary Blue**: `#4fc1ff`
- **Secondary Blue**: `#007acc`
- **Accent Green**: `#4caf50`
- **Border**: `#333333`

### Typography

- **Primary Font**: Consolas, Monaco, Courier New (monospace)
- **Code Elements**: Syntax-highlighted code snippets
- **Brazilian Touch**: Flag emoji and cultural elements

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd jojo-portfolio-website/react-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Content Management

All content is managed through JSON files in the `src/data/` directory:

### Personal Information (`personal.json`)

- Personal details, contact info, and statistics
- Social media links and location

### Experience (`experience.json`)

- Professional timeline with roles and achievements
- Technologies used and project highlights

### Services (`services.json`)

- Service offerings and descriptions
- Complete tech stack with skill levels

### Projects (`projects.json`)

- Portfolio projects with categories
- Live demo and GitHub links

## 🎯 Features

### Dynamic Sections

- **Hero**: Animated introduction with statistics
- **Experience**: Interactive timeline with achievements
- **Services**: Tech stack showcase with skill levels
- **Projects**: Filterable portfolio gallery
- **Contact**: Contact form and social links

### Visual Effects

- **Floating Code**: Animated code snippets in background
- **Grid Pattern**: Subtle background grid overlay
- **Smooth Animations**: CSS transitions and keyframe animations
- **Hover Effects**: Interactive elements with glow effects

## 📱 Responsive Design

- **Mobile-first**: Optimized for mobile devices
- **Tablet-friendly**: Adapted layouts for tablet screens
- **Desktop**: Full-featured desktop experience
- **Accessibility**: WCAG compliance and screen reader support

## 🔧 Development

### Adding New Sections

1. Create component in `src/components/sections/`
2. Add data structure to `src/types/index.ts`
3. Create JSON data file in `src/data/`
4. Import and use in `src/app/page.tsx`

### Customizing Styles

- Edit `src/app/globals.css` for global styles
- Use Tailwind utility classes for component styling
- Custom animations defined in CSS keyframes

### Updating Content

- Modify JSON files in `src/data/` directory
- Changes reflect immediately in development
- No code changes required for content updates

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

### Other Platforms

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Acknowledgments

- VSCode team for design inspiration
- Brazilian tech community 🇧🇷
- Next.js and React teams for amazing frameworks

---

**Made with ❤️ in Brazil 🇧🇷**

_For questions or collaboration opportunities, feel free to reach out through the contact form on the website._

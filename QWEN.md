# Mohamed Ismail — Portfolio Website

## Project Overview

This is a personal portfolio website built with **Next.js 16** (App Router) for Mohamed Ismail, a **Junior Performance Marketer** specializing in Google Ads, Meta Ads, LinkedIn Ads, SEO, and data-driven campaign optimization.

The portfolio showcases professional skills, campaign case studies, certifications, and provides a contact form for potential clients or employers.

### Key Features
- **Hero Section** — Professional introduction with call-to-action
- **About Me** — Background and expertise overview
- **Skills & Tools** — Display of marketing technologies and AI tools
- **Certificates** — Professional certifications showcase
- **Resume** — Downloadable PDF resume
- **Contact Form** — Integrated with Web3Forms for email delivery
- **Dark/Light Theme Toggle** — Persistent theme preference via localStorage
- **Responsive Design** — Mobile-first with Tailwind CSS
- **Accessibility** — Skip-to-content link, semantic HTML, ARIA attributes
- **Security Headers** — X-Frame-Options, X-Content-Type-Options, Referrer-Policy

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Email Service** | Web3Forms + Nodemailer |
| **Fonts** | Inter, Poppins, JetBrains Mono (via next/font) |
| **Build Tool** | PostCSS |
| **Language** | JavaScript (ES Modules) |

## Project Structure

```
myportfolio/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # About page route
│   │   ├── api/                # API routes (currently empty)
│   │   ├── blog/               # Blog section/route
│   │   ├── contact/            # Contact page route
│   │   ├── projects/           # Projects page route
│   │   ├── globals.css         # Global styles & Tailwind imports
│   │   ├── layout.js           # Root layout with ThemeProvider, Navbar, Footer
│   │   ├── loading.js          # Loading UI
│   │   ├── not-found.js        # 404 page
│   │   └── page.js             # Homepage (main portfolio layout)
│   ├── components/             # React components
│   │   ├── ui/                 # Reusable UI primitives
│   │   │   ├── AnimatedCounter.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── PageProgressBar.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── SectionHeading.jsx
│   │   ├── AboutMe.jsx         # About section
│   │   ├── AITools.jsx         # AI tools showcase
│   │   ├── CampaignShowcase.jsx # Campaign case studies
│   │   ├── CaseStudies.jsx     # Additional case studies
│   │   ├── Certificates.js     # Certificates gallery
│   │   ├── ContactForm.jsx     # Contact form (Web3Forms)
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Hero.jsx            # Hero/landing section
│   │   ├── MetricsDashboard.jsx # Performance metrics display
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Resume.jsx          # Resume/CV section
│   │   ├── Skills.jsx          # Skills showcase
│   │   └── Testimonials.jsx    # Client testimonials
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/light theme provider
│   └── lib/
│       └── api.js              # API utilities (empty)
├── public/
│   ├── Mohamed_Ismail_Resume.pdf  # Downloadable resume
│   ├── assets/                    # Static images & media
│   └── certificates/              # Certificate images
├── next.config.mjs             # Next.js configuration (rewrites, headers, images)
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
├── jsconfig.json               # Path aliases (@/* -> ./src/*)
└── package.json                # Dependencies & scripts
```

## Building and Running

### Prerequisites
- Node.js (v18 or later recommended)
- npm, yarn, pnpm, or bun

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build
```bash
npm run build    # Build the application
npm run start    # Start the production server
```

### Environment Variables
The following environment variables are used:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms API key for contact form | Yes (for form submissions) |
| `NEXT_PUBLIC_API_URL` | Backend API URL for rewrites (default: `http://localhost:5000`) | No |

## Architecture Notes

### Routing
- Uses **Next.js App Router** with file-based routing
- API rewrites configured in `next.config.mjs` to proxy `/api/*` requests to a backend service (currently `http://localhost:5000`)
- Route groups: `about`, `blog`, `contact`, `projects` (sub-routes exist but may be minimal)

### Styling
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- Dark mode via class (`.dark`) toggled on `<html>` element
- CSS variables for font families (`--font-inter`, `--font-poppins`, `--font-jetbrains`)
- Color scheme: Primary accent `#6C63FF`, secondary `#00D9FF`

### Theme Management
- `ThemeContext` provides `theme`, `toggleTheme`, and `mounted` state
- Defaults to **dark mode**
- Persists preference in `localStorage` under key `portfolio-theme`

### Contact Form
- Integrated with **Web3Forms** API for serverless email delivery
- Form state managed with React `useState`
- Loading spinner during submission, success message on completion

### Security
- Security headers configured globally via `next.config.mjs`
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff` — prevents MIME sniffing
- `Referrer-Policy: origin-when-cross-origin` — controls referrer info

## Development Conventions

### File Naming
- Components: PascalCase (`.jsx` or `.js`)
- Pages: lowercase with hyphens if needed (`.js`)
- Config files: kebab-case or dotfile conventions

### Import Aliases
- Use `@/` prefix for imports from `src/` directory
- Example: `import Hero from "@/components/Hero"`

### Client vs Server Components
- Components using hooks (`useState`, `useEffect`, etc.) must include `"use client"` directive
- Layout and page components can be server components unless they wrap client components

### Component Structure
- Sections are modular: each section is a separate component in `src/components/`
- Reusable UI primitives in `src/components/ui/`
- Context providers in `src/context/`

## Public Assets

| File | Purpose |
|------|---------|
| `public/Mohamed_Ismail_Resume.pdf` | Downloadable resume/CV |
| `public/assets/` | Images, icons, media files |
| `public/certificates/` | Certificate images for gallery |

## Future Enhancements (Inferred)

- **API Routes**: `src/app/api/` is empty — backend integration pending
- **Blog**: Route exists but content not yet implemented
- **Projects**: Route exists for portfolio project showcase
- **Lib API**: `src/lib/api.js` is empty — utility functions can be added
- **Tests**: No test configuration present — consider adding Jest/Playwright

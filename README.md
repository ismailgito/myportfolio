# Mohamed Ismail | Personal Portfolio

A premium, high-performance, single-page personal portfolio website built for **Mohamed Ismail**, a **Junior Performance Marketer**. This project showcases his experience, expertise, certifications, and portfolio projects using modern web tools: **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Key Features

- **Single-Page Navigation**: Smooth, anchor-link navigation across sections (Hero, About, Skills, Certifications, Experience, Projects, Contact).
- **Responsive Modern Design**: Mobile-first design tailored with premium styling, customized color themes, and subtle micro-animations.
- **Dark/Light Mode Toggle**: Seamless theme support powered by React Context (`ThemeContext`) with local storage state persistence.
- **Dynamic Animations**: Handcrafted transitions and hover states built using Framer Motion.
- **Performance Marketing Showcases**: Custom sections outlining landing page optimizations, multi-channel attribution tracking models, and Claude token optimization.
- **Certifications Gallery**: An interactive courses and certifications block showcasing credentials from Google, HubSpot, Udemy, SEMrush, and Tute Dude.
- **Web3Forms Integration**: Fully functional contact form with real-time status feedback utilizing the Web3Forms serverless API.
- **GTM (Google Tag Manager) Integration**: Integrated analytics and event tracking code snippet support.
- **SEO & Security Optimized**: App router metadata (OpenGraph/Twitter cards), viewport configurations, and custom security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy).

---

## 🛠️ Tech Stack

| Technology | Category | Purpose |
| :--- | :--- | :--- |
| **Next.js 16** | Framework | React application framework (App Router) |
| **React 19** | Library | JavaScript library for building UI |
| **Tailwind CSS v4** | CSS | Utility-first styling with Modern CSS features |
| **Framer Motion** | Animation | Fluid UI and entry transitions |
| **Web3Forms** | Contact Form | Serverless email delivery integration |
| **React Icons** | Icons | SVG icons (Font Awesome) |
| **Google Tag Manager** | Analytics | Integration of tracking pixels and metrics |

---

## 📂 Project Structure

```text
myportfolio/
├── public/                     # Static assets
│   ├── assets/                 # Profile and other static imagery
│   ├── certificates/           # Certification files
│   ├── projects/               # Project PDF & PPT downloads
│   ├── Mohamed_Ismail_Resume.pdf  # Downloadable resume
│   └── Internship.pdf          # Internship certificate
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styling and Tailwind directives
│   │   ├── layout.js           # Root layout with GTM, theme provider, structure
│   │   ├── loading.js          # Next.js loader skeleton UI
│   │   ├── not-found.js        # Custom 404 page
│   │   └── page.js             # Main Single Page App (aggregates sections)
│   ├── components/             # Reusable UI sections
│   │   ├── ui/                 # Small atomic components
│   │   │   ├── AnimatedCounter.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── PageProgressBar.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── SectionHeading.jsx
│   │   ├── AboutMe.jsx         # Personal introduction summary
│   │   ├── Certificates.js     # Grid displaying certified credentials
│   │   ├── ContactForm.jsx     # Web3Forms custom form layout
│   │   ├── Footer.jsx          # Bottom copyright & connect info
│   │   ├── GoogleTagManager.jsx # Script injecting utility
│   │   ├── Hero.jsx            # Landing header with CTA
│   │   ├── Internships.jsx     # Details on past professional roles
│   │   ├── MarketingCasestudies.jsx # Performance metrics & insights
│   │   ├── Navbar.jsx          # Dynamic header with theme & menu toggles
│   │   ├── PerformanceShowcases.jsx # Performance metrics display components
│   │   ├── Projects.jsx        # Project showcases & file downloads
│   │   ├── Resume.jsx          # Resume section prompting download
│   │   └── Skills.jsx          # Interactive list of tools
│   ├── context/
│   │   └── ThemeContext.jsx    # React Context state for Light/Dark Mode
│   └── lib/
│       └── api.js              # API interface utilities
├── next.config.mjs             # Next.js config (headers, image patterns, rewrites)
├── package.json                # Dependencies and npm scripts
└── postcss.config.mjs          # PostCSS configuration
```

---

## 💻 Getting Started

### Prerequisites

Make sure you have Node.js 18.x or later installed on your system.

### 1. Clone & Install Dependencies

Clone this repository to your local machine and install packages:

```bash
git clone https://github.com/ismailgito/myportfolio.git
cd myportfolio
npm install
```

### 2. Environment Variables Setup

Create a `.env.local` file in the root of the project and specify your Web3Forms access key:

```env
# URL Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000

# Contact Form API Key (Web3Forms)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-web3forms-access-key-here

# Analytics (Optional)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

> [!NOTE]
> You can obtain a free access key from [Web3Forms](https://web3forms.com/) to start receiving contact form submissions directly in your email inbox.

### 3. Run the Development Server

Start the local server with the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Deployment & Build

To compile a production-ready optimized build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

### Deploying to Vercel

The easiest way to deploy this Next.js app is through the [Vercel Platform](https://vercel.com/new):

1. Commit and push your codebase to GitHub/GitLab/Bitbucket.
2. Link your repository inside your Vercel Dashboard.
3. Configure the environment variable `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in Vercel settings.
4. Click **Deploy**.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).

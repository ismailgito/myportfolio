# Mohamed Ismail | Personal Portfolio

A modern, high-performance personal portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. It serves as a digital resume and project showcase for my work as a Junior Performance Marketer.

## 🚀 Built With

- **[Next.js](https://nextjs.org/)** (v16) - React framework
- **[React](https://react.dev/)** (v19) - JavaScript library for user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** (v4) - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library for React
- **Nodemailer** - For the Contact Form API processing
- **@next/third-parties** - Google Tag Manager integration

## 🌟 Features

- **Responsive Design**: Fully responsive layout tailored for mobile, tablet, and desktop devices.
- **Dark/Light Mode**: Seamless user-toggled theme support using React Context (`ThemeProvider`).
- **Smooth Animations**: Engaging page transitions and scroll-triggered animations via Framer Motion.
- **SEO & Performance Optimized**: Utilizes Next.js App Router metadata, achieving excellent Lighthouse performance scores.
- **Integrated Analytics**: Connected with Google Analytics and Microsoft Clarity through Google Tag Manager.
- **Active Contact Form**: Full-stack contact form utilizing Next.js API routes and Nodemailer.

## 📂 Project Structure

```text
src/
├── app/                  # Next.js app router (pages & API routes)
│   ├── about/            # About Me page
│   ├── api/              # API routes (e.g., mailer)
│   ├── blog/             # Read my latest articles
│   ├── contact/          # Contact form page
│   ├── projects/         # Projects & case studies
│   └── layout.js         # Root layout with providers & metadata
├── components/           # Reusable React components (Navbar, Footer, ui/, etc.)
├── context/              # React Context (ThemeProvider)
└── lib/                  # Utility functions and configurations
public/                   # Static assets (images, icons, etc.)
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository (or navigate to the directory):**
```bash
git clone https://github.com/your-username/myportfolio.git
cd myportfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Ensure you have a `.env.local` file in the root directory. You will likely need variables for your Nodemailer configuration:
```env
# Example .env.local
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_app_specific_password
```

4. **Start the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🚀 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).
1. Push your local code to a GitHub repository.
2. Import the project into Vercel.
3. Set your environment variables in the Vercel project settings.
4. Deploy!

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

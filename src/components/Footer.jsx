// PORTFOLIO/myportfolio/src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A0A0B] py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Mohamed Ismail. All rights reserved.
        </p>
        <p className="text-gray-400 dark:text-gray-500 text-xs mt-2">
          Built with Next.js, Tailwind CSS & ❤️
        </p>
      </div>
    </footer>
  );
}
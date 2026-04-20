// PORTFOLIO/myportfolio/src/app/not-found.js

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg pt-20">
      <div className="text-center px-4">
        {/* 404 Number */}
        <h1 className="text-8xl sm:text-9xl font-bold gradient-text mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Back Home Button */}
        <Link
          href="/"
          className="
            inline-block px-8 py-3 rounded-lg
            bg-primary hover:bg-primary/80
            text-white font-semibold
            transition-all duration-300
            shadow-glow hover:shadow-glow-lg
          "
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
// PORTFOLIO/myportfolio/src/app/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />

        {/* Text */}
        <p className="text-gray-400 text-sm font-mono animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
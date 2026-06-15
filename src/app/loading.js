// src/app/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-accent/20 border-t-accent animate-spin" />
        <p className="text-accent text-xs font-headline font-bold tracking-widest uppercase animate-pulse">
          Loading Dashboard...
        </p>
      </div>
    </div>
  );
}

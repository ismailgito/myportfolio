// src/app/not-found.js
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-apptext pt-20 electric-grid">
      <div className="text-center px-4 border-2 border-accent bg-surface p-8 md:p-12 max-w-md">
        <h1 className="text-7xl sm:text-8xl font-headline font-black text-accent mb-2 tracking-tighter">
          404 //
        </h1>

        <h2 className="text-xl sm:text-2xl font-headline font-bold uppercase text-apptext mb-4">
          ENDPOINT NOT FOUND
        </h2>

        <p className="text-xs sm:text-sm font-body text-muted max-w-xs mx-auto mb-8 leading-relaxed">
          The requested resource is missing or has been reallocated in the budget shift.
        </p>

        <Button href="/" variant="yellow" className="w-full">
          ← Return to Dashboard
        </Button>
      </div>
    </div>
  );
}

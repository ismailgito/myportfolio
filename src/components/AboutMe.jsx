import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
      <div className="bg-white dark:bg-[#1A1A2E] rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-white/10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-sm font-mono tracking-widest uppercase text-[#6C63FF]">
              About Me
            </h2>
            <h3 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
              Data-driven marketer with a passion for scaling brands.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I bridge the gap between creative storytelling and analytical
              rigor. My approach is simple: test, measure, optimize, and scale.
              Whether it's lowering CPA on Meta Ads or capturing high-intent
              leads on Google Search, I focus on metrics that impact the bottom
              line.
            </p>
          </div>
          {/* Profile Image */}
          <div className="w-full h-80 bg-gray-100 dark:bg-[#0A0A0B] rounded-2xl border border-gray-200 dark:border-white/10 flex items-center justify-center relative overflow-hidden group">
            <Image
              src="/assets/profile.webp"
              alt="Mohamed Ismail"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#6C63FF]/50 rounded-2xl transition-all duration-300 pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

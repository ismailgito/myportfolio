// PORTFOLIO/myportfolio/src/components/Skills.jsx

"use client"

export default function Skills() {
    return (
        <section id="skills" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
            <div className="text-center mb-12">
                <h2 className="text-sm font-mono tracking-widest uppercase text-[#6C63FF] mb-2">
                    My Arsenal
                </h2>
                <h3 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
                    Tools & Technologies
                </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {[
                    "Google Ads",
                    "Meta Ads",
                    "LinkedIn Ads",
                    "Google Analytics 4",
                    "Tag Manager",
                    "Looker Studio",
                    "SEO",
                    "A/B Testing",
                    "Excel / Sheets",
                ].map((skill) => (
                    <span
                        key={skill}
                        className="px-6 py-3 bg-white dark:bg-[#1A1A2E] border border-gray-100 dark:border-white/10 rounded-full text-gray-800 dark:text-gray-200 font-medium hover:border-[#6C63FF] hover:text-[#6C63FF] transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
};


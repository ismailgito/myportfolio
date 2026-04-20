// PORTFOLIO/myportfolio/src/components/Resume.jsx

"use client";

export default function Resume() {
  return (
    <section
      id="resume"
      className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full scroll-mt-24 text-center"
    >
      <div className="bg-gradient-to-br from-[#6C63FF] to-[#00D9FF] rounded-3xl p-1 md:p-1.5 shadow-lg">
        <div className="bg-white dark:bg-[#0A0A0B] rounded-[1.3rem] p-8 md:p-12 flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
            Ready to see the full picture?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Check out my complete professional background, education, and
            marketing certifications.
          </p>
          {/* Make sure "Mohamed_Ismail_Resume.pdf" is placed inside your "public" folder */}
          <a
            href="/Mohamed_Ismail_Resume.pdf"
            download="Mohamed_Ismail_Resume.pdf"
            className="px-8 py-4 bg-[#6C63FF] hover:bg-[#5a52e0] text-white rounded-lg font-bold shadow-lg hover:shadow-[#6C63FF]/30 transition-all hover:-translate-y-1"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
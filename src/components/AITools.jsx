// src/components/AITools.jsx

export default function AITools() {
  const tools = [
    {name: "Claude", URL: "https://claude.ai/"},
    {name: "ChatGPT", URL: "https://chat.openai.com/"},
    {name: "Gemini", URL: "https://gemini.google.com/"},
    {name: "Meta Llama", URL: "https://llama.meta.com/"},
    {name: "emergent", URL: "https://emergent.ai/"},
    {name: "Grok", URL: "https://grok.ai/"},
  ];

  return (
    <section 
      id="ai-tools" 
      className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-sm font-mono tracking-widest uppercase text-[#FF6584] mb-2">
          Force Multipliers
        </h2>
        <h3 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
          AI Tool Stack
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Leveraging cutting-edge AI to automate workflows, generate high-converting copy, and analyze complex marketing datasets.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#1A1A2E] border border-gray-100 dark:border-white/10 rounded-2xl p-6 text-center hover:shadow-lg hover:border-[#6C63FF] transition-all group"
          >
            <span className="font-bold text-gray-900 dark:text-white group-hover:text-[#6C63FF] transition-colors">
              {tool.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
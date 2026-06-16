export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold">
          Salman Raza
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          AI Engineer & AI Architect
        </p>
        <p className="mt-2 text-gray-400 max-w-xl">
          I build AI Agents, Automations, and Full-Stack Applications using Next.js, TypeScript, Python, and OpenAI APIs.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#projects" className="px-6 py-3 bg-white text-black rounded-xl font-medium">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-white rounded-xl">
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400">
          I am an AI Engineer focused on building real-world AI systems, automation pipelines, and scalable web applications.
          I specialize in Agentic AI systems, n8n automation, and modern web development using Next.js.
        </p>
      </section>

      {/* Skills */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Next.js", "TypeScript", "Python", "OpenAI", "n8n", "Supabase", "Tailwind", "Vercel"].map((skill) => (
            <div key={skill} className="p-4 border border-gray-800 rounded-xl text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold">AI E-commerce Agent</h3>
            <p className="text-gray-400 mt-2">Full-stack AI shopping assistant with automation.</p>
          </div>
          <div className="p-6 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold">Gym AI Automation</h3>
            <p className="text-gray-400 mt-2">Lead generation and automation system using AI workflows.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400">salman854raza@gmail.com</p>
      </section>

      <footer className="py-10 text-center text-gray-600">
        © {new Date().getFullYear()} Salman Raza. Built with Next.js
      </footer>
    </main>
  );
}
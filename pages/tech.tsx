import Head from 'next/head'

export default function Tech() {
  const technologies = [
    {
      category: "Web Development",
      description: "We specialize in modern web development using HTML5, CSS3, and JavaScript to create responsive, accessible websites.",
      items: ["HTML5", "CSS3", "JavaScript", "ES6+", "Responsive Design"]
    },
    {
      category: "TypeScript",
      description: "TypeScript is our preferred language for building robust, type-safe applications with better developer experience.",
      items: ["TypeScript", "Type Definitions", "Interfaces", "Generics", "Advanced Types"]
    },
    {
      category: "React",
      description: "We use React extensively for building interactive user interfaces and single-page applications.",
      items: ["React", "Hooks", "Context API", "Custom Hooks", "Performance Optimization"]
    },
    {
      category: "Next.js",
      description: "Next.js with TypeScript is our go-to framework for full-stack applications and modern web development.",
      items: ["Next.js", "Server-Side Rendering", "Static Generation", "API Routes", "Middleware"]
    },
    {
      category: "Backend Development",
      description: "We build robust backend systems and APIs using Node.js and modern server technologies.",
      items: ["Node.js", "Express", "REST APIs", "Authentication", "Database Integration"]
    },
    {
      category: "Database & APIs",
      description: "Our team has extensive experience with various databases and API integrations for scalable solutions.",
      items: ["MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Prisma"]
    }
  ]

  return (
    <>
      <Head>
        <title>Services - Vogelsang Designs</title>
        <meta name="description" content="Web development services and technologies offered by Vogelsang Designs." />
      </Head>

      <div className="min-h-screen pt-16">
        <section className="py-20">
          <div className="container-custom">
            <h1 className="text-5xl md:text-7xl font-bold mb-12">SERVICES</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <div key={tech.category} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-xl font-bold mb-4">{tech.category}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{tech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span key={item} className="tech-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 
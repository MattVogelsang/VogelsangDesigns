import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Trinity Insurance",
      description: "Modern insurance platform with advanced user management and policy tracking",
      image: "/images/trinity-insurance.jpg",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://www.trinityinv.net/"
    },
    {
      id: 2,
      title: "Project Atlas",
      description: "Interactive project management tool with 3D visualization and team collaboration",
      image: "/images/project-atlas.jpg",
      tech: ["React", "Three.js", "WebGL"],
      link: "https://project-atlas-weld.vercel.app"
    },
    {
      id: 3,
      title: "Classico",
      description: "Elegant e-commerce platform for classic and vintage products",
      image: "/images/classico.jpg",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      link: "https://www.ridewithclassico.com/"
    },
    {
      id: 4,
      title: "Swim with Sara",
      description: "Swimming lesson booking platform with instructor profiles and scheduling",
      image: "/images/swim-with-sara.jpg",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
      link: "https://swimwithsara.vercel.app/"
    }
  ]

  return (
    <>
      <Head>
        <title>Vogelsang Designs - Modern Web Design & Development Studio</title>
        <meta name="description" content="Vogelsang Designs is a modern web design and development studio that helps brands build beautiful, functional, and responsive digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-accent) 100%)' }}>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl">
              {/* Logo */}
              <div className="mb-6 sm:mb-8 flex justify-center items-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 hover-rotate">
                  <Image
                    src="/images/LogoVD.png"
                    alt="Vogelsang Designs Logo"
                    fill
                    className="object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 text-gradient neon-text floating leading-tight">
                Web Design
                <br />
                & Development
              </h1>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 neon-text slide-in-left leading-tight" style={{ color: 'var(--text-primary)' }}>
                Vogelsang Designs
              </h2>

              <div className="prose prose-lg max-w-3xl slide-in-right">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 neon-text" style={{ color: 'var(--text-accent)' }}>ABOUT OUR STUDIO</h3>
                <p className="text-lg sm:text-xl leading-relaxed mb-4 sm:mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Vogelsang Designs is a modern web design and development studio that helps brands build beautiful, functional, and responsive digital experiences. We combine clean design, thoughtful user experience, and modern technology to deliver websites that not only look great — they work flawlessly.
                </p>
                <p className="text-lg sm:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Our team specializes in building fast, scalable, and accessible websites using modern technologies like React, Next.js, and Vue. Whether you're launching a new site, refreshing your brand, or creating something fully custom, Vogelsang Designs brings your vision to life with precision, creativity, and clean code — pixel by pixel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-12 sm:py-16 md:py-20 section-accent">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gradient neon-text bounce-in text-center sm:text-left">FEATURED WORK</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className="project-card card-hover fade-in-up pulse-glow" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative h-48 sm:h-56 md:h-64 cursor-pointer group">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 group-hover:to-transparent transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm sm:text-base">
                          View Website
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-cyan-400">{project.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-badge text-xs sm:text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Link href="/projects" className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4">
                View All Work
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 md:py-20 section-gradient">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-gradient neon-text bounce-in text-center sm:text-left">OUR SERVICES</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="fade-in-up p-4 sm:p-6 border border-cyan-400/30 rounded-lg hover-rotate transition-all duration-300 backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-cyan-400 neon-text">🖥️ Custom Website Design</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Unique, responsive, and visually engaging designs made to reflect your brand identity.</p>
              </div>
              
              <div className="fade-in-up p-4 sm:p-6 border border-blue-400/30 rounded-lg hover-rotate transition-all duration-300 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-400 neon-text">⚙️ Frontend Development</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Fast, modern, and maintainable code using frameworks like React, Next.js, and Vue.</p>
              </div>
              
              <div className="fade-in-up p-4 sm:p-6 border border-purple-400/30 rounded-lg hover-rotate transition-all duration-300 backdrop-blur-sm" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-purple-400 neon-text">🛒 E-Commerce Development</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Powerful and clean online stores with seamless checkout experiences.</p>
              </div>
              
              <div className="fade-in-up p-4 sm:p-6 border border-green-400/30 rounded-lg hover-rotate transition-all duration-300 backdrop-blur-sm" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-green-400 neon-text">📱 Mobile Optimization</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Fully responsive designs built to look and work perfectly on any device.</p>
              </div>
              
              <div className="fade-in-up p-4 sm:p-6 border border-yellow-400/30 rounded-lg hover-rotate transition-all duration-300 backdrop-blur-sm" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-yellow-400 neon-text">🎯 Landing Pages & Marketing</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">High-converting, performance-focused pages to help you generate leads.</p>
              </div>
              
              <div className="fade-in-up p-4 sm:p-6 border border-red-400/30 rounded-lg hover-rotate transition-all duration-300 backdrop-blur-sm" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-red-400 neon-text">🚀 Performance Optimization</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Speed matters. We fine-tune every site for fast load times and accessibility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-purple-900 via-pink-800 to-red-800">
          <div className="container-custom text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white neon-text floating leading-tight">LET'S WORK TOGETHER</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200">Ready to build something amazing?</p>
            <Link href="/contact" className="btn-primary text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 hover-slide">
              GET IN TOUCH
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Trinity Insurance",
      description: "Modern insurance platform with advanced user management, policy tracking, and automated claims processing. Features a comprehensive dashboard for agents and customers.",
      image: "/images/trinity-insurance.jpg",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      link: "https://www.trinityinv.net/",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Project Atlas",
      description: "Interactive project management tool with 3D visualization, team collaboration features, and real-time updates. Designed for complex project planning and execution.",
      image: "/images/project-atlas.jpg",
      tech: ["React", "Three.js", "WebGL", "Node.js", "Socket.io"],
      link: "https://project-atlas-weld.vercel.app",
      category: "frontend"
    },

    {
      id: 3,
      title: "Swim with Sara",
      description: "Swimming lesson booking platform with instructor profiles, real-time scheduling, and payment processing. Includes a mobile-responsive design for on-the-go bookings.",
      image: "/images/swim-with-sara.jpg",
      tech: ["Next.js", "PostgreSQL", "Stripe", "Tailwind", "TypeScript"],
      link: "https://swimwithsara.vercel.app/",
      category: "fullstack"
    },
    {
      id: 4,
      title: "Classico",
      description: "Elegant e-commerce platform for classic and vintage products. Features advanced filtering, wishlist functionality, and secure checkout with multiple payment options.",
      image: "/images/classico.jpg",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind", "Framer Motion"],
      link: "https://www.ridewithclassico.com/",
      category: "frontend"
    },
        {
      id: 5,
      title: "Shop23",
      description: "Modern retail platform with advanced inventory management, real-time analytics, and multi-vendor support. Includes a robust admin dashboard and mobile app.",
      image: "/images/Shop23.jpg",
      tech: ["Next.js", "PostgreSQL", "Stripe", "TypeScript", "Redis"],
      link: "https://project3-shop23.onrender.com/",
      category: "fullstack"
    },
    {
      id: 6,
      title: "Launching Soon",
      description: "Coming soon page with countdown timer, email collection, and social media integration. Features modern animations and responsive design.",
      image: "/images/launching-soon.jpg",
      tech: ["Next.js", "Tailwind", "Framer Motion", "EmailJS"],
      link: "https://launching-soon.com",
      category: "frontend"
    },
    {
      id: 7,
      title: "Richy Landscaping",
      description: "Professional portfolio and business website for Richy Landscaping. Features modern design, contact forms, and showcase of work and services.",
      image: "/images/Landscape.jpg",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      link: "https://richys-landscaping.webflow.io/",
      category: "frontend"
    }
  ]

  return (
    <>
      <Head>
        <title>Work - Vogelsang Designs</title>
        <meta name="description" content="Explore Vogelsang Designs' portfolio of web development projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen pt-16">
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container-custom">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 text-center sm:text-left">WORK</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <div key={project.id} className="project-card card-hover fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative h-48 sm:h-56 md:h-64 cursor-pointer group">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm sm:text-base">
                          View Website
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{project.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap mb-3 sm:mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-badge text-xs sm:text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a href={project.link} className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base">
                        View Project →
                      </a>
                    </div>
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

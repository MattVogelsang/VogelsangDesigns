import { motion } from 'framer-motion'
import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'
import { useState } from 'react'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with React and Node.js, featuring real-time inventory management and secure payment processing.",
      image: "/project1.jpg",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      category: "fullstack"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration using OpenAI's GPT model for intelligent conversations.",
      image: "/project2.jpg",
      tech: ["Next.js", "OpenAI", "Socket.io", "Tailwind"],
      link: "#",
      category: "fullstack"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Creative portfolio with smooth animations, 3D effects, and modern design principles.",
      image: "/project3.jpg",
      tech: ["React", "Framer Motion", "Three.js", "GSAP"],
      link: "#",
      category: "frontend"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with real-time data visualization and location-based forecasts.",
      image: "/project4.jpg",
      tech: ["Vue.js", "Chart.js", "Weather API", "PWA"],
      link: "#",
      category: "frontend"
    },
    {
      id: 5,
      title: "Task Management API",
      description: "RESTful API for task management with authentication, real-time updates, and comprehensive documentation.",
      image: "/project5.jpg",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
      link: "#",
      category: "backend"
    },
    {
      id: 6,
      title: "Social Media Analytics",
      description: "Analytics platform for social media metrics with data visualization and reporting features.",
      image: "/project6.jpg",
      tech: ["Python", "Django", "React", "D3.js"],
      link: "#",
      category: "fullstack"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <>
      <Head>
        <title>Projects - Vogelsangdesigns</title>
        <meta name="description" content="Explore Matthew Vogelsang's portfolio of web development projects." />
      </Head>

      <div className="min-h-screen pt-20">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
                My Projects
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                A collection of my latest work showcasing innovation, creativity, and technical expertise
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-purple-600 text-white'
                      : 'glass-effect text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-white/60">No projects found in this category.</p>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

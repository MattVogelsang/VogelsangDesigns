import { motion } from 'framer-motion'
import Head from 'next/head'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with React and Node.js",
      image: "/project1.jpg",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat with AI integration using OpenAI",
      image: "/project2.jpg",
      tech: ["Next.js", "OpenAI", "Socket.io", "Tailwind"],
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Creative portfolio with animations and modern design",
      image: "/project3.jpg",
      tech: ["React", "Framer Motion", "Three.js", "GSAP"],
      link: "#"
    }
  ]

  return (
    <>
      <Head>
        <title>Vogelsangdesigns - Creative Portfolio</title>
        <meta name="description" content="Matthew Vogelsang's creative portfolio showcasing innovative web design and development." />
      </Head>

      <div className="min-h-screen">
        <Hero />
        
        {/* Featured Projects Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Explore my latest work showcasing innovative design and cutting-edge technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                Skills & Technologies
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "React", "Next.js", "TypeScript", "Node.js",
                "Python", "MongoDB", "PostgreSQL", "AWS",
                "Docker", "Git", "Figma", "Three.js"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="glass-effect rounded-xl p-6 text-center hover-lift"
                >
                  <h3 className="text-lg font-semibold">{skill}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

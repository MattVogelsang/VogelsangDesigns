import { motion } from 'framer-motion'
import Head from 'next/head'
import { Code, Palette, Zap, Users } from 'lucide-react'

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Three.js"] },
    { category: "Other", items: ["UI/UX Design", "API Design", "Performance Optimization", "Testing"] }
  ]

  const experiences = [
    {
      year: "2023 - Present",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc",
      description: "Leading development of scalable web applications and mentoring junior developers."
    },
    {
      year: "2021 - 2023",
      title: "Frontend Developer",
      company: "Digital Creations",
      description: "Built responsive user interfaces and implemented modern design systems."
    },
    {
      year: "2019 - 2021",
      title: "Junior Developer",
      company: "Startup Studio",
      description: "Collaborated on various projects and learned modern web development practices."
    }
  ]

  return (
    <>
      <Head>
        <title>About - Vogelsangdesigns</title>
        <meta name="description" content="Learn more about Matthew Vogelsang and his journey in web development." />
      </Head>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
                About Me
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Passionate developer creating digital experiences that inspire and innovate
              </p>
            </motion.div>

            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect rounded-2xl p-8 mb-16"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Matthew Vogelsang</h2>
                  <p className="text-lg text-white/80 mb-6">
                    I'm a creative developer with a passion for building beautiful, functional, and user-centered digital experiences. 
                    With over 4 years of experience in web development, I've had the privilege of working on a variety of projects 
                    that have shaped my approach to design and development.
                  </p>
                  <p className="text-lg text-white/80">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                    or sharing knowledge with the developer community.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl">
                    ��‍💻
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Skills & Expertise</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className="glass-effect rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    className="glass-effect rounded-xl p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-purple-400 font-medium">{exp.year}</span>
                    </div>
                    <p className="text-purple-300 mb-2">{exp.company}</p>
                    <p className="text-white/80">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

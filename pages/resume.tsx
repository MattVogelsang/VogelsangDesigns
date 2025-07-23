import Head from 'next/head'

export default function Resume() {
  const experience = [
    {
      year: "2023 - Present",
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"]
    },
    {
      year: "2021 - 2023",
      title: "Frontend Developer",
      company: "Digital Creations",
      description: "Built responsive user interfaces and implemented modern design systems.",
      skills: ["React", "Vue.js", "Tailwind CSS", "Framer Motion", "Figma"]
    },
    {
      year: "2019 - 2021",
      title: "Junior Developer",
      company: "Startup Studio",
      description: "Collaborated on various projects and learned modern web development practices.",
      skills: ["JavaScript", "HTML", "CSS", "Git", "Agile"]
    }
  ]

  const education = [
    {
      year: "2015 - 2019",
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      description: "Focused on web development, algorithms, and software engineering principles."
    }
  ]

  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Framer Motion"],
    "Backend": ["Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB"],
    "Tools": ["Git", "Docker", "AWS", "Figma", "Three.js", "Webpack"],
    "Other": ["UI/UX Design", "API Design", "Performance Optimization", "Testing", "Agile"]
  }

  return (
    <>
      <Head>
        <title>Resume - Matthew Vogelsang</title>
        <meta name="description" content="Matthew Vogelsang's professional resume and experience." />
      </Head>

      <div className="min-h-screen pt-16">
        <section className="py-20">
          <div className="container-custom">
            <h1 className="text-5xl md:text-7xl font-bold mb-12">RESUME</h1>
            
            <div className="max-w-4xl">
              {/* Experience */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Experience</h2>
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <span className="text-gray-600 font-medium">{exp.year}</span>
                      </div>
                      <p className="text-blue-600 mb-2">{exp.company}</p>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="tech-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <span className="text-gray-600 font-medium">{edu.year}</span>
                      </div>
                      <p className="text-blue-600 mb-2">{edu.school}</p>
                      <p className="text-gray-600">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {Object.entries(skills).map(([category, skillList], index) => (
                    <div key={category} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <h3 className="text-xl font-bold mb-4">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <span key={skill} className="tech-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Resume */}
              <div className="mt-12 text-center">
                <a 
                  href="/resume.pdf" 
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 
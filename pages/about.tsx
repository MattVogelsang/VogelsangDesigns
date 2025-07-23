import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  const services = [
    {
      icon: "🖥️",
      title: "Custom Website Design",
      description: "Unique, responsive, and visually engaging designs made to reflect your brand identity."
    },
    {
      icon: "⚙️",
      title: "Frontend Development",
      description: "Fast, modern, and maintainable code using frameworks like React, Next.js, and Vue."
    },
    {
      icon: "🛒",
      title: "E-Commerce Development",
      description: "Powerful and clean online stores with seamless checkout experiences (Shopify, Stripe, etc.)."
    },
    {
      icon: "📱",
      title: "Mobile Optimization",
      description: "Fully responsive designs built to look and work perfectly on any device."
    },
    {
      icon: "🎯",
      title: "Landing Pages & Marketing Sites",
      description: "High-converting, performance-focused pages to help you generate leads or drive sales."
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "User-first design systems with strong attention to usability, layout, and detail."
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      description: "Speed matters. We fine-tune every site for fast load times, SEO, and accessibility."
    },
    {
      icon: "🎵",
      title: "Interactive Features & Background Music",
      description: "Custom animations, sound integration, and creative media to elevate the user experience."
    }
  ]

                const testimonials = [
                {
                  quote: "Working with Vogelsang Designs was seamless from start to finish. Our new site is stunning, fast, and exactly what we envisioned.",
                  author: "Richy's Landscaping"
                },
                    {
                  quote: "The attention to detail and creativity was next level. Highly recommend for any serious brand.",
                  author: "Classico"
                }
  ]

  return (
    <>
      <Head>
        <title>About - Vogelsang Designs</title>
        <meta name="description" content="Vogelsang Designs is a modern web design and development studio that helps brands build beautiful, functional, and responsive digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen pt-16">
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 text-center sm:text-left">ABOUT US</h1>

                          {/* Main Content */}
                          <div className="prose prose-lg max-w-none mb-12 sm:mb-16">
                            <p className="text-lg sm:text-xl leading-relaxed mb-4 sm:mb-6 text-gray-600">
                              Vogelsang Designs is a creative web studio crafting sleek, high-performing websites tailored to your brand's goals. We blend modern aesthetics, intuitive user experience, and cutting-edge technologies to deliver digital solutions that are as functional as they are visually striking.
                            </p>
                            <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
                              From dynamic startup launches to complete brand overhauls, we specialize in building fast, scalable, and accessible websites with tools like React, Next.js, and Vue. Whether you're starting fresh or reimagining your presence — Vogelsang Designs turns ideas into seamless digital experiences, one pixel at a time.
                            </p>
                          </div>

              {/* Services Section */}
              <div className="mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">Our Services</h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 text-center sm:text-left">
                  We offer a range of web design and development services tailored to your needs:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="fade-in-up p-4 sm:p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <span className="text-2xl sm:text-3xl">{service.icon}</span>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold mb-2 leading-tight">{service.title}</h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials Section */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">Client Testimonials</h2>
                <div className="space-y-4 sm:space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="fade-in-up p-4 sm:p-6 bg-gray-50 rounded-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                      <blockquote className="text-base sm:text-lg italic text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <cite className="text-sm sm:text-base text-gray-600 font-medium">
                        — {testimonial.author}
                      </cite>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

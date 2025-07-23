import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Contact - Matthew Vogelsang</title>
        <meta name="description" content="Get in touch with Matthew Vogelsang for collaboration opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen pt-16">
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-4xl">
              {/* Logo */}
              <div className="mb-6 sm:mb-8 flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 hover-rotate">
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
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 text-center">CONTACT</h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Contact Form */}
                <div className="fade-in-up">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                        placeholder="Project inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm sm:text-base"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base py-3 sm:py-4"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6 sm:space-y-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h2>
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base">Email</h3>
                        <a href="mailto:vogelsangmatt@gmail.com" className="text-blue-600 hover:text-blue-800 text-sm sm:text-base">
                          vogelsangmatt@gmail.com
                        </a>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base">Phone</h3>
                        <a href="tel:+19546688674" className="text-blue-600 hover:text-blue-800 text-sm sm:text-base">
                          (954) 668-8674
                        </a>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base">Location</h3>
                        <p className="text-gray-600 text-sm sm:text-base">Miami, FL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

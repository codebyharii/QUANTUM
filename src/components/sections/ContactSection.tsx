import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-20 px-6 bg-black/50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-quantum-400">Get In Touch</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-quantum-300 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-quantum-900/50 border border-quantum-500/30 rounded-lg focus:border-quantum-400 focus:outline-none text-white transition"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-quantum-300 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-quantum-900/50 border border-quantum-500/30 rounded-lg focus:border-quantum-400 focus:outline-none text-white transition"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-quantum-300 text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-quantum-900/50 border border-quantum-500/30 rounded-lg focus:border-quantum-400 focus:outline-none text-white transition resize-none"
                placeholder="Your message..."
              />
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-quantum-500 to-quantum-600 text-white font-semibold rounded-lg hover:from-quantum-600 hover:to-quantum-700 transition"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

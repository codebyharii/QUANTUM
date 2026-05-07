import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-quantum-900/50 border-t border-quantum-500/20 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold text-quantum-400 mb-2">QUANTUM</h3>
            <p className="text-quantum-300 text-sm">Building immersive digital experiences</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-quantum-300 text-sm">
              <li><a href="#hero" className="hover:text-quantum-400 transition">Home</a></li>
              <li><a href="#projects" className="hover:text-quantum-400 transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-quantum-400 transition">Skills</a></li>
              <li><a href="#about" className="hover:text-quantum-400 transition">About</a></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-quantum-300 text-sm">
              <li><a href="#" className="hover:text-quantum-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-quantum-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-quantum-400 transition">GitHub</a></li>
              <li><a href="#" className="hover:text-quantum-400 transition">Twitter</a></li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {['GitHub', 'Twitter', 'LinkedIn', 'Discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-quantum-500/20 border border-quantum-500/40 flex items-center justify-center hover:bg-quantum-500/40 hover:border-quantum-400/60 transition text-sm font-semibold text-quantum-300 hover:text-quantum-400"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-quantum-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-quantum-300 text-sm">
            <p>&copy; {currentYear} Quantum. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-quantum-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-quantum-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-quantum-400 transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-quantum-400">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-96 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background gradient */}
              <div 
                className="absolute inset-0 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${project.colors.primary}20, ${project.colors.accent}20)`,
                }}
              />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 border border-quantum-500/30 group-hover:border-quantum-400/50 transition">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-quantum-300 text-sm mb-4">{project.description}</p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-quantum-500/20 text-quantum-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-quantum-400 hover:text-quantum-300 text-sm font-semibold flex items-center gap-2"
                  >
                    View Project →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

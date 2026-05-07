import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-quantum-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-quantum-400">About Me</h2>
          
          <div className="space-y-6 text-quantum-200">
            <p className="text-lg leading-relaxed">
              I'm a creative developer passionate about building immersive digital experiences. 
              With expertise in 3D graphics, web animations, and modern frontend technologies, 
              I craft websites that captivate and engage users.
            </p>
            
            <p className="text-lg leading-relaxed">
              My journey in web development started with a curiosity about how motion and 
              interactivity could transform digital experiences. Over the years, I've 
              mastered tools like React, Three.js, and GSAP to bring bold ideas to life.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new animation techniques, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8">
            {[
              { label: 'Projects', value: '25+' },
              { label: 'Clients', value: '40+' },
              { label: 'Experience', value: '5+ yrs' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-quantum-400 mb-2">{stat.value}</div>
                <div className="text-quantum-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

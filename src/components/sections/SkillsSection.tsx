import { motion } from 'framer-motion'

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Languages' },
  { name: 'Three.js', level: 85, category: 'Graphics' },
  { name: 'GSAP', level: 88, category: 'Animation' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'MongoDB', level: 80, category: 'Database' },
  { name: 'Tailwind CSS', level: 92, category: 'Styling' },
  { name: 'WebGL', level: 82, category: 'Graphics' },
]

export default function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-quantum-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-quantum-400">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-lg bg-gradient-to-br from-quantum-500/10 to-quantum-600/10 border border-quantum-500/20 hover:border-quantum-400/50 transition"
            >
              <div className="font-semibold text-quantum-300 mb-2">{skill.name}</div>
              <div className="text-xs text-quantum-400 mb-3">{skill.category}</div>
              <div className="w-full h-2 bg-quantum-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                  className="h-full bg-gradient-to-r from-quantum-500 to-quantum-400"
                />
              </div>
              <div className="text-xs text-quantum-300 mt-2">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-quantum-900 z-50">
      <div className="text-center">
        <motion.div
          className="w-20 h-20 border-4 border-quantum-500/30 border-t-quantum-400 rounded-full mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <h3 className="text-xl font-semibold text-quantum-400 mb-2">Loading QUANTUM</h3>
        <p className="text-quantum-300">Initializing 3D experience...</p>
      </div>
    </div>
  )
}

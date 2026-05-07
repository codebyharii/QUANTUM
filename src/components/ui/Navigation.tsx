export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-quantum-500">
          Q<span className="text-quantum-400">UANTUM</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm">
          <a href="#hero" className="hover:text-quantum-400 transition">Hero</a>
          <a href="#projects" className="hover:text-quantum-400 transition">Projects</a>
          <a href="#skills" className="hover:text-quantum-400 transition">Skills</a>
          <a href="#contact" className="hover:text-quantum-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}

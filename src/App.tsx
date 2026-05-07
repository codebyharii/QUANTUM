import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import Hero3D from './components/3d/Hero'
import ParticleSystem from './components/3d/ParticleSystem'
import Navigation from './components/ui/Navigation'
import Loading from './components/ui/Loading'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import BlogSection from './components/sections/BlogSection'
import Footer from './components/ui/Footer'
import { ThemeProvider } from './providers/ThemeProvider'
import { ErrorBoundary } from './components/ErrorBoundary'
import { useSEO } from './hooks/useSEO'



function HeroScene() {
  return (
    <>
      <PerspectiveCamera position={[0, 0, 5]} makeDefault />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} enablePan={false} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#5a7bff" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#2d2fff" />
      <Hero3D />
      <ParticleSystem />
      <Environment preset="night" />
    </>
  )
}

export default function App() {
  useSEO({
    title: 'Immersive 3D Portfolio',
    description: 'Award-winning 3D portfolio with advanced animations, interactive experiences, and cutting-edge web design.',
    keywords: ['3D', 'Portfolio', 'Web Design', 'React', 'Three.js', 'Animation'],
    twitterHandle: '@codebyharii',
  })

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="w-full min-h-screen bg-gradient-to-b from-quantum-900 via-black to-quantum-900">
          <Navigation />
          
          {/* Hero Section with 3D Canvas */}
          <section id="hero" className="relative w-full h-screen">
            <Canvas className="w-full h-full" dpr={[1, 2]}>
              <Suspense fallback={<Loading />}>
                <PerspectiveCamera position={[0, 0, 5]} makeDefault />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} enablePan={false} />
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1.2} color="#5a7bff" />
                <pointLight position={[-10, -10, 10]} intensity={0.8} color="#2d2fff" />
                <Hero3D />
                <ParticleSystem />
                <Environment preset="night" />
              </Suspense>
            </Canvas>
            
            {/* Hero Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <h1 className="text-6xl md:text-7xl font-bold text-center mb-4 animate-fadeIn">
                <span className="text-quantum-400">QUANTUM</span>
                <br />
                <span className="text-2xl md:text-4xl text-quantum-300">3D Portfolio Experience</span>
              </h1>
              <p className="text-quantum-300 text-lg md:text-xl max-w-2xl text-center mb-8">
                Immersive design with cutting-edge 3D graphics and interactive animations
              </p>
              <a 
                href="#projects"
                className="pointer-events-auto px-8 py-3 bg-quantum-500 hover:bg-quantum-600 text-white font-semibold rounded-lg transition transform hover:scale-105"
              >
                Explore My Work
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none">
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-quantum-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <ProjectsSection />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <SkillsSection />
          </section>

          {/* Testimonials Section */}
          <section id="testimonials">
            <TestimonialsSection />
          </section>

          {/* Blog Section */}
          <section id="blog">
            <BlogSection />
          </section>

          {/* About Section */}
          <section id="about">
            <AboutSection />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <ContactSection />
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

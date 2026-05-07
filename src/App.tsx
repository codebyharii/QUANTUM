import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Hero3D from './components/3d/Hero'
import Navigation from './components/ui/Navigation'

export default function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-quantum-900 to-black">
      <Navigation />
      
      <Canvas className="w-full h-full" dpr={[1, 2]}>
        <PerspectiveCamera position={[0, 0, 5]} makeDefault />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Hero3D />
      </Canvas>
    </div>
  )
}

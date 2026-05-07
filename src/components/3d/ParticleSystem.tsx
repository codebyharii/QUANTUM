import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { BufferGeometry } from 'three'

export default function ParticleSystem() {
  const ref = useRef<any>(null)
  const particlesCount = 1000

  const particles = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.0001
      ref.current.rotation.y += 0.0002
    }
  })

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial sizeAttenuation size={0.05} color="#5a7bff" />
    </Points>
  )
}

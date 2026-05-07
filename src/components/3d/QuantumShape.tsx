import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import { Color } from 'three'

const QuantumMaterial = shaderMaterial(
  {
    time: 0,
    color: new Color(0x5a7bff),
  },
  // Vertex Shader
  `
    uniform float time;
    
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying float vNoise;
    
    float noise(vec3 p) {
      return sin(p.x * 10.0 + time) * sin(p.y * 10.0) * sin(p.z * 10.0);
    }
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      
      vec3 pos = position;
      pos += normal * noise(position + time) * 0.1;
      
      vNoise = noise(position);
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 color;
    uniform float time;
    
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying float vNoise;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
      
      float diffuse = max(dot(normal, lightDir), 0.0);
      float fresnel = pow(1.0 - abs(dot(normal, -normalize(vPosition))), 3.0);
      
      vec3 finalColor = color * diffuse + color * fresnel * 0.5;
      
      gl_FragColor = vec4(finalColor, 0.9 + fresnel * 0.1);
    }
  `
)

export function QuantumShape() {
  const meshRef = useRef<any>(null)
  const materialRef = useRef<any>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001
      meshRef.current.rotation.y += 0.002
      meshRef.current.position.y = Math.sin(clock.elapsedTime) * 0.3
    }
    if (materialRef.current) {
      materialRef.current.time = clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2, 5]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          time: { value: 0 },
          color: { value: new Color('#5a7bff') },
        }}
        vertexShader={`
          uniform float time;
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            vec3 pos = position + normal * sin(time + position.x) * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 color;
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            vec3 normal = normalize(vNormal);
            float fresnel = pow(1.0 - abs(dot(normal, -normalize(vPosition))), 3.0);
            vec3 finalColor = color + color * fresnel * 0.3;
            gl_FragColor = vec4(finalColor, 0.95);
          }
        `}
      />
    </mesh>
  )
}

export default QuantumMaterial

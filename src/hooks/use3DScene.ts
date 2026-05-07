import { useRef } from 'react'
import { Scene, Camera, WebGLRenderer } from 'three'

export function use3DScene() {
  const sceneRef = useRef<Scene>(new Scene())
  const cameraRef = useRef<Camera | null>(null)
  const rendererRef = useRef<WebGLRenderer | null>(null)

  return {
    scene: sceneRef.current,
    camera: cameraRef,
    renderer: rendererRef,
  }
}

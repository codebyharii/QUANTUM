import { useGLTF } from '@react-three/drei'
import { useEffect, useState } from 'react'

export function useModel(url: string) {
  const [model, setModel] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loaded = await useGLTF.preload(url)
        setModel(loaded)
        setLoading(false)
      } catch (err: any) {
        setError(err.message)
        setLoading(false)
      }
    }

    loadModel()
  }, [url])

  return { model, loading, error }
}

export function preloadModels(urls: string[]) {
  urls.forEach(url => {
    useGLTF.preload(url)
  })
}

export const modelPaths = {
  hero: '/models/hero-shape.glb',
  project: '/models/project-model.glb',
  skill: '/models/skill-icon.glb',
}

import { useEffect, useState } from 'react'

interface SEOMeta {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  ogUrl?: string
  twitterHandle?: string
}

export function useSEO(meta: SEOMeta) {
  useEffect(() => {
    // Title
    document.title = `${meta.title} | QUANTUM`

    // Meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    const updateOGMeta = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    updateMeta('description', meta.description)
    updateMeta('keywords', meta.keywords.join(', '))
    
    if (meta.ogImage) {
      updateOGMeta('og:image', meta.ogImage)
    }
    if (meta.ogUrl) {
      updateOGMeta('og:url', meta.ogUrl)
    }
    if (meta.twitterHandle) {
      updateMeta('twitter:creator', meta.twitterHandle)
    }

  }, [meta])
}

export function useJsonLd(schema: Record<string, any>) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [schema])
}

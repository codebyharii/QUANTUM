export const COLORS = {
  primary: '#5a7bff',
  secondary: '#2d2fff',
  accent: '#ff0080',
  dark: '#1a1a4d',
  darker: '#0f0f1e',
}

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
}

export const CANVAS_CONFIG = {
  width: typeof window !== 'undefined' ? window.innerWidth : 1024,
  height: typeof window !== 'undefined' ? window.innerHeight : 768,
  dpr: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
}

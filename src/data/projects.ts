export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  technologies: string[]
  image: string
  model3d?: string
  colors: {
    primary: string
    accent: string
  }
  links: {
    live?: string
    github?: string
  }
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: '3D Portfolio Website',
    description: 'Immersive 3D portfolio with advanced animations',
    fullDescription: 'An award-winning 3D portfolio website built with React, Three.js, and GSAP. Features 360-degree interactions, particle systems, and scroll-triggered animations.',
    technologies: ['React', 'Three.js', 'GSAP', 'TypeScript'],
    image: '/projects/portfolio.jpg',
    colors: { primary: '#5a7bff', accent: '#ff0080' },
    links: { github: 'https://github.com' },
    featured: true,
  },
  {
    id: 'project-2',
    title: 'AI Chat Application',
    description: 'Real-time chat with AI integration',
    fullDescription: 'A full-stack chat application with real-time messaging, user authentication, and AI-powered responses.',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    image: '/projects/chat.jpg',
    colors: { primary: '#00ff88', accent: '#00cc66' },
    links: { github: 'https://github.com' },
    featured: true,
  },
  {
    id: 'project-3',
    title: 'E-Commerce Platform',
    description: 'Full-featured online store',
    fullDescription: 'A complete e-commerce solution with product catalog, shopping cart, payment processing, and admin dashboard.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    image: '/projects/ecommerce.jpg',
    colors: { primary: '#ff6b6b', accent: '#ff8787' },
    links: { github: 'https://github.com' },
    featured: false,
  },
]

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  date: string
  tags: string[]
  image: string
  readTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Future of 3D Web Design',
    slug: 'future-3d-web-design',
    excerpt: 'Exploring how WebGL and Three.js are reshaping modern web experiences.',
    content: 'In this comprehensive guide, we explore the cutting-edge technologies...',
    author: 'Hari Om Singh',
    date: '2026-05-01',
    tags: ['3D', 'WebGL', 'Design'],
    image: '/blog/3d-web.jpg',
    readTime: 5,
  },
  {
    id: 'blog-2',
    title: 'Mastering GSAP Animations',
    slug: 'mastering-gsap',
    excerpt: 'Learn advanced animation techniques with GSAP for professional results.',
    content: 'GSAP is one of the most powerful animation libraries available...',
    author: 'Hari Om Singh',
    date: '2026-04-25',
    tags: ['Animation', 'GSAP', 'JavaScript'],
    image: '/blog/gsap.jpg',
    readTime: 7,
  },
  {
    id: 'blog-3',
    title: 'Performance Optimization Tips',
    slug: 'performance-optimization',
    excerpt: 'Essential strategies for optimizing React and 3D application performance.',
    content: 'Performance is critical for modern web applications. Here are...',
    author: 'Hari Om Singh',
    date: '2026-04-18',
    tags: ['Performance', 'Optimization', 'React'],
    image: '/blog/performance.jpg',
    readTime: 6,
  },
]

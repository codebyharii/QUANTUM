export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Inc',
    image: '/avatars/sarah.jpg',
    content: 'Working with this developer was an absolute pleasure. The attention to detail and creative solutions were outstanding.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'DigitalFlow',
    image: '/avatars/michael.jpg',
    content: 'Exceptional technical skills combined with excellent communication. Highly recommended for any project.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Emma Davis',
    role: 'Design Lead',
    company: 'Creative Studios',
    image: '/avatars/emma.jpg',
    content: 'The 3D animations brought our vision to life in ways we never imagined. Truly impressive work.',
    rating: 5,
  },
]

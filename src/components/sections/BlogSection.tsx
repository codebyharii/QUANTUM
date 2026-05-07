import { motion } from 'framer-motion'
import { blogPosts } from '@/data/blog'

export default function BlogSection() {
  return (
    <section className="py-20 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-quantum-400 mb-4">Latest Articles</h2>
          <p className="text-quantum-300 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and 3D design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-quantum-900/50 border border-quantum-500/20 group-hover:border-quantum-400/50 transition">
                <div className="w-full h-full bg-gradient-to-br from-quantum-500/20 to-quantum-600/20 flex items-center justify-center">
                  <span className="text-quantum-400 font-semibold">{post.title}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-quantum-400 transition">
                {post.title}
              </h3>

              <p className="text-quantum-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

              <div className="flex items-center justify-between text-xs text-quantum-400">
                <span>{post.date}</span>
                <span>{post.readTime} min read</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs rounded bg-quantum-500/20 text-quantum-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

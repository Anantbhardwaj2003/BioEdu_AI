import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "CRISPR-Cas9: The Dawn of Precision Gene Editing",
    excerpt: "Explore how the CRISPR-Cas9 system was adapted from bacterial immune defenses to become the most powerful genetic engineering tool of the 21st century.",
    image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800",
    date: "July 05, 2026",
    author: "Dr. Alistair Vance",
    category: "Genetics",
    link: "https://en.wikipedia.org/wiki/CRISPR"
  },
  {
    id: 2,
    title: "The Microbiome-Gut-Brain Axis",
    excerpt: "Recent studies reveal that our intestinal flora profoundly influences neurodevelopment, behavior, and even our susceptibility to neurodegenerative diseases.",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800",
    date: "June 28, 2026",
    author: "Prof. Sarah Chen",
    category: "Neurobiology",
    link: "https://en.wikipedia.org/wiki/Gut%E2%80%93brain_axis"
  },
  {
    id: 3,
    title: "Synthetic Biology: Programming Life",
    excerpt: "From engineered biofuels to biosensors, synthetic biology aims to design new biological parts, devices, and systems for useful purposes.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
    date: "June 14, 2026",
    author: "Dr. Elena Rostova",
    category: "Synthetic Biology",
    link: "https://en.wikipedia.org/wiki/Synthetic_biology"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-zinc-50 mb-6">
            Latest from the <span className="text-gradient">Journal</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Stay updated with cutting-edge discoveries and insights from our leading researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group flex flex-col overflow-hidden hover:border-emerald-500/30 transition-colors duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-emerald-300 text-xs font-medium rounded-full border border-white/10">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-zinc-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-50 mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="mt-auto">
                  <a 
                    href={blog.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

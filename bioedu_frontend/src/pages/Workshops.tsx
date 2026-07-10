import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { workshops } from '../data/workshops';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export function Workshops() {
  return (
    <div className="pt-24 pb-32 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-zinc-50 mb-6"
        >
          Recent Training & <span className="text-gradient">Workshops</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg"
        >
          Explore our latest intensive workshops designed to accelerate your understanding of modern biology.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {workshops.map((workshop, i) => (
          <Link to={`/workshops/${workshop.id}`} key={workshop.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group overflow-hidden flex flex-col h-full hover:border-emerald-500/30 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={workshop.image} 
                  alt={workshop.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="px-3 py-1 glass rounded-full text-xs font-medium text-emerald-300">
                    {workshop.level}
                  </span>
                  <span className="text-zinc-300 text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {workshop.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-zinc-50 mb-2 group-hover:text-emerald-400 transition-colors">
                  {workshop.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                  {workshop.description}
                </p>
                
                <div className="mt-auto space-y-3">
                  <div className="flex items-center gap-2 text-zinc-400 text-sm">
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 text-sm">
                    <User className="w-4 h-4 text-emerald-400" />
                    <span>{workshop.instructor}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-zinc-50/10 flex items-center justify-between">
                  <span className="flex items-center text-emerald-400 text-sm font-medium">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-zinc-300 font-medium text-sm">
                    {workshop.price || "Free"}
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

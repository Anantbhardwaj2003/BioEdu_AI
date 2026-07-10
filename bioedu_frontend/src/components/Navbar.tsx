import { motion } from 'motion/react';
import { Dna, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5 bg-[#050505]/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-zinc-50">
          <Dna className="w-6 h-6 text-emerald-400" />
          <span className="font-display font-semibold tracking-tight text-lg">BioEdu AI</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/#features" className="text-zinc-400 hover:text-zinc-50 transition-colors">Features</Link>
          <Link to="/advanced-courses" className="text-zinc-400 hover:text-zinc-50 transition-colors">Advanced Courses</Link>
          <Link to="/workshops" className="text-zinc-400 hover:text-zinc-50 transition-colors">Recent Training</Link>
          <Link to="/#blog" className="text-zinc-400 hover:text-zinc-50 transition-colors">Blog</Link>
          <Link to="/#pricing" className="text-zinc-400 hover:text-zinc-50 transition-colors">Pricing</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-zinc-300 hover:text-zinc-50 transition-colors">Log in</button>
          <button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
            Get Started
          </button>
        </div>

        <button 
          className="md:hidden text-zinc-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 right-0 glass-card mx-4 p-4 flex flex-col gap-4 border-t border-white/5"
        >
          <Link to="/#features" className="text-zinc-300 p-2" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/advanced-courses" className="text-zinc-300 p-2" onClick={() => setIsOpen(false)}>Advanced Courses</Link>
          <Link to="/workshops" className="text-zinc-300 p-2" onClick={() => setIsOpen(false)}>Recent Training</Link>
          <Link to="/#blog" className="text-zinc-300 p-2" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/#pricing" className="text-zinc-300 p-2" onClick={() => setIsOpen(false)}>Pricing</Link>
          <hr className="border-white/10" />
          <button className="w-full text-left p-2 text-zinc-300">Log in</button>
          <button className="w-full bg-emerald-500 text-zinc-50 p-2 rounded-lg font-medium">Get Started</button>
        </motion.div>
      )}
    </nav>
  );
}

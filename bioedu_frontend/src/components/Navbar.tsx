import { Menu, X, LogIn } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#fafafa]/90 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center gap-3">
          <div className="relative flex items-center justify-center w-7 h-7 text-slate-950">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
              <path d="M28 12 V4 H4 V28 H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
            </svg>
            <span className="font-mono text-[15px] font-bold leading-none mt-0.5 ml-0.5">G</span>
          </div>
          <span className="font-mono font-bold tracking-[0.15em] text-lg text-slate-950">GeneBoxAI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          <a href="#" className="text-[13px] font-medium text-slate-600 hover:text-slate-950 transition-colors">Learn</a>
          <Link to="/workshops" className="text-[13px] font-medium text-slate-600 hover:text-slate-950 transition-colors">Workshops</Link>
          <a href="#" className="text-[13px] font-medium text-slate-600 hover:text-slate-950 transition-colors">Bootcamps</a>
          <Link to="/experts" className="text-[13px] font-medium text-slate-600 hover:text-slate-950 transition-colors">Experts</Link>
          <Link to="/community" className="text-[13px] font-medium text-slate-600 hover:text-slate-950 transition-colors">Community</Link>
          <a href="#" className="text-[13px] font-medium text-slate-600 hover:text-slate-950 transition-colors">Research</a>
          <a href="#" className="text-[13px] font-medium text-slate-600 hover:text-slate-950 transition-colors">Resources</a>
        </div>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-5">
          <Link to="/login" className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-950 hover:text-slate-600 transition-colors group">
            Login <LogIn className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
          </Link>
          <Link to="/community" className="text-[13px] font-semibold text-white bg-slate-900 hover:bg-black px-4 py-2 rounded-lg transition-colors shadow-sm shadow-slate-900/20">
            Join Community
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-950 p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl absolute w-full left-0 z-40"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#" className="block px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors">Learn</a>
              <Link to="/workshops" className="block px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsOpen(false)}>Workshops</Link>
              <a href="#" className="block px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors">Bootcamps</a>
              <Link to="/experts" className="block px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsOpen(false)}>Experts</Link>
              <Link to="/community" className="block px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" onClick={() => setIsOpen(false)}>Community</Link>
              <a href="#" className="block px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors">Research</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors">Resources</a>
              <div className="mt-4 pt-4 border-t border-slate-100 px-3 flex flex-col gap-3">
                <Link to="/login" className="block text-center w-full px-4 py-2.5 text-base font-semibold text-slate-950 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm" onClick={() => setIsOpen(false)}>Login</Link>
                <Link to="/community" className="block text-center w-full px-4 py-2.5 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-sm" onClick={() => setIsOpen(false)}>Join Community</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
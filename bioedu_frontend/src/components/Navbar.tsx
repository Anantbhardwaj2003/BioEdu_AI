import { motion } from 'motion/react';
import { Dna, Menu, X, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/auth/me`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (res.ok) {
            const data = await res.json();
            setUserEmail(data.email);
          } else {
            localStorage.removeItem('token');
          }
        } catch (err) {
          localStorage.removeItem('token');
        }
      }
    };
    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserEmail('');
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0 border-white/5 bg-[#050505]/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-zinc-50">
          <Dna className="w-6 h-6 text-emerald-400" />
          <span className="font-display font-semibold tracking-tight text-lg">GeneBox AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/advanced-courses" className="text-zinc-400 hover:text-zinc-50 transition-colors">Advanced Courses</Link>
          <Link to="/workshops" className="text-zinc-400 hover:text-zinc-50 transition-colors">Recent Training</Link>
          <Link to="/faq" className="text-zinc-400 hover:text-zinc-50 transition-colors">FAQ</Link>
          <Link to="/teams" className="text-zinc-400 hover:text-zinc-50 transition-colors">Teams</Link>
          <Link to="/about-us" className="text-zinc-400 hover:text-zinc-50 transition-colors">About Us</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {userEmail ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
                Welcome back, {userEmail}
              </span>
              <button 
                onClick={handleLogout}
                className="text-sm font-medium bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-zinc-300 hover:text-zinc-50 transition-colors">Log in</Link>
              <Link to="/login" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
                Get Started
              </Link>
            </>
          )}
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
          <Link to="/faq" className="text-zinc-300 p-2" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="/teams" className="text-zinc-300 p-2" onClick={() => setIsOpen(false)}>Teams</Link>
          <Link to="/about-us" className="text-zinc-300 p-2" onClick={() => setIsOpen(false)}>About Us</Link>
          <hr className="border-white/10" />
          
          {userEmail ? (
            <>
              <div className="p-2 text-sm font-medium text-emerald-400">
                Welcome back, {userEmail}
              </div>
              <button 
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full text-left bg-white/10 text-zinc-50 p-2 rounded-lg font-medium flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="w-full text-left p-2 text-zinc-300" onClick={() => setIsOpen(false)}>Log in</Link>
              <Link to="/login" className="w-full bg-emerald-500 text-zinc-50 p-2 rounded-lg font-medium text-center" onClick={() => setIsOpen(false)}>Get Started</Link>
            </>
          )}
        </motion.div>
      )}
    </nav>
  );
}

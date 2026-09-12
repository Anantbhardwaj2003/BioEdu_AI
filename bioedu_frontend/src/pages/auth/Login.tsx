import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Brain, Dna, Database, Sparkles } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      // Proceed with login logic
      console.log('Login valid', { email, password });
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-5rem)] flex flex-col md:flex-row bg-slate-950 font-sans text-slate-300 selection:bg-slate-700 selection:text-white relative">
      
      {/* "Smarter Biology" Text - Positioned safely above everything or in natural flow to never hide */}
      <div className="absolute top-6 right-6 lg:top-8 lg:right-10 z-20 hidden sm:flex items-center gap-2 pointer-events-none px-3 py-1.5 rounded-full bg-slate-900/40 border border-slate-800/50 backdrop-blur-md">
        <Sparkles className="w-3.5 h-3.5 text-slate-400" />
        <p className="text-[11px] lg:text-xs text-slate-400 font-medium tracking-wide uppercase">Smarter Biology. Brighter Future.</p>
      </div>

      {/* Left Column - Branding & Visuals */}
      <div className="relative hidden md:flex md:w-5/12 lg:w-1/2 flex-col justify-between p-8 lg:p-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2400&auto=format&fit=crop" 
            alt="Abstract Biology Concept" 
            className="w-full h-full object-cover grayscale opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 w-fit">
            <div className="relative flex items-center justify-center w-8 h-8 text-white">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
                <path d="M28 12 V4 H4 V28 H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
              <span className="font-mono text-base font-bold leading-none mt-0.5 ml-0.5 text-white">G</span>
            </div>
            <span className="font-mono font-bold tracking-[0.15em] text-xl text-white">GeneBoxAI</span>
          </Link>
        </div>

        {/* Center Content */}
        <div className="relative z-10 max-w-xl mt-8 mb-auto pt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-5"
          >
            Intelligence for<br/>
            the next generation<br/>
            of <span className="text-slate-400">biology.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm lg:text-base text-slate-400 leading-relaxed max-w-md"
          >
            GeneBoxAI combines the power of AI with biological data to accelerate discovery, enable better decisions and build a healthier future for all.
          </motion.p>
          
          {/* Features / Badges Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shadow-inner">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-white leading-tight">AI</p>
                <p className="text-[10px] text-slate-500 font-medium leading-tight">Smarter Insights</p>
              </div>
            </div>
            <div className="w-px h-6 bg-slate-800 hidden xl:block"></div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shadow-inner">
                <Dna className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-white leading-tight">Biology</p>
                <p className="text-[10px] text-slate-500 font-medium leading-tight">Deeper Understanding</p>
              </div>
            </div>
            <div className="w-px h-6 bg-slate-800 hidden xl:block"></div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shadow-inner">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[13px] font-bold text-white leading-tight">Data</p>
                <p className="text-[10px] text-slate-500 font-medium leading-tight">Greater Impact</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Text */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-0.5 h-8 bg-slate-700"></div>
          <div>
            <p className="text-[10px] text-slate-400 font-medium leading-tight">From genes to insights.</p>
            <p className="text-[10px] text-slate-400 font-medium leading-tight">From data to better lives.</p>
          </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8 relative bg-slate-950 overflow-hidden flex-1">
        
        {/* Subtle Background for Mobile so it isn't completely blank */}
        <div className="absolute inset-0 z-0 md:hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1200&auto=format&fit=crop" 
            alt="Abstract Background" 
            className="w-full h-full object-cover grayscale opacity-10 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        </div>

        {/* Mobile Header Elements */}
        <div className="relative z-10 md:hidden flex flex-col items-center justify-center w-full mb-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-7 h-7 text-white">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
                <path d="M28 12 V4 H4 V28 H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
              </svg>
              <span className="font-mono text-sm font-bold leading-none mt-0.5 ml-0.5 text-white">G</span>
            </div>
            <span className="font-mono font-bold tracking-[0.15em] text-lg text-white">GeneBoxAI</span>
          </Link>
          
          <div className="flex items-center gap-1.5 mt-3 px-3 py-1 bg-slate-900/40 border border-slate-800/50 backdrop-blur-md rounded-full">
            <Sparkles className="w-3 h-3 text-slate-400" />
            <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">Smarter Biology. Brighter Future.</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-[380px] bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-1">Welcome back</h2>
            <p className="text-xs text-slate-400">Sign in to continue to GeneBoxAI</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-slate-300 block">Email address</label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none ${errors.email ? 'text-red-400' : 'text-slate-500'}`}>
                  <Mail className="w-4 h-4" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="you@example.com"
                  className={`w-full pl-10 pr-4 py-2 bg-slate-950/50 border text-sm text-white placeholder-slate-600 rounded-lg focus:outline-none focus:ring-1 transition-all shadow-inner ${
                    errors.email 
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' 
                      : 'border-slate-800 focus:border-slate-500 focus:ring-slate-500'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[11px] text-red-400 font-medium">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold text-slate-300 block">Password</label>
              <div className="relative">
                <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none ${errors.password ? 'text-red-400' : 'text-slate-500'}`}>
                  <Lock className="w-4 h-4" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: undefined });
                  }}
                  placeholder="Enter your password"
                  className={`w-full pl-10 pr-12 py-2 bg-slate-950/50 border text-sm text-white placeholder-slate-600 rounded-lg focus:outline-none focus:ring-1 transition-all shadow-inner ${
                    errors.password 
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' 
                      : 'border-slate-800 focus:border-slate-500 focus:ring-slate-500'
                  }`}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-[11px] text-red-400 font-medium">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="w-3.5 h-3.5 rounded border-slate-700 bg-slate-900 text-slate-400 focus:ring-slate-600 focus:ring-offset-slate-950 cursor-pointer"
                />
                <span className="text-[11px] text-slate-400 group-hover:text-slate-300 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-[11px] font-semibold text-slate-300 hover:text-white transition-colors">
                Forgot password?
              </a>
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2 bg-slate-100 hover:bg-white text-slate-950 text-sm font-bold rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all mt-4"
            >
              Sign In <ArrowRight className="w-4 h-4" />
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-slate-800"></div>
              <span className="flex-shrink-0 mx-3 text-[10px] text-slate-500 uppercase tracking-wider">or</span>
              <div className="flex-grow border-t border-slate-800"></div>
            </div>

            <button 
              type="button"
              className="w-full flex items-center justify-center gap-2.5 py-2 bg-slate-950/50 border border-slate-800 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg transition-all"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <p className="text-center text-[11px] text-slate-400 mt-4 pt-1">
              Don't have an account? <a href="#" className="text-slate-300 font-semibold hover:text-white transition-colors">Create an account</a>
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

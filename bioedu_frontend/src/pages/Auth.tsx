import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Dna, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { DNABackground } from '../components/DNABackground';

export function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const endpoint = isSignUp ? '/api/auth/signup' : '/api/auth/signin';
    try {
      const response = await fetch(`http://localhost:8000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Authentication failed');
      }

      if (isSignUp) {
        setIsSignUp(false);
        setSuccess('Account created successfully. Please sign in.');
        setPassword('');
      } else {
        localStorage.setItem('token', data.access_token);
        // Navigate to home immediately after login
        window.location.href = '/';
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative z-10 p-6 overflow-hidden">
      <DNABackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-20"
      >
        <div className="relative">
          {/* Decorative elements behind the card */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/50 via-teal-500/50 to-cyan-500/50 rounded-[2rem] blur-xl opacity-50 animate-pulse pointer-events-none" />
          <div className="relative bg-[#0a0f16]/60 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl overflow-hidden">
            <div className="flex flex-col items-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/10">
                <Dna className="w-7 h-7 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-display font-medium text-white mb-2">
                {isSignUp ? 'Create an account' : 'Welcome back'}
              </h2>
              <p className="text-zinc-400 text-sm">
                {isSignUp
                  ? 'Join our community of bioinformaticians.'
                  : 'Enter your credentials to access your account.'}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center">
                {success}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-400 pl-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-400 pl-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400/50 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.button
                  key={isSignUp ? 'signup' : 'signin'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-medium py-3 rounded-xl shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 group mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      {isSignUp ? 'Sign Up' : 'Sign In'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </AnimatePresence>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError('');
                  setSuccess('');
                }}
                className="text-sm text-zinc-400 hover:text-white transition-colors focus:outline-none"
              >
                {isSignUp
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
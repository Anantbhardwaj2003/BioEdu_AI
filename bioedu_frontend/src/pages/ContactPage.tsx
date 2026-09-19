import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Mail, 
  ShieldCheck, 
  MessageSquare, 
  Send, 
  Zap, 
  Headphones, 
  Phone,  
  ChevronRight,
  CheckCircle2, 
  X,
  Sparkles
} from 'lucide-react';

export default function ContactPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Live Chat Modal State
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; time: string }>>([
    { sender: 'bot', text: 'Hello! 👋 Welcome to GeneBoxAI Support. How can our bioinformatics and research team help you today?', time: 'Just now' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Please fill out all required fields marked with *');
      return;
    }
    if (!isCaptchaChecked) {
      setValidationError('Please complete the verification check.');
      return;
    }
    setValidationError(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = {
      sender: 'user' as const,
      text: chatInput.trim(),
      time: 'Just now'
    };

    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');

    // Simulated immediate assistant response
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        {
          sender: 'bot' as const,
          text: "Thank you for reaching out! A dedicated GeneBoxAI genomics specialist is reviewing your inquiry. For priority tickets, you can also email support@geneboxai.com.",
          time: 'Just now'
        }
      ]);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 pt-8 md:pt-10 pb-24 relative overflow-hidden font-sans">
      {/* Ambient background glow & subtle scientific grid */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-sky-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-950/15 rounded-full blur-[140px] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden border border-zinc-800/80 bg-gradient-to-r from-zinc-900/90 via-zinc-900/80 to-zinc-950 shadow-2xl mb-12"
        >
          {/* Subtle DNA & Hexagonal overlay pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/70 to-transparent z-10" />

          {/* Right-Side DNA Helix / Bioluminescent Science Visual */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 overflow-hidden pointer-events-none z-0">
            <img
              src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1600&q=85"
              alt="DNA Double Helix and Molecular Structure"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center opacity-30 mix-blend-screen scale-105 filter contrast-125 brightness-95"
            />
            {/* Glowing cyan & violet flare */}
            <div className="absolute inset-0 bg-gradient-to-l from-sky-500/20 via-indigo-500/10 to-transparent" />
          </div>

          <div className="relative z-20 p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Banner Left Content */}
            <div className="max-w-2xl">
              {/* Eyebrow with decorative horizontal line */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-white uppercase">
                  CONTACT & SUPPORT
                </span>
                <span className="w-8 h-[2px] bg-white/60 rounded-full" />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-600">Help</span>
              </h1>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8 max-w-xl">
                Have a question, need assistance, or want to know more about GeneBoxAI? Our team is here to support you. Reach out and we'll get back to you as soon as possible.
              </p>

              {/* 3 Value Proposition Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                
                {/* 1. Quick Response */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 shadow-sm">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-white">Quick Response</h2>
                    <p className="text-[11px] text-zinc-400">Within 24 hours</p>
                  </div>
                </div>

                {/* 2. Dedicated Support */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-400 shrink-0 shadow-sm">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-white">Dedicated Support</h2>
                    <p className="text-[11px] text-zinc-400">For all users</p>
                  </div>
                </div>

                {/* 3. Expert Assistance */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-400 shrink-0 shadow-sm">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold text-white">Expert Assistance</h2>
                    <p className="text-[11px] text-zinc-400">From our team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner Right: "Better Research Together" Cursive Art */}
            <div className="hidden lg:flex flex-col items-center justify-center pr-6 select-none">
              <div className="relative transform -rotate-6 transition-transform hover:-rotate-3 duration-300">
                <div className="font-handwriting text-3xl xl:text-4xl text-sky-200/90 tracking-wide drop-shadow-[0_2px_15px_rgba(56,189,248,0.4)] text-right leading-tight">
                  Better<br />
                  Research<br />
                  Together
                </div>
                {/* Flowing handwritten underline flourish */}
                <svg className="w-28 h-6 text-sky-400/75 mt-1 ml-auto" viewBox="0 0 110 25" fill="none">
                  <path d="M5 18 C 35 25, 75 5, 105 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* MAIN 2-COLUMN SECTION (Send Message Form + Other Ways)   */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Send Us a Message Form (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative"
          >
            {/* Corner ambient glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-6">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-sky-400 uppercase">
                GET IN TOUCH
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight mt-1 mb-1">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-4 text-center rounded-xl bg-zinc-950/80 border border-zinc-800"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto mb-6">
                  Thank you, <span className="text-zinc-200 font-semibold">{formData.name}</span>. We have received your inquiry. A GeneBoxAI team member will review it and reply to <span className="text-sky-400 font-mono">{formData.email}</span> within 24 hours.
                </p>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-6">
                  <span>Ticket ID:</span>
                  <span className="text-zinc-200 font-bold">#GBX-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setIsCaptchaChecked(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {validationError && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    {validationError}
                  </div>
                )}

                {/* 1. Full Name */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Full Name <span className="text-sky-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-zinc-100 placeholder-zinc-500 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* 2. Email Address */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Email Address <span className="text-sky-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-zinc-100 placeholder-zinc-500 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* 3. Subject Dropdown */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Subject <span className="text-sky-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-zinc-100 placeholder-zinc-500 transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-zinc-900 text-zinc-500">Select a subject</option>
                      <option value="NGS / RNA-Seq Analysis" className="bg-zinc-900 text-zinc-200">NGS / RNA-Seq Analysis Services</option>
                      <option value="Workshops & Bootcamps" className="bg-zinc-900 text-zinc-200">Workshops & Training Bootcamps</option>
                      <option value="Academic Lab Custom Program" className="bg-zinc-900 text-zinc-200">Custom Academic Lab Programs</option>
                      <option value="Expert Network Application" className="bg-zinc-900 text-zinc-200">Expert Network & Mentorship</option>
                      <option value="Billing & Invoicing" className="bg-zinc-900 text-zinc-200">Billing & Payment Inquiries</option>
                      <option value="Platform & Account Support" className="bg-zinc-900 text-zinc-200">Platform & Technical Support</option>
                      <option value="Other Inquiries" className="bg-zinc-900 text-zinc-200">Other Inquiries</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-500">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>

                {/* 4. Your Message */}
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Your Message <span className="text-sky-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3.5 pointer-events-none text-zinc-500">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-sm text-zinc-100 placeholder-zinc-500 transition-all outline-none resize-none"
                    />
                  </div>
                </div>

                {/* Bottom Row: reCAPTCHA Card + Send Message Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">

                  {/* Send Message Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </div>

              </form>
            )}
          </motion.div>

          {/* RIGHT COLUMN: Contact Channels & Follow Us (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* CARD 1: Other Ways to Reach Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    Other Ways to Reach Us
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Choose the best way to connect with our team.
                  </p>
                </div>
              </div>

              {/* 4 Reach Channels */}
              <div className="space-y-3.5">
                
                {/* 1. Email Support */}
                <a
                  href="mailto:geneboxai@gmail.com"
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-950 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-sky-400 group-hover:border-sky-500/40 transition-colors shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Email Support</h4>
                      <p className="text-xs font-mono text-zinc-400 group-hover:text-sky-300 transition-colors">
                        geneboxai@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <div className="hidden sm:block text-[11px] text-zinc-500 leading-tight">
                      <span>We'll respond within</span><br />
                      <span className="text-zinc-300 font-semibold">24 hours</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </div>
                </a>

                {/* 2. Live Chat */}
                {/* <button
                  type="button"
                  onClick={() => setIsChatModalOpen(true)}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-950 transition-all group text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-indigo-400 group-hover:border-indigo-500/40 transition-colors shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white flex items-center gap-1.5">
                        Live Chat
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </h4>
                      <p className="text-xs text-zinc-400">
                        Chat with our support team
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <div className="hidden sm:block text-[11px] text-zinc-500 leading-tight">
                      <span>Available</span><br />
                      <span className="text-zinc-300 font-semibold">Mon - Fri, 9AM - 6PM (EST)</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </div>
                </button> */}

                {/* 3. Phone Support */}
                <a
                  href="tel:+919911793112"
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-950 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-sky-400 group-hover:border-sky-500/40 transition-colors shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Phone Support</h4>
                      <p className="text-xs font-mono text-zinc-400 group-hover:text-sky-300 transition-colors">
                        +91 99117 93112
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <div className="hidden sm:block text-[11px] text-zinc-500 leading-tight">
                      <span>Mon - Fri</span><br />
                      <span className="text-zinc-300 font-semibold">9AM - 6PM</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-1" />
                  </div>
                </a>

                {/* 4. Our Office */}
                {/* <div className="flex items-start justify-between p-3 rounded-xl bg-zinc-950/70 border border-zinc-800 group">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Our Office</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed max-w-[210px] mt-0.5">
                        Tech Park, Block A, 5th Floor Bengaluru, Karnataka - 560001, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-right shrink-0 pt-1">
                    <div className="hidden sm:block text-[11px] text-zinc-500 leading-tight">
                      <span>Visit us</span><br />
                      <span className="text-zinc-300 font-semibold">(By appointment)</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                  </div>
                </div> */}
              </div>
            </motion.div>

            {/* CARD 2: Follow Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-6 backdrop-blur-xl shadow-2xl"
            >
              <h3 className="text-base font-bold text-white tracking-tight mb-1">
                Follow Us
              </h3>
              <p className="text-xs text-zinc-400 mb-5">
                Stay connected for the latest updates, research, and more.
              </p>

              {/* Social Icon Pills (Matching the circular/rounded style from screenshot) */}
              <div className="flex items-center gap-3">
                
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/geneboxai/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 hover:border-sky-500 hover:bg-sky-500/10 text-zinc-400 hover:text-sky-400 flex items-center justify-center transition-all shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* X / Twitter */}
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800/60 text-zinc-400 hover:text-white flex items-center justify-center transition-all shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a> */}

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@GeneboxAI"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 hover:border-red-500 hover:bg-red-500/10 text-zinc-400 hover:text-red-400 flex items-center justify-center transition-all shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/anantbhardwaj2003/BioEdu_AI"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 hover:border-purple-500 hover:bg-purple-500/10 text-zinc-400 hover:text-purple-300 flex items-center justify-center transition-all shadow-sm hover:scale-110"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>

                {/* Community / Email */}
                <a
                  href="mailto:geneboxai@gmail.com"
                  aria-label="Contact Email"
                  className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 hover:border-cyan-500 hover:bg-cyan-500/10 text-zinc-400 hover:text-cyan-300 flex items-center justify-center transition-all shadow-sm hover:scale-110"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* ======================================================== */}
      {/* LIVE CHAT MODAL DIALOG                                  */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isChatModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col h-[500px]"
            >
              {/* Chat Header */}
              <div className="p-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      GeneBoxAI Live Chat
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </h4>
                    <p className="text-[11px] text-zinc-400">Bioinformatics Support Specialist</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatModalOpen(false)}
                  className="w-8 h-8 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Messages Body */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-zinc-950/40">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-sky-600 text-white rounded-br-none'
                          : 'bg-zinc-800/90 text-zinc-200 border border-zinc-700/60 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-zinc-500 mt-1 px-1">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Chat Input Bar */}
              <form onSubmit={handleSendChatMessage} className="p-3 bg-zinc-950 border-t border-zinc-800 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your question..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-sky-500"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
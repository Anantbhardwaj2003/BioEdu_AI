import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import scholarCapImg from '../assets/Scholar_Cap.png';
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Briefcase, 
  LayoutGrid, 
  Calendar, 
  PenLine, 
  UploadCloud, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ChevronDown, 
  GraduationCap, 
  X,
  FileCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExpertJoinForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    linkedin: '',
    expertise: '',
    experience: '',
    github: '',
    motivation: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.linkedin.trim()) {
      newErrors.linkedin = 'LinkedIn profile is required';
    } else if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.linkedin)) {
      newErrors.linkedin = 'Please enter a valid LinkedIn URL (https://linkedin.com/in/...)';
    }

    if (!formData.expertise) newErrors.expertise = 'Please select your primary area of expertise';
    if (!formData.experience) newErrors.experience = 'Please select your years of experience';

    if (formData.github && !/^https?:\/\/(www\.)?github\.com\/.*$/.test(formData.github)) {
      newErrors.github = 'Please enter a valid GitHub URL (https://github.com/...)';
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Please share your motivation for joining our faculty';
    } else if (formData.motivation.trim().length < 30) {
      newErrors.motivation = 'Please provide a slightly more detailed explanation (min 30 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'motivation' && value.length > 500) return;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: 'File size must be under 5MB' }));
        return;
      }
      setUploadedFile(file);
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, resume: 'File size must be under 5MB' }));
        return;
      }
      setUploadedFile(file);
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1200);
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-zinc-950 text-zinc-100 pt-10 sm:pt-16 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden font-sans selection:bg-zinc-800 selection:text-white">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[350px] bg-zinc-900/40 rounded-full blur-[130px] pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '28px 28px'
          }}
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 bg-zinc-900/85 border border-zinc-800/90 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-10 max-w-md w-full text-center"
        >
          <div className="w-14 h-14 bg-zinc-800/80 border border-zinc-700/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-inner text-emerald-400">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
            Application Received
          </h2>
          <p className="text-zinc-400 mb-6 leading-relaxed text-xs sm:text-sm">
            Thank you for applying to join the GeneBoxAI Faculty. Our team will review your credentials and get back to you within 3–5 business days.
          </p>
          <Link 
            to="/experts" 
            className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md cursor-pointer"
          >
            Return to Experts Page
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 pt-3 sm:pt-4 pb-14 relative overflow-hidden font-sans selection:bg-zinc-800 selection:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-zinc-900/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-zinc-900/30 rounded-full blur-[150px] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="mx-auto max-w-[840px] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Link: Back to Experts (Tightly aligned to top) */}
        <div className="mb-2.5 sm:mb-3">
          <Link 
            to="/experts" 
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" /> 
            Back to Experts
          </Link>
        </div>

        {/* ======================================================== */}
        {/* HEADER SECTION: Compact & Balanced                       */}
        {/* ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 mb-4 sm:mb-5">
          
          {/* Left: Icon, Title, Subtitle */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-zinc-900 border border-zinc-800/90 flex items-center justify-center text-zinc-100 shadow-sm shrink-0">
              <GraduationCap className="w-6 h-6 text-zinc-200" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Faculty Application
              </h1>
              <p className="text-xs text-zinc-400 mt-0.5 max-w-md leading-normal">
                Tell us about your background, expertise, and how you'd like to contribute.
              </p>
            </div>
          </div>

          {/* Right: Scholar Cap Image */}
          <div className="hidden sm:flex items-center justify-center shrink-0">
            <div className="relative w-40 h-30 flex items-center justify-center">
              <img src={scholarCapImg} alt="Scholar Cap" className="w-full h-full object-contain relative z-10 drop-shadow-sm" />
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* MAIN FORM CARD: Perfectly proportioned, clean gaps       */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl sm:rounded-3xl bg-zinc-900/85 border border-zinc-800/90 shadow-xl backdrop-blur-xl overflow-hidden"
        >
          <form onSubmit={handleSubmit} noValidate>
            
            {/* Form Inner Content - Compact Professional Padding */}
            <div className="p-5 sm:p-7 lg:p-8 space-y-6 sm:space-y-7">

              {/* ==================================================== */}
              {/* SECTION 1: Personal Information                      */}
              {/* ==================================================== */}
              <div>
                {/* Section Header */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
                  {/* Step Number Circle Badge */}
                  <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
                    1
                  </div>
                  {/* Icon Container */}
                  <div className="w-7 h-7 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 shrink-0">
                    <User className="w-3.5 h-3.5 text-zinc-300" />
                  </div>
                  {/* Section Title & Subtitle */}
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      Personal Information
                    </h2>
                    <p className="text-[11px] sm:text-xs text-zinc-400">
                      Please provide your basic contact details.
                    </p>
                  </div>
                </div>

                {/* Section 1 Fields */}
                <div className="space-y-3.5 sm:space-y-4">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        First Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          className={`w-full pl-9 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-zinc-950/80 border text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 transition-all outline-none shadow-sm ${
                            errors.firstName 
                              ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
                              : 'border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500'
                          }`}
                        />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-red-400">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Last Name <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          className={`w-full pl-9 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-zinc-950/80 border text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 transition-all outline-none shadow-sm ${
                            errors.lastName 
                              ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
                              : 'border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500'
                          }`}
                        />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-red-400">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email Address & LinkedIn Profile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@yourdomain.com"
                          className={`w-full pl-9 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-zinc-950/80 border text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 transition-all outline-none shadow-sm ${
                            errors.email 
                              ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
                              : 'border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-red-400">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        LinkedIn Profile <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </div>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/yourname"
                          className={`w-full pl-9 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-zinc-950/80 border text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 transition-all outline-none shadow-sm ${
                            errors.linkedin 
                              ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
                              : 'border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500'
                          }`}
                        />
                      </div>
                      {errors.linkedin && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-red-400">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.linkedin}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Section Divider */}
              <div className="border-t border-zinc-800/80" />

              {/* ==================================================== */}
              {/* SECTION 2: Professional Background                   */}
              {/* ==================================================== */}
              <div>
                {/* Section Header */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
                  {/* Step Number Circle Badge */}
                  <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
                    2
                  </div>
                  {/* Icon Container */}
                  <div className="w-7 h-7 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 shrink-0">
                    <Briefcase className="w-3.5 h-3.5 text-zinc-300" />
                  </div>
                  {/* Section Title & Subtitle */}
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      Professional Background
                    </h2>
                    <p className="text-[11px] sm:text-xs text-zinc-400">
                      Share a bit about your professional experience and interests.
                    </p>
                  </div>
                </div>

                {/* Section 2 Fields */}
                <div className="space-y-3.5 sm:space-y-4">
                  {/* Row 1: Primary Area of Expertise & Years of Experience */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Primary Area of Expertise <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                          <LayoutGrid className="w-4 h-4" />
                        </div>
                        <select
                          name="expertise"
                          value={formData.expertise}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-9 py-2 sm:py-2.5 rounded-xl bg-zinc-950/80 border text-xs sm:text-sm text-zinc-100 transition-all outline-none shadow-sm appearance-none cursor-pointer ${
                            errors.expertise 
                              ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
                              : 'border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500'
                          } ${!formData.expertise ? 'text-zinc-500' : 'text-zinc-100'}`}
                        >
                          <option value="" disabled className="bg-zinc-950 text-zinc-500">Select an option</option>
                          <option value="computational-biology" className="bg-zinc-900 text-zinc-100">Computational Biology</option>
                          <option value="bioinformatics" className="bg-zinc-900 text-zinc-100">Bioinformatics & NGS</option>
                          <option value="ai-ml" className="bg-zinc-900 text-zinc-100">AI & Machine Learning</option>
                          <option value="structural-bio" className="bg-zinc-900 text-zinc-100">Structural Biology & AlphaFold</option>
                          <option value="data-science" className="bg-zinc-900 text-zinc-100">Data Science / Biostatistics</option>
                          <option value="genomics" className="bg-zinc-900 text-zinc-100">Functional & Population Genomics</option>
                          <option value="other" className="bg-zinc-900 text-zinc-100">Other Specialty</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-zinc-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                      {errors.expertise && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-red-400">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.expertise}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Years of Experience <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleChange}
                          className={`w-full pl-9 pr-9 py-2 sm:py-2.5 rounded-xl bg-zinc-950/80 border text-xs sm:text-sm text-zinc-100 transition-all outline-none shadow-sm appearance-none cursor-pointer ${
                            errors.experience 
                              ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
                              : 'border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500'
                          } ${!formData.experience ? 'text-zinc-500' : 'text-zinc-100'}`}
                        >
                          <option value="" disabled className="bg-zinc-950 text-zinc-500">Select an option</option>
                          <option value="1-3" className="bg-zinc-900 text-zinc-100">1 – 3 Years</option>
                          <option value="3-5" className="bg-zinc-900 text-zinc-100">3 – 5 Years</option>
                          <option value="5-10" className="bg-zinc-900 text-zinc-100">5 – 10 Years</option>
                          <option value="10+" className="bg-zinc-900 text-zinc-100">10+ Years</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-zinc-500">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                      {errors.experience && (
                        <p className="mt-1 flex items-center gap-1 text-[11px] text-red-400">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.experience}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: GitHub or Portfolio URL */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      GitHub or Portfolio URL
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      </div>
                      <input
                        type="url"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                        placeholder="https://github.com/..."
                        className={`w-full pl-9 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-zinc-950/80 border text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 transition-all outline-none shadow-sm ${
                          errors.github 
                            ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
                            : 'border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500'
                        }`}
                      />
                    </div>
                    {errors.github && (
                      <p className="mt-1 flex items-center gap-1 text-[11px] text-red-400">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.github}
                      </p>
                    )}
                  </div>

                  {/* Row 3: Why do you want to join our faculty? */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1">
                      Why do you want to join our faculty? <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-2.5 left-3 pointer-events-none text-zinc-500">
                        <PenLine className="w-4 h-4" />
                      </div>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleChange}
                        rows={3.5}
                        placeholder="Briefly describe your motivation and what topics you'd be interested in teaching or consulting on..."
                        className={`w-full pl-9 pr-3.5 py-2 sm:py-2.5 rounded-xl bg-zinc-950/80 border text-xs sm:text-sm text-zinc-100 placeholder-zinc-600 transition-all outline-none shadow-sm resize-none leading-normal ${
                          errors.motivation 
                            ? 'border-red-500/80 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
                            : 'border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500'
                        }`}
                      />
                    </div>
                    {/* Character count & error */}
                    <div className="flex items-center justify-between mt-1">
                      {errors.motivation ? (
                        <p className="flex items-center gap-1 text-[11px] text-red-400">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.motivation}
                        </p>
                      ) : <span />}
                      <span className="text-[11px] font-mono text-zinc-500">
                        {formData.motivation.length}/500
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Section Divider */}
              <div className="border-t border-zinc-800/80" />

              {/* ==================================================== */}
              {/* SECTION 3: Resume / CV                               */}
              {/* ==================================================== */}
              <div>
                {/* Section Header */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
                  {/* Step Number Circle Badge */}
                  <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
                    3
                  </div>
                  {/* Icon Container */}
                  <div className="w-7 h-7 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 shrink-0">
                    <UploadCloud className="w-3.5 h-3.5 text-zinc-300" />
                  </div>
                  {/* Section Title & Subtitle */}
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      Resume / CV
                    </h2>
                    <p className="text-[11px] sm:text-xs text-zinc-400">
                      Upload your latest resume or CV (PDF, DOCX, or TXT).
                    </p>
                  </div>
                </div>

                {/* Upload Dropzone Container */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.docx,.doc,.txt"
                  className="hidden"
                />

                {!uploadedFile ? (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-xl p-5 sm:p-6 flex flex-col items-center justify-center transition-all cursor-pointer group ${
                      isDragging 
                        ? 'border-zinc-400 bg-zinc-900/80' 
                        : 'border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/50'
                    }`}
                  >
                    {/* Center Circular Icon Badge */}
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-sm mb-2 group-hover:scale-105 transition-transform text-zinc-300">
                      <UploadCloud className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-zinc-200 mb-0.5 text-center">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-[11px] text-zinc-500 text-center">
                      PDF, DOCX, or TXT (Max 5MB)
                    </p>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                        <FileCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-zinc-200 line-clamp-1">{uploadedFile.name}</p>
                        <p className="text-[10px] text-zinc-500">{(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setUploadedFile(null)}
                      className="p-1 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {errors.resume && (
                  <p className="mt-1.5 flex items-center gap-1 text-[11px] text-red-400">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.resume}
                  </p>
                )}
              </div>

            </div>

            {/* ==================================================== */}
            {/* FOOTER BAR: Security Guarantee + Submit Button       */}
            {/* ==================================================== */}
            <div className="px-5 sm:px-7 py-3.5 sm:py-4 bg-zinc-950/90 border-t border-zinc-800/90 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              
              {/* Security Guarantee Note */}
              <div className="flex items-center gap-2 text-zinc-400 text-[11px] sm:text-xs">
                <ShieldCheck className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Your information is secure and will only be used for the faculty application process.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl bg-zinc-100 hover:bg-white active:bg-zinc-200 text-zinc-950 text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shrink-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-zinc-950" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

            </div>

          </form>
        </motion.div>

      </div>
    </main>
  );
}

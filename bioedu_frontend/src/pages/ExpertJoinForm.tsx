import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Upload, CheckCircle2, Briefcase, AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExpertJoinForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.linkedin.trim()) {
      newErrors.linkedin = 'LinkedIn profile is required';
    } else if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.linkedin)) {
      newErrors.linkedin = 'Please enter a valid LinkedIn URL';
    }
    
    if (!formData.expertise) newErrors.expertise = 'Please select your primary expertise';
    if (!formData.experience) newErrors.experience = 'Please select your years of experience';
    
    if (formData.github && !/^https?:\/\/(www\.)?github\.com\/.*$/.test(formData.github)) {
      newErrors.github = 'Please enter a valid GitHub URL';
    }
    
    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Please provide your motivation';
    } else if (formData.motivation.trim().length < 30) {
      newErrors.motivation = 'Please provide a slightly more detailed explanation (min 30 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
    }
  };

  // Helper for input styling
  const getInputClass = (fieldName: string) => {
    const base = "w-full bg-slate-50 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition-all";
    const normal = "border-slate-200 focus:ring-slate-900/10 focus:border-slate-400";
    const error = "border-red-300 focus:ring-red-500/10 focus:border-red-400 text-red-900";
    return `${base} ${errors[fieldName] ? error : normal}`;
  };

  const getSelectClass = (fieldName: string) => {
    return getInputClass(fieldName) + " appearance-none text-slate-700";
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-slate-50 pt-16 md:pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 max-w-lg w-full text-center"
        >
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-950 mb-3">Application Received</h2>
          <p className="text-slate-600 mb-8 leading-relaxed text-sm">
            Thank you for applying to join the GeneBoxAI Faculty. Our team will review your credentials and get back to you within 3-5 business days.
          </p>
          <Link 
            to="/experts" 
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Return to Experts Page
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-8 pb-20 relative">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link to="/experts" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Experts
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-slate-700">
              <Briefcase className="w-5 h-5" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-950 tracking-tight">
              Faculty Application
            </h1>
          </div>
          <p className="text-sm text-slate-600">
            Tell us about your background, expertise, and how you'd like to contribute.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-6 sm:p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            
            {/* Personal Details */}
            <div className="space-y-5">
              <h3 className="text-base font-bold text-slate-950 border-b border-slate-100 pb-3">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">First Name *</label>
                  <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" className={getInputClass('firstName')} placeholder="Jane" />
                  {errors.firstName && <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500"><AlertCircle className="w-3.5 h-3.5" />{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Last Name *</label>
                  <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className={getInputClass('lastName')} placeholder="Doe" />
                  {errors.lastName && <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500"><AlertCircle className="w-3.5 h-3.5" />{errors.lastName}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                  <input name="email" value={formData.email} onChange={handleChange} type="email" className={getInputClass('email')} placeholder="jane@example.com" />
                  {errors.email && <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500"><AlertCircle className="w-3.5 h-3.5" />{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">LinkedIn Profile *</label>
                  <input name="linkedin" value={formData.linkedin} onChange={handleChange} type="url" className={getInputClass('linkedin')} placeholder="https://linkedin.com/in/..." />
                  {errors.linkedin && <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500"><AlertCircle className="w-3.5 h-3.5" />{errors.linkedin}</p>}
                </div>
              </div>
            </div>

            {/* Professional Background */}
            <div className="space-y-5">
              <h3 className="text-base font-bold text-slate-950 border-b border-slate-100 pb-3">Professional Background</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Primary Area of Expertise *</label>
                  <select name="expertise" value={formData.expertise} onChange={handleChange} className={getSelectClass('expertise')}>
                    <option value="">Select an option</option>
                    <option value="computational-biology">Computational Biology</option>
                    <option value="bioinformatics">Bioinformatics</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="data-science">Data Science / Biostatistics</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.expertise && <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500"><AlertCircle className="w-3.5 h-3.5" />{errors.expertise}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Years of Experience *</label>
                  <select name="experience" value={formData.experience} onChange={handleChange} className={getSelectClass('experience')}>
                    <option value="">Select an option</option>
                    <option value="3-5">3 - 5 Years</option>
                    <option value="5-10">5 - 10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                  {errors.experience && <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500"><AlertCircle className="w-3.5 h-3.5" />{errors.experience}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">GitHub or Portfolio URL</label>
                <input name="github" value={formData.github} onChange={handleChange} type="url" className={getInputClass('github')} placeholder="https://github.com/..." />
                {errors.github && <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500"><AlertCircle className="w-3.5 h-3.5" />{errors.github}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Why do you want to join our faculty? *</label>
                <textarea name="motivation" value={formData.motivation} onChange={handleChange} rows={4} className={`${getInputClass('motivation')} resize-none`} placeholder="Briefly describe your motivation and what topics you'd be interested in teaching or consulting on..." />
                {errors.motivation && <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500"><AlertCircle className="w-3.5 h-3.5" />{errors.motivation}</p>}
              </div>
            </div>

            {/* Resume Upload */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-950 border-b border-slate-100 pb-3">Resume / CV</h3>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition-transform">
                  <Upload className="w-5 h-5 text-slate-500" />
                </div>
                <p className="text-sm font-medium text-slate-950 mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-slate-500">PDF, DOCX, or TXT (Max 5MB)</p>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-700 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl shadow-sm transition-colors w-full sm:w-auto min-w-[180px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}

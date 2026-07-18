import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';
import { workshops } from '../data/workshops';
import { Calendar, Clock, User, ArrowLeft, CheckCircle2, GraduationCap, CreditCard, Users } from 'lucide-react';

export function WorkshopDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollError, setEnrollError] = useState('');
  
  const workshop = workshops.find(w => w.id === id);

  const handleEnroll = async () => {
    if (!workshop) return;
    
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    // Redirect to payment if the workshop is not free
    const isPaid = workshop.price && workshop.price.toLowerCase() !== 'free';
    if (isPaid) {
      navigate(`/payment/${workshop.id}`);
      return;
    }
    
    setIsEnrolling(true);
    setEnrollError('');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/workshops/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
          w_id: workshop.id,
          title: workshop.title,
          date: workshop.date,
          instructor: workshop.instructor,
          description: workshop.description,
          image: workshop.image,
          topics: workshop.topics,
          level: workshop.level,
          duration: workshop.duration,
          price: workshop.price,
          target_audience: workshop.targetAudience
        })
      });
      
      const data = await res.json();
      if (res.ok) {
        setIsEnrolled(true);
      } else {
        setEnrollError(data.detail || 'Failed to enroll.');
      }
    } catch (err) {
      setEnrollError('An error occurred.');
    } finally {
      setIsEnrolling(false);
    }
  };

  if (!workshop) {
    return (
      <div className="pt-32 text-center text-zinc-50">
        <h1 className="text-3xl font-bold mb-4">Workshop not found</h1>
        <Link to="/workshops" className="text-emerald-400 hover:underline">Back to workshops</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32 max-w-4xl mx-auto px-6">
      <Link to="/workshops" className="inline-flex items-center text-zinc-400 hover:text-zinc-50 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to all workshops
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card overflow-hidden"
      >
        <div className="h-64 sm:h-80 relative">
          <img 
            src={workshop.image} 
            alt={workshop.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-medium backdrop-blur-md">
                {workshop.level}
              </span>
              <span className="px-3 py-1 glass rounded-full text-zinc-300 text-xs font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" /> {workshop.duration}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-display font-bold text-zinc-50 leading-tight">
              {workshop.title}
            </h1>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 pb-10 border-b border-zinc-50/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-zinc-400 text-sm mb-1">Schedule</p>
                <p className="text-zinc-50 font-medium">{workshop.date}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-zinc-400 text-sm mb-1">Instructor</p>
                <p className="text-zinc-50 font-medium">{workshop.instructor}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center shrink-0">
                <CreditCard className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-zinc-400 text-sm mb-1">Price</p>
                <p className="text-zinc-50 font-medium">{workshop.price || "Free"}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-zinc-400 text-sm mb-1">Target Audience</p>
                <p className="text-zinc-50 font-medium text-sm leading-tight">{workshop.targetAudience}</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-zinc-50 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              Course Overview
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              {workshop.description}
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-zinc-50 mb-4">What you'll learn</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {workshop.topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-zinc-300">{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center mt-12 gap-4">
            {isEnrolled ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-2xl flex flex-col items-center gap-3 text-center glass-card"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-50 tracking-tight">You successfully enrolled!</h3>
                <p className="text-zinc-300 leading-relaxed">
                  We will connect with you through our Learning Management System shortly.
                </p>
              </motion.div>
            ) : (
              <>
                <button 
                  onClick={handleEnroll}
                  disabled={isEnrolling}
                  className="px-8 py-4 bg-emerald-500 text-zinc-50 rounded-full font-medium hover:bg-emerald-400 transition-colors w-full sm:w-auto text-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] disabled:opacity-50">
                  {isEnrolling ? 'Enrolling...' : 'Enroll Now'}
                </button>
                {enrollError && (
                  <p className="text-sm font-medium text-red-400">
                    {enrollError}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

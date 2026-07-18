import { useState } from 'react';
import { motion } from 'motion/react';
import { QrCode, Smartphone, CreditCard, ShieldCheck, X, ChevronRight } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { DNABackground } from '../components/DNABackground';
import { workshops } from '../data/workshops';

export function PaymentInterface() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'qr'>('qr');

  const workshop = workshops.find(w => w.id === id);

  if (!workshop) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center relative z-10 p-6">
        <div className="text-center text-zinc-50">
          <h1 className="text-3xl font-bold mb-4">Workshop not found</h1>
          <Link to="/workshops" className="text-emerald-400 hover:underline">Back to workshops</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative z-10 p-6 overflow-hidden">
      <DNABackground />

      <div className="w-full max-w-xl relative mt-16">
        {/* Decorative elements behind the card */}
        <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-cyan-500/30 rounded-[2.5rem] blur-2xl opacity-50 animate-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-[#0a0f16]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="p-8 border-b border-white/10 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center shadow-lg shadow-emerald-500/10 shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-xl font-display font-medium text-white mb-1">Secure Checkout</h1>
                <p className="text-zinc-400 text-sm">Paying for: <strong className="text-emerald-400 font-medium">{workshop.title}</strong></p>
                <p className="text-zinc-400 text-xs mt-0.5">Amount to pay: <span className="text-zinc-300 font-medium">{workshop.price}</span></p>
              </div>
            </div>
            <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 transition-colors text-zinc-400 hover:text-white mt-1 group shrink-0">
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          <div className="p-8">
            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => setPaymentMethod('qr')}
                className={`p-4 rounded-xl border flex items-center justify-center gap-3 transition-all ${
                  paymentMethod === 'qr'
                    ? 'bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/50 text-emerald-400 shadow-lg shadow-emerald-500/10'
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10 hover:text-zinc-300'
                }`}
              >
                <QrCode className="w-5 h-5" />
                <span className="font-medium text-sm">Scan QR Code</span>
              </button>
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`p-4 rounded-xl border flex items-center justify-center gap-3 transition-all ${
                  paymentMethod === 'upi'
                    ? 'bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/50 text-emerald-400 shadow-lg shadow-emerald-500/10'
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10 hover:text-zinc-300'
                }`}
              >
                <Smartphone className="w-5 h-5" />
                <span className="font-medium text-sm">UPI Apps</span>
              </button>
            </div>

            <div className="bg-black/40 rounded-2xl p-8 border border-white/5 min-h-[320px] flex items-center justify-center">
              {paymentMethod === 'qr' ? (
                <motion.div
                  key="qr"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center w-full max-w-sm mx-auto"
                >
                  <div className="bg-white p-4 rounded-xl mb-6 aspect-square max-w-[200px] mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10">
                    {/* Placeholder for actual QR code */}
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=bioassist@upi&pn=BioAssist&cu=INR" 
                      alt="Payment QR Code" 
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-white font-medium mb-2">Scan with any UPI App</h3>
                  <p className="text-zinc-400 text-sm">Open Google Pay, PhonePe, or Paytm and scan this QR code to complete your payment.</p>
                </motion.div>
              ) : (
                <motion.div
                  key="upi"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center w-full max-w-sm mx-auto space-y-4"
                >
                  <h3 className="text-white font-medium mb-4 text-left px-1">Select an app</h3>
                  <button className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 rounded-2xl p-4 transition-all group shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 shadow-inner">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.svg" alt="Google Pay" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-zinc-200 font-medium group-hover:text-emerald-400 transition-colors">Google Pay</span>
                        <span className="text-zinc-500 text-xs">Pay via GPay app</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                  </button>
                  <button className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 rounded-2xl p-4 transition-all group shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 shadow-inner">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.svg" alt="PhonePe" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-zinc-200 font-medium group-hover:text-emerald-400 transition-colors">PhonePe</span>
                        <span className="text-zinc-500 text-xs">Pay via PhonePe app</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                  </button>
                  <button className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 rounded-2xl p-4 transition-all group shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 shadow-inner">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paytm-icon.svg" alt="Paytm" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex flex-col items-start">
                        <span className="text-zinc-200 font-medium group-hover:text-emerald-400 transition-colors">Paytm</span>
                        <span className="text-zinc-500 text-xs">Pay via Paytm app</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                  </button>
                </motion.div>
              )}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-zinc-500 text-xs">
              <CreditCard className="w-4 h-4" />
              Payments are secure and encrypted
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
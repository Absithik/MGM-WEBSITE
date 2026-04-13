import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call (Google Sheets / WhatsApp integration)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="lead-form" className="py-24 relative bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-gray-50 to-gray-50" />
      
      <div className="max-w-xl w-full mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel-gold p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Subtle Glow Background */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold-500/20 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold-600/20 rounded-full blur-[80px]" />

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative z-10"
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-serif font-bold mb-3 text-gray-900">Take the Next Step</h2>
                  <p className="text-gray-600">Fill out the form below to get complete details.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all shadow-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all shadow-sm"
                      placeholder="Enter your WhatsApp number"
                    />
                  </div>

                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Area in Salem</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all shadow-sm"
                      placeholder="E.g., Hasthampatti, Alagapuram"
                    />
                  </div>

                   <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">நீங்க யாரு? (Who are you?)</label>
                    <select 
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all appearance-none shadow-sm"
                    >
                      <option value="" disabled selected>Select an option</option>
                      <option value="business">Business Person</option>
                      <option value="employee">Salaried Employee</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden rounded-xl p-[1px]"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all group-hover:bg-white/90">
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 text-gold-600 animate-spin" />
                      ) : (
                        <>
                          <span className="text-gold-700 font-bold text-lg">Details தெரிஞ்சுக்க Submit பண்ணுங்க</span>
                          <svg className="w-5 h-5 text-gold-700 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </div>
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 relative z-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                  className="w-24 h-24 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-gold-600" />
                </motion.div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Thank You!</h3>
                <p className="text-gray-600 mb-8">
                  Your details have been received. Our team will contact you shortly via WhatsApp/Call.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-gold-700 hover:text-gold-800 font-bold underline underline-offset-4"
                >
                  Submit another response
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

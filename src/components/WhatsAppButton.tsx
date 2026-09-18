'use client';

import { MessageCircle, Facebook, X, MapPin, Sparkles, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const WhatsAppButton = () => {
  const [isWaOpen, setIsWaOpen] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsWaOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex flex-col gap-2.5 sm:gap-3.5 items-center">
        {/* Facebook Shortcut */}
        <a 
          href="https://www.facebook.com/kamal.aboali.law.firm" 
          target="_blank" 
          rel="noreferrer"
          className="relative w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/85 hover:bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_8px_25px_rgba(24,119,242,0.4)] backdrop-blur-md border border-white/15 active:scale-95 sm:hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
          title="متابعة صفحتنا على فيسبوك"
          aria-label="صفحة فيسبوك الرسمية"
        >
          <Facebook className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          <span className="hidden sm:block absolute right-full mr-3.5 bg-slate-900/95 text-slate-100 border border-white/10 px-3 py-1.5 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none backdrop-blur-md">
            تابعنا على فيسبوك
          </span>
        </a>

        {/* WhatsApp Conversion Hub */}
        <div className="relative flex justify-center">
          <AnimatePresence>
            {isWaOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.95 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="fixed inset-x-3 bottom-20 sm:absolute sm:inset-x-auto sm:bottom-full sm:left-0 sm:mb-3.5 bg-[#0b0f17]/98 backdrop-blur-3xl rounded-2xl shadow-[0_25px_60px_-10px_rgba(0,0,0,0.85)] border border-white/20 dark:border-gold/30 p-4 sm:w-80 origin-bottom-left text-white max-w-sm mx-auto sm:mx-0 z-50"
                dir="rtl"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                    <h4 className="font-bold text-xs sm:text-sm text-slate-100 flex items-center gap-1">
                      <span>مكتب الاستشارات الفورية</span>
                      <Sparkles className="w-3.5 h-3.5 text-[#dfb76c]" />
                    </h4>
                  </div>
                  <button 
                    onClick={() => setIsWaOpen(false)} 
                    className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors focus:outline-none min-h-[36px] min-w-[36px] flex items-center justify-center"
                    aria-label="إغلاق القائمة"
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-300 mb-3 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#dfb76c] shrink-0" />
                  <span>اختر الفرع الأقرب إليك لبدء المحادثة:</span>
                </p>

                {/* Branches Links */}
                <div className="flex flex-col gap-2">
                  {/* Sadat Branch */}
                  <a 
                    href="https://wa.me/201505363697" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.05] hover:bg-emerald-500/20 active:bg-emerald-500/25 border border-white/10 hover:border-emerald-500/40 text-slate-200 hover:text-white transition-all duration-200 min-h-[48px]"
                    onClick={() => setIsWaOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div className="text-right flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-xs sm:text-sm text-white">فرع مدينة السادات</p>
                        <span className="text-[9px] bg-emerald-500/25 text-emerald-300 px-2 py-0.5 rounded-full font-semibold">متاح الآن</span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans mt-0.5" dir="ltr">+20 150 536 3697</p>
                    </div>
                  </a>

                  {/* Zayed Branch */}
                  <a 
                    href="https://wa.me/201505363698" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.05] hover:bg-emerald-500/20 active:bg-emerald-500/25 border border-white/10 hover:border-emerald-500/40 text-slate-200 hover:text-white transition-all duration-200 min-h-[48px]"
                    onClick={() => setIsWaOpen(false)}
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div className="text-right flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-xs sm:text-sm text-white">فرع الشيخ زايد</p>
                        <span className="text-[9px] bg-emerald-500/25 text-emerald-300 px-2 py-0.5 rounded-full font-semibold">متاح الآن</span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans mt-0.5" dir="ltr">+20 150 536 3698</p>
                    </div>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Trigger Button with Elegant Beacon Pulse */}
          <button 
            onClick={() => setIsWaOpen(!isWaOpen)}
            className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-tr from-[#1ea952] to-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.4)] active:scale-90 sm:hover:scale-105 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#0b0f17]"
            title="راسلنا على واتساب مباشرة"
            aria-label="التواصل عبر واتساب"
          >
            {/* Subtle Ambient Pulse Ring */}
            <span 
              className="absolute -inset-1 rounded-full border-2 border-emerald-400/40 animate-ping pointer-events-none" 
              style={{ animationDuration: '3.2s' }} 
            />

            {isWaOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/10 stroke-[2.2]" />}
            
            {!isWaOpen && (
              <span className="hidden sm:block absolute right-full mr-3.5 bg-slate-900/95 text-slate-100 border border-white/10 px-3.5 py-1.5 rounded-xl text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none backdrop-blur-md">
                تحدث مع مستشارك القانوني
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Backdrop overlay for mobile WhatsApp popup */}
      {isWaOpen && (
        <div 
          onClick={() => setIsWaOpen(false)} 
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40 sm:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
};

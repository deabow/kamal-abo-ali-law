import { MessageCircle, Facebook, X, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const WhatsAppButton = () => {
  const [isWaOpen, setIsWaOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4 items-center">
      {/* Facebook Button */}
      <a 
        href="#" 
        target="_blank" 
        rel="noreferrer"
        className="relative w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"
        title="متابعة على فيسبوك"
      >
        <Facebook className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
          متابعنا على فيسبوك
        </span>
      </a>

      {/* WhatsApp Menu */}
      <div className="relative flex justify-center">
        <AnimatePresence>
          {isWaOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-full mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-64 left-0 origin-bottom-left"
            >
              <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                <h4 className="font-bold text-gray-900">تواصل عبر واتساب</h4>
                <button onClick={() => setIsWaOpen(false)} className="text-gray-400 hover:text-red-500 transition-colors">
                  <X size={18} />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <a 
                  href="https://wa.me/201119102542" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 text-gray-700 hover:text-green-600 transition-all group"
                  onClick={() => setIsWaOpen(false)}
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-500 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all shrink-0">
                    <MapPin size={14} />
                  </div>
                  <div className="text-right w-full">
                    <p className="font-bold text-sm">فرع السادات</p>
                    <p className="text-xs text-gray-400 font-sans" dir="ltr">+20 111 910 2542</p>
                  </div>
                </a>
                <a 
                  href="https://wa.me/201001234567" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 text-gray-700 hover:text-green-600 transition-all group"
                  onClick={() => setIsWaOpen(false)}
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-500 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all shrink-0">
                    <MapPin size={14} />
                  </div>
                  <div className="text-right w-full">
                    <p className="font-bold text-sm">فرع زايد</p>
                    <p className="text-xs text-gray-400 font-sans" dir="ltr">+20 100 123 4567</p>
                  </div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <button 
          onClick={() => setIsWaOpen(!isWaOpen)}
          className="relative w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"
          title="راسلنا على واتس أب"
        >
          {isWaOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-8 h-8" />}
          {!isWaOpen && (
            <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
              تحدث معنا الآن
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { Link } from 'react-router-dom';

export const Hero = ({ lang }: { lang: Language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/1.jpg', // Local image of Dar Al-Qada Al-Ali
      badge: { ar: 'دار القضاء العالي', en: 'High Court of Justice' },
      title: { 
        ar: <>نحمي <span className="text-accent">حقوقك</span> في قلب القاهرة</>, 
        en: <>Protecting Your <span className="text-accent italic">Rights</span> in Cairo</> 
      },
      desc: { 
        ar: 'نقدم استشارات قانونية متخصصة وحلولاً فعالة وفقاً لأحدث التشريعات المصرية مع الالتزام التام بالسرية والنزاهة.', 
        en: 'We provide specialized legal consultations and effective solutions according to the latest Egyptian legislation with full commitment to confidentiality.' 
      },
      primaryBtn: { ar: 'احجز استشارة الآن', en: 'Book Consultation Now' },
      secondaryBtn: { ar: 'خدماتنا القانونية', en: 'Our Legal Services' }
    },
    {
      image: '/1.jpg', // Local image for slide two
      badge: { ar: 'المحكمة الدستورية العليا', en: 'Supreme Constitutional Court' },
      title: { 
        ar: <>دفاع <span className="text-accent">قوي</span> أمام المحاكم المصرية</>, 
        en: <>Strong <span className="text-accent italic">Defense</span> in Egyptian Courts</> 
      },
      desc: { 
        ar: 'فريقنا يجمع بين الخبرة العميقة في القانون المصري والاحترافية الدولية لضمان أفضل تمثيل قانوني لقضاياكم.', 
        en: 'Our team combines deep experience in Egyptian law and international professionalism to ensure the best legal representation.' 
      },
      primaryBtn: { ar: 'تواصل معنا', en: 'Contact Us' },
      secondaryBtn: { ar: 'فروعنا في مصر', en: 'Our Branches in Egypt' }
    },
    {
      image: '/1.jpg', // Local image for slide three
      badge: { ar: 'عراقة القانون المصري', en: 'Egyptian Legal Heritage' },
      title: { 
        ar: <>شريكك <span className="text-accent">القانوني</span> الموثوق بمصر</>, 
        en: <>Your Trusted <span className="text-accent italic">Legal</span> Partner in Egypt</> 
      },
      desc: { 
        ar: 'نواكب التطورات التشريعية المصرية لنقدم لعملائنا حلولاً تتناسب مع احتياجاتهم المتغيرة في عالم الأعمال والاستثمار.', 
        en: 'We keep pace with Egyptian legislative developments to provide our clients with solutions that suit their changing needs.' 
      },
      primaryBtn: { ar: 'ابدأ استشارتك', en: 'Start Your Consultation' },
      secondaryBtn: { ar: 'المدونة القانونية', en: 'Legal Blog' }
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000); // Increased time for better zoom effect
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image with Zoom Animation */}
          <motion.img 
            src={slides[currentSlide].image} 
            alt="Hero Background" 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 8, 
              ease: "easeOut"
            }}
            className="h-full w-full opacity-60 object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/20 to-primary/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-5 py-1.5 bg-accent text-white rounded-full text-sm font-bold mb-8 shadow-lg shadow-accent/20"
            >
              {slides[currentSlide].badge[lang]}
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight font-serif tracking-tight">
              {slides[currentSlide].title[lang]}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              {slides[currentSlide].desc[lang]}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link 
                to="/contact"
                className="bg-accent text-white px-10 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all min-w-[200px] text-lg shadow-xl shadow-accent/30 hover:-translate-y-1"
              >
                {slides[currentSlide].primaryBtn[lang]}
              </Link>
              <Link 
                to="/services"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all min-w-[200px] text-lg hover:-translate-y-1"
              >
                {slides[currentSlide].secondaryBtn[lang]}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/5 hover:bg-accent text-white transition-all border border-white/10 flex items-center justify-center group"
      >
        <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/5 hover:bg-accent text-white transition-all border border-white/10 flex items-center justify-center group"
      >
        <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === idx ? 'w-12 bg-accent' : 'w-3 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

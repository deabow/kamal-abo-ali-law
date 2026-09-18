'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Shield, Award, Building2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Language } from '../types';
import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';

export const Hero = ({ lang }: { lang: Language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slides = [
    {
      image: '/1.jpg',
      icon: Shield,
      badge: { ar: 'معاييرنا المهنية الرائدة', en: 'Our Leading Professional Standards' },
      title: { 
        ar: <> الدقة والشفافية و <span className="text-gradient-gold">سرية البيانات</span> ليست مجرد شعارات </>, 
        en: <>Precision, Transparency, and <span className="text-gradient-gold">Data Confidentiality</span> are Not Just Slogans</> 
      },
      desc: {
        ar: 'نقدم استشارات قانونية متخصصة ومُحكمة بأعلى درجات السرية والاحترافية، مستندين إلى خبرة تتجاوز 20 عاماً في التشريعات والقوانين المصرية والدولية.',
        en: 'We provide specialized, high-tier legal consultations with strict confidentiality, grounded in over 20 years of experience across Egyptian and international legislation.'
      },
      primaryBtn: { ar: 'احجز استشارة سرية الآن', en: 'Book Confidential Consultation' },
      secondaryBtn: { ar: 'استكشف خدماتنا القانونية', en: 'Explore Legal Services' }
    },
    {
      image: '/1.jpg',
      icon: Award,
      badge: { ar: 'نخبة من المستشارين والقضاة السابقين', en: 'Elite Legal Counselors' },
      title: { 
        ar: <> فريق عمل <span className="text-gradient-gold">قانوني رفيع</span> متعدد التخصصات </>, 
        en: <>A Prestigious, Multidisciplinary <span className="text-gradient-gold">Legal Team</span></> 
      },
      desc: { 
        ar: 'يجمع فريقنا نخبة من المحامين والمستشارين المعتمدين أمام محاكم النقض والدستورية العليا لضمان أقوى تمثيل قانوني وحماية مكتسباتكم.', 
        en: 'Our firm brings together certified attorneys before the Court of Cassation and Constitutional Court to guarantee supreme legal defense.' 
      },
      primaryBtn: { ar: 'تواصل مع فريق المستشارين', en: 'Connect With Counselors' },
      secondaryBtn: { ar: 'فروعنا في مصر', en: 'Our Branches in Egypt' }
    },
    {
      image: '/1.jpg',
      icon: Building2,
      badge: { ar: 'قطاع الأعمال والشركات والمستثمرين', en: 'Corporate & Investment Sector' },
      title: { 
        ar: <> مؤسسة قانونية <span className="text-gradient-gold">شاملة</span> لحوكمة وامتثال الشركات </>, 
        en: <>Comprehensive Legal Defense For <span className="text-gradient-gold">Corporate Governance</span></> 
      },
      desc: { 
        ar: 'نقدم الدعم القانوني الاستراتيجي للشركات الاستثمارية والمؤسسات التجارية، من التأسيس وصياغة العقود وحتى حل النزاعات المعقدة والاندماج.', 
        en: 'Delivering strategic counsel for commercial enterprises and investments, from incorporation and drafting to complex litigation.' 
      },
      primaryBtn: { ar: 'طلب استشارة تجارية', en: 'Request Corporate Advice' },
      secondaryBtn: { ar: 'خدمات الشركات والامتثال', en: 'Corporate Compliance Services' }
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  // Touch Swipe Handlers for Mobile Phones
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      // Swiped Left
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      // Swiped Right
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const SlideIcon = slides[currentSlide].icon;

  return (
    <section 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-[88vh] sm:min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-[#0b0f17] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 select-none"
    >
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Subtle Zooming Cinematic Background */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8.5, ease: 'easeOut' }}
          >
            <Image
              src={slides[currentSlide].image}
              alt="Dar Al-Qada Al-Ali Background"
              fill
              priority={currentSlide === 0}
              sizes="100vw"
              className="object-cover opacity-30 filter brightness-90"
              placeholder="blur"
              blurDataURL={BLUR_IMAGE_PLACEHOLDER}
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Luxury Executive Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/70 to-[#0b0f17]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(197,168,128,0.18),transparent_75%)]" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center"
          >
            {/* Prestige Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/15 dark:border-gold/30 text-[11px] sm:text-xs md:text-sm font-bold text-[#dfb76c] mb-4 sm:mb-6 shadow-gold-sm max-w-[92vw] truncate"
            >
              <SlideIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfb76c] shrink-0" />
              <span className="truncate">{slides[currentSlide].badge[lang]}</span>
            </motion.div>

            {/* Main Luxury Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-[1.3] sm:leading-[1.25] tracking-tight font-arabic max-w-5xl px-2">
              {slides[currentSlide].title[lang]}
            </h1>

            {/* Reassuring Subtitle */}
            <p className="text-xs sm:text-base md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-[1.8] sm:leading-[1.9] font-normal font-sans px-2">
              {slides[currentSlide].desc[lang]}
            </p>

            {/* Action Buttons: Full width on mobile, inline on tablet+ */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-md sm:max-w-none">
              <Link 
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-[#dfb76c] via-[#c5a880] to-[#b38f56] text-slate-950 px-7 sm:px-10 py-3.5 sm:py-4 rounded-xl font-black hover:shadow-gold-glow hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-sm sm:text-base md:text-lg shadow-[0_10px_25px_-5px_rgba(197,168,128,0.35)] min-h-[48px] flex items-center justify-center"
              >
                {slides[currentSlide].primaryBtn[lang]}
              </Link>
              <Link 
                href="/services"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white border border-white/20 hover:border-gold/50 px-7 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-sm sm:text-base md:text-lg shadow-sm min-h-[48px] flex items-center justify-center"
              >
                {slides[currentSlide].secondaryBtn[lang]}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows for desktop */}
      <button 
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="hidden md:flex absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 hover:bg-gold/20 text-white hover:text-[#dfb76c] transition-all duration-300 border border-white/10 hover:border-gold/40 backdrop-blur-md items-center justify-center group focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button 
        onClick={nextSlide}
        aria-label="Next Slide"
        className="hidden md:flex absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/5 hover:bg-gold/20 text-white hover:text-[#dfb76c] transition-all duration-300 border border-white/10 hover:border-gold/40 backdrop-blur-md items-center justify-center group focus:outline-none focus:ring-2 focus:ring-accent"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 min-h-[6px] ${
              currentSlide === idx 
                ? 'w-8 sm:w-14 bg-gradient-to-r from-[#dfb76c] to-[#c5a880] shadow-[0_0_12px_rgba(197,168,128,0.6)]' 
                : 'w-2.5 sm:w-3 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
import { MapPin, Phone, ChevronLeft, ChevronRight, Video, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';
import { Language } from '../types';

const BRANCHES = [
  {
    id: 'sadat',
    name: { ar: 'فرع مدينة السادات', en: 'Sadat City Branch' },
    address: { ar: 'المنطقة الحادية عشر - حي ال 7 عمارات - مدينة السادات - المنوفية', en: '11th District - 7 Buildings Neighborhood - Sadat City - Menoufia' },
    phone: '01505363697',
    image: '/sadat-offi.png',
    mapUrl: 'https://www.google.com/maps?q=30.360565185546875,30.529327392578125&z=17&hl=en&output=embed'
  },
  {
    id: 'sheikh-zayed',
    name: { ar: 'فرع الشيخ زايد', en: 'Sheikh Zayed Branch' },
    address: { ar: 'الحي الثامن - المجاورة 3 - شارع الحكمة - الشيخ زايد - الجيزة', en: '8th District - Neighborhood 3 - Al Hikma Street - Sheikh Zayed - Giza' },
    phone: '01505363698',
    image: '/dipo.png',
    mapUrl: 'https://www.google.com/maps?q=30.027071,30.9740143&z=17&hl=en&output=embed'
  }
];

export default function Branches({ lang }: { lang: Language }) {
  const isAr = lang === 'ar';

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 bg-white dark:bg-[#0b0f17] min-h-screen overflow-x-hidden w-full max-w-full">
      <section className="section-padding py-0 overflow-hidden relative w-full max-w-full">
        {/* Ambient Top Glow */}
        <div 
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(197,168,128,0.12),transparent_70%)] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-14 px-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dfb76c] mb-2 sm:mb-3 block">
              {isAr ? 'شبكة مكاتبنا' : 'Our Office Network'}
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 font-arabic leading-tight">
              {isAr ? 'فروع المؤسسة في مصر' : 'Our Law Firm Branches in Egypt'}
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              {isAr 
                ? 'نتواجد في أهم المراكز الحيوية والاستثمارية لنكون دوماً على مقربة منكم لتقديم المشورة والدفاع القانوني.' 
                : 'Located in key economic centers to stay close and accessible whenever legal counsel is needed.'}
            </p>
          </div>

          {/* Video Showcase Section with Luxury Bezel */}
          <div className="my-8 sm:my-12 max-w-4xl mx-auto">
            <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-3 bg-gradient-to-tr from-white/10 via-gold/15 to-transparent border border-slate-200 dark:border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              <video
                src="/videos/promo-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[220px] sm:h-[380px] md:h-[480px] rounded-xl sm:rounded-2xl object-cover filter brightness-95"
              />
              <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-slate-950/80 backdrop-blur-md px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-gold/30 text-[10px] sm:text-xs text-[#dfb76c] font-bold flex items-center gap-1.5 sm:gap-2">
                <Video className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>{isAr ? 'جولة في أروقة المؤسسة' : 'Tour Inside The Firm'}</span>
              </div>
            </div>
          </div>

          {/* Branches Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {BRANCHES.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white dark:bg-[#111726]/85 rounded-3xl overflow-hidden shadow-sm dark:shadow-luxury-card border border-slate-200/80 dark:border-white/10 hover:border-gold/50 dark:hover:border-gold/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <Link href={`/branches/${branch.id}`} className="block">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={branch.image}
                      alt={branch.name[lang]}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      placeholder="blur"
                      blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 right-4 inline-block px-3.5 py-1 bg-gold/90 text-slate-950 rounded-full text-xs font-black shadow-md">
                      {branch.id === 'sadat' ? (isAr ? 'محافظة المنوفية' : 'Menoufia') : (isAr ? 'محافظة الجيزة' : 'Giza')}
                    </div>
                  </div>
                  
                  <div className="p-7">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-accent dark:group-hover:text-[#dfb76c] transition-colors">
                      {branch.name[lang]}
                    </h2>
                    
                    <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-[#dfb76c] shrink-0 mt-1" />
                        <span className="leading-relaxed">{branch.address[lang]}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-[#dfb76c] shrink-0" />
                        <span className="font-sans font-bold text-slate-900 dark:text-white" dir="ltr">{branch.phone}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                      <span className="text-xs font-bold text-[#dfb76c] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                        <span>{isAr ? 'عرض بيانات الفرع والخريطة' : 'Branch Details & Directions'}</span>
                        {isAr ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

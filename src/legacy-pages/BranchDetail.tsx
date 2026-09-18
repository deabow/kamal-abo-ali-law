'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, ChevronLeft, ChevronRight, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';
import { useParams } from 'next/navigation';
import { Language } from '../types';

const BRANCHES_DATA = {
  'sadat': {
    id: 'sadat',
    name: { ar: 'فرع مدينة السادات - المنوفية', en: 'Sadat City Branch - Menoufia' },
    address: { ar: 'المنطقة الحادية عشر - حي ال 7 عمارات - مدينة السادات - المنوفية', en: '11th District - 7 Buildings Neighborhood - Sadat City - Menoufia' },
    phone: '01505363697',
    image: '/sadat-offi.png',
    mapUrl: 'https://www.google.com/maps?q=30.360565185546875,30.529327392578125&z=17&hl=en&output=embed',
    description: {
      ar: 'يوفر فرع مدينة السادات خدمات قانونية واستشارية متكاملة لعملاء المؤسسة والشركات والمصانع الاستثمارية في محافظة المنوفية والمناطق الصناعية المجاورة، تحت إشراف نخبة من المستشارين المتخصصين.',
      en: 'Sadat City Branch delivers comprehensive legal solutions to clients and major industrial enterprises across Menoufia and surrounding economic zones.'
    }
  },
  'sheikh-zayed': {
    id: 'sheikh-zayed',
    name: { ar: 'فرع الشيخ زايد - الجيزة', en: 'Sheikh Zayed Branch - Giza' },
    address: { ar: 'الحي الثامن - المجاورة 3 - شارع الحكمة - الشيخ زايد - الجيزة', en: '8th District - Neighborhood 3 - Al Hikma Street - Sheikh Zayed - Giza' },
    phone: '01505363698',
    image: '/dipo.png',
    mapUrl: 'https://www.google.com/maps?q=30.027071,30.9740143&z=17&hl=en&output=embed',
    description: {
      ar: 'يقدم فرع الشيخ زايد خدمات قانونية نوعية للشركات الاستثمارية ورجال الأعمال وكافة الموكلين في القاهرة الكبرى وكافة محافظات الجمهورية، مع تجهيزات استقبال استشارية رفيعة المستوى.',
      en: 'Sheikh Zayed Branch provides high-end legal advisory for investment firms, executives, and clients across Greater Cairo and nationwide.'
    }
  }
};

export default function BranchDetail({ lang }: { lang: Language }) {
  const params = useParams();
  const branchIdParam = params?.branchId;
  const branchId = Array.isArray(branchIdParam) ? branchIdParam[0] : branchIdParam;
  const branch = branchId ? BRANCHES_DATA[branchId as keyof typeof BRANCHES_DATA] : null;
  const isAr = lang === 'ar';

  if (!branch) {
    return (
      <div className="pt-40 pb-28 text-center bg-white dark:bg-[#0b0f17] min-h-screen">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          {isAr ? 'الفرع المطلوب غير موجود' : 'Branch not found'}
        </h2>
        <Link 
          href="/branches" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#dfb76c] via-[#c5a880] to-[#b38f56] text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm"
        >
          {isAr ? 'العودة لقائمة الفروع' : 'Back to Branches'}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 bg-white dark:bg-[#0b0f17] min-h-screen overflow-x-hidden w-full max-w-full">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
        <Link 
          href="/branches" 
          className="text-[#dfb76c] font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 sm:gap-2 hover:gap-3 transition-all duration-300 min-h-[36px]"
        >
          {isAr ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          <span>{isAr ? 'العودة لكافة فروع المؤسسة' : 'Back to All Branches'}</span>
        </Link>
      </div>

      <section className="section-padding py-0">
        <div className="max-w-7xl mx-auto">
          {/* Header Image with Luxury Bezel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-8 sm:mb-12 h-64 sm:h-80 md:h-96 w-full border border-slate-200 dark:border-white/10 bg-slate-950"
          >
            <Image
              src={branch.image}
              alt={branch.name[lang]}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-contain p-2 sm:p-4 filter brightness-95"
              placeholder="blur"
              blurDataURL={BLUR_IMAGE_PLACEHOLDER}
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-gold/90 text-slate-950 rounded-full text-[10px] sm:text-xs font-black shadow-lg">
              {branch.id === 'sadat' ? (isAr ? 'محافظة المنوفية' : 'Menoufia') : (isAr ? 'محافظة الجيزة' : 'Giza')}
            </div>
          </motion.div>

          {/* Content & Quick Info Grid */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Main Details */}
            <div className="lg:col-span-2 text-start">
              <motion.div
                initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 font-arabic leading-tight">
                  {branch.name[lang]}
                </h1>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  {branch.description[lang]}
                </p>

                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#111726]/80 border border-slate-200/80 dark:border-white/10 space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#dfb76c]" />
                    <span>{isAr ? 'بيانات الاتصال بالمقر' : 'Office Contact Details'}</span>
                  </h3>
                  
                  <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfb76c] shrink-0 mt-0.5" />
                    <span>{branch.address[lang]}</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfb76c] shrink-0" />
                    <span className="font-sans font-bold text-slate-900 dark:text-white text-sm sm:text-base" dir="ltr">{branch.phone}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={`https://wa.me/2${branch.phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gradient-to-r from-[#dfb76c] via-[#c5a880] to-[#b38f56] text-slate-950 px-6 sm:px-8 py-3.5 rounded-xl font-black hover:shadow-gold-glow active:scale-95 transition-all duration-200 shadow-md text-sm sm:text-base flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <span>{isAr ? 'تواصل عبر واتساب فوراً' : 'Chat via WhatsApp'}</span>
                  </a>

                  <a
                    href={`tel:${branch.phone}`}
                    className="bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/15 text-white border border-transparent dark:border-white/15 px-6 sm:px-8 py-3.5 rounded-xl font-bold transition-all duration-200 text-sm sm:text-base flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <Phone className="w-4 h-4 text-[#dfb76c]" />
                    <span>{isAr ? 'اتصال هاتفي مباشر' : 'Call Directly'}</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Quick Summary Card */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: isAr ? -24 : 24 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-slate-50 dark:bg-[#111726]/85 p-7 rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-luxury-card text-start"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-200/80 dark:border-white/10 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#dfb76c]" />
                  <span>{isAr ? 'أوقات العمل والمعلومات' : 'Office Information'}</span>
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">{isAr ? 'الموقع' : 'Location'}</p>
                    <p>{branch.id === 'sadat' ? (isAr ? 'مدينة السادات - المنوفية' : 'Sadat City') : (isAr ? 'الشيخ زايد - الجيزة' : 'Sheikh Zayed')}</p>
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">{isAr ? 'الهاتف المعتمد' : 'Telephone'}</p>
                    <p className="font-sans font-semibold text-[#dfb76c]" dir="ltr">{branch.phone}</p>
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 dark:text-white mb-1">{isAr ? 'البريد الإلكتروني' : 'Official Email'}</p>
                    <a href="mailto:ceo@aboalilawfirm.com" className="text-[#dfb76c] hover:underline">
                      ceo@aboalilawfirm.com
                    </a>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-2 text-emerald-500 font-semibold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{isAr ? 'استقبال الموكلين بموعد مسبق' : 'By Appointment Only'}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Interactive Map Section */}
          <motion.div
            key={`map-${branch.id}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-arabic text-start">
              {isAr ? 'موقع الفرع على الخريطة' : 'Office Location on Map'}
            </h2>
            <div className="bg-white dark:bg-[#111726]/85 rounded-3xl overflow-hidden shadow-sm dark:shadow-luxury-card border border-slate-200/80 dark:border-white/10 h-96 p-2">
              <iframe
                key={branch.id}
                src={branch.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map - ${branch.name.en}`}
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

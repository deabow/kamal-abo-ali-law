'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Language } from '../types';

const BRANCHES_DATA = {
  'sadat': {
    id: 'sadat',
    name: { ar: 'فرع مدينة السادات', en: 'Sadat City Branch' },
    address: { ar: 'مدينة السادات - المنطقة 11 - 7 عمارات', en: 'Sadat City - 11th Area - 7 Buildings' },
    phone: '01119102542',
    image: '/22.jpg',
    mapUrl: 'https://www.google.com/maps?q=30.360565185546875,30.529327392578125&z=17&hl=en&output=embed',
    description: {
      ar: 'فرع مدينة السادات يوفر خدمات قانونية متكاملة للعملاء في المنوفية والمناطق المجاورة. يضم فريق من الخبراء القانونيين المتخصصين في مختلف المجالات.',
      en: 'Sadat City Branch provides comprehensive legal services to clients in Menoufia and surrounding areas. It has a team of legal experts specialized in various fields.'
    }
  },
  'sheikh-zayed': {
    id: 'sheikh-zayed',
    name: { ar: 'فرع الشيخ ذايد', en: 'Sheikh Zayed Branch' },
    address: { ar: 'XXXX', en: 'XXXX' },
    phone: 'XXXX',
    image: '/22.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.567!2d31.15470!3d30.01560!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583c2f123456%3A0x789abcdef!2z2YXZitiv2YjZiCDYqNmI2YrZhCDYo9mH2YrYsQ!5e0!3m2!1sar!2seg!4v1234567890',
    description: {
      ar: 'فرع الشيخ ذايد يقدم خدمات قانونية عالية المستوى في منطقة الشيخ ذايد الراقية. متخصصون في القانون التجاري والعقاري.',
      en: 'Sheikh Zayed Branch offers high-quality legal services in the upscale Sheikh Zayed area. Specialists in commercial and real estate law.'
    }
  }
};

export default function BranchDetail({ lang }: { lang: Language }) {
  const params = useParams();
  const branchIdParam = params?.branchId;
  const branchId = Array.isArray(branchIdParam) ? branchIdParam[0] : branchIdParam;
  const branch = branchId ? BRANCHES_DATA[branchId as keyof typeof BRANCHES_DATA] : null;

  if (!branch) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold text-primary">{lang === 'ar' ? 'الفرع غير موجود' : 'Branch not found'}</h2>
        <Link href="/branches" className="text-accent mt-4 inline-block">{lang === 'ar' ? 'العودة للفروع' : 'Back to Branches'}</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link href="/branches" className="text-accent font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
          {lang === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          {lang === 'ar' ? 'العودة للفروع' : 'Back to Branches'}
        </Link>
      </div>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden shadow-xl mb-12 h-96"
          >
            <img 
              src={branch.image} 
              alt={branch.name[lang]} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
                  {branch.id === 'sadat' ? (lang === 'ar' ? 'المنوفية' : 'Menoufia') : (lang === 'ar' ? 'الجيزة' : 'Giza')}
                </div>
                <h1 className="text-4xl font-bold text-primary mb-6">{branch.name[lang]}</h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {branch.description[lang]}
                </p>

                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-bold text-primary">{lang === 'ar' ? 'معلومات التواصل' : 'Contact Information'}</h3>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>{branch.address[lang]}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-accent" />
                    <span>{branch.phone}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a 
                    href={`tel:${branch.phone}`} 
                    className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
                  >
                    {lang === 'ar' ? 'اتصل الآن' : 'Call Now'}
                  </a>
                  <a 
                    href={`https://wa.me/2${branch.phone}`} 
                    target="_blank"
                    rel="noreferrer"
                    className="bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all"
                  >
                    {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Quick Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-bg-soft p-8 rounded-3xl"
              >
                <h3 className="text-xl font-bold text-primary mb-6">{lang === 'ar' ? 'معلومات سريعة' : 'Quick Info'}</h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <div>
                    <p className="font-bold text-primary mb-1">{lang === 'ar' ? 'الموقع' : 'Location'}</p>
                    <p>{branch.id === 'sadat' ? (lang === 'ar' ? 'مدينة السادات' : 'Sadat City') : (lang === 'ar' ? 'الشيخ ذايد' : 'Sheikh Zayed')}</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary mb-1">{lang === 'ar' ? 'الهاتف' : 'Phone'}</p>
                    <p>{branch.phone}</p>
                  </div>
                  <div>
                    <p className="font-bold text-primary mb-1">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</p>
                    <p>info@aboalilawfirm.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">{lang === 'ar' ? 'موقعنا على الخريطة' : 'Our Location on Map'}</h2>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-96">
              <iframe 
                src={branch.mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Other Branches */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-primary mb-6">{lang === 'ar' ? 'فروعنا الأخرى' : 'Our Other Branches'}</h2>
            <Link 
              href="/branches"
              className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
            >
              {lang === 'ar' ? 'عرض جميع الفروع' : 'View All Branches'}
              {lang === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { MapPin, Phone, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Language } from '../types';

const BRANCHES = [
  {
    id: 'sadat',
    name: { ar: 'فرع مدينة السادات', en: 'Sadat City Branch' },
    address: { ar: 'XXXX', en: 'XXXX' },
    phone: 'XXXX',
    image: '/22.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.8349999999997!2d30.81760!3d30.26270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145834567890abc%3A0x123456789abc!2z2YXZitiv2YjZiCDDiNCQINin2YTZhNmF2K8!5e0!3m2!1sar!2seg!4v1234567890'
  },
  {
    id: 'sheikh-zayed',
    name: { ar: 'فرع الشيخ ذايد', en: 'Sheikh Zayed Branch' },
    address: { ar: 'XXXX', en: 'XXXX' },
    phone: 'XXXX',
    image: '/22.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.567!2d31.15470!3d30.01560!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583c2f123456%3A0x789abcdef!2z2YXZitiv2YjZiCDYqNmI2YrZhCDYo9mH2YrYsQ!5e0!3m2!1sar!2seg!4v1234567890'
  }
];

export default function Branches({ lang }: { lang: Language }) {
  return (
    <div className="pt-32 pb-20">
      <section className="section-padding bg-bg-soft overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,100 L900,100 L900,900 L100,900 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="1" />
            <line x1="100" y1="500" x2="900" y2="500" stroke="currentColor" strokeWidth="1" />
            <line x1="500" y1="100" x2="500" y2="900" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {lang === 'ar' ? 'فروعنا' : 'Our Branches'}
            </h2>
            <p className="text-gray-500">{lang === 'ar' ? 'نحن دائماً بالقرب منك لخدمتك في أي وقت.' : 'We are always near you to serve you anytime.'}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {BRANCHES.map((branch) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all group cursor-pointer"
              >
                <Link href={`/branches/${branch.id}`} className="block h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={branch.image} 
                      alt={branch.name[lang]} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-bold mb-2">
                      {branch.id === 'sadat' ? (lang === 'ar' ? 'المنوفية' : 'Menoufia') : (lang === 'ar' ? 'الجيزة' : 'Giza')}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{branch.name[lang]}</h3>
                    <div className="space-y-2 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{branch.address[lang]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-accent" />
                        <span>{branch.phone}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all">
                      {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                      {lang === 'ar' ? <ChevronRight className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
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

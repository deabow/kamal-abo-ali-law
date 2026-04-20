import { motion } from 'motion/react';
import { MapPin, Phone, ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';
import { Language } from '../types';

const BRANCHES = [
  {
    id: 'sadat',
    name: { ar: 'فرع مدينة السادات', en: 'Sadat City Branch' },
    address: { ar: 'المنطقة الحادية عشر - حي ال 7 عمارات - مدينة السادات - المنوفية', en: '11th District - 7 Buildings Neighborhood - Sadat City - Menoufia' },
    phone: '01505363697',
    image: '/22.jpg',
    mapUrl: 'https://www.google.com/maps?q=30.360565185546875,30.529327392578125&z=17&hl=en&output=embed'
  },
  {
    id: 'sheikh-zayed',
    name: { ar: 'فرع الشيخ زايد', en: 'Sheikh Zayed Branch' },
    address: { ar: 'الحي الثامن - المجاورة 3 - شارع الحكمة - الشيخ زايد - الجيزة', en: '8th District - Neighborhood 3 - Al Hikma Street - Sheikh Zayed - Giza' },
    phone: '01505363698',
    image: '/22.jpg',
    mapUrl: 'https://maps.app.goo.gl/3ZwWDuuCa1muHipS9'
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

          {/* Video Section Placeholder */}
          <div className="mb-20 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white relative group">
            <div className="p-6 text-center border-b border-gray-50">
              <h3 className="text-2xl font-bold text-primary">
                {lang === 'ar' ? 'جولة داخل فروعنا' : 'Our Branches Tour'}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {lang === 'ar' ? 'مكان الفيديو بتاع الفروع او نبذه عننا ' : ''}
              </p>
            </div>
            <div className="relative aspect-video bg-gray-50 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/22.jpg')" }}
              />

              <div className="relative z-10 w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer">
                <Play className="w-8 h-8 text-accent ml-1" fill="currentColor" />
              </div>
            </div>
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

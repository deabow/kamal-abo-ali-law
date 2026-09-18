import { Hero } from '../components/Hero';
import { Language } from '../types';
import { motion } from 'motion/react';
import { Award, ChevronLeft, ChevronRight, Gavel, Users, Briefcase, Building2, MapPin, Phone, Shield, Sparkles, Scale } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';

export default function Home({ lang }: { lang: Language }) {
  const isAr = lang === 'ar';

  return (
    <div className="pt-0 overflow-x-hidden w-full max-w-full">
      <Hero lang={lang} />

      {/* Quick Stats / Features Bento Grid */}
      <section className="py-16 sm:py-24 bg-bg-soft dark:bg-[#070a10] relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div 
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.08),transparent_70%)] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dfb76c] mb-2 block">
              {isAr ? 'ركائز العمل المؤسسي' : 'Pillars of Institutional Excellence'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white font-arabic">
              {isAr ? 'لماذا يختارنا كبار الموكلين والشركات؟' : 'Why Leading Clients & Enterprises Trust Us'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
            {[
              {
                icon: <Award className="w-7 h-7 sm:w-8 sm:h-8 text-[#dfb76c]" />,
                stat: isAr ? '+20 عاماً' : '20+ Years',
                title: { ar: 'خبرة قضائية عريقة', en: 'Decades of Legal Authority' },
                desc: { 
                  ar: 'أكثر من عقدين من الترافع والتمثيل القانوني المتمرس أمام مختلف درجات التقاضي ومحاكم النقض.', 
                  en: 'Over two decades of advocacy before high courts and the Court of Cassation.' 
                }
              },
              {
                icon: <Scale className="w-7 h-7 sm:w-8 sm:h-8 text-[#dfb76c]" />,
                stat: isAr ? '100%' : '100%',
                title: { ar: 'دقة استراتيجية صارمة', en: 'Strategic Meticulousness' },
                desc: { 
                  ar: 'دراسة وافية وبحث قانوني متعمق لكل قضية لبناء مذكرات دفاعية محكمة تضمن أفضل النتائج.', 
                  en: 'Comprehensive analysis and rigorous precedent research to build impenetrable defense briefs.' 
                }
              },
              {
                icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-[#dfb76c]" />,
                stat: isAr ? 'ميثاق شرف' : 'Strict Code',
                title: { ar: 'سرية مطلقة للبيانات', en: 'Total Client Confidentiality' },
                desc: { 
                  ar: 'نلتزم بأعلى معايير حماية الخصوصية والبيانات الحساسة للأفراد والكيانات الاقتصادية الكبرى.', 
                  en: 'Upholding non-negotiable confidentiality standards for individuals and corporate leaders.' 
                }
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="bg-white dark:bg-[#111726]/80 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm dark:shadow-luxury-card border border-slate-200/80 dark:border-white/10 hover:border-gold/50 dark:hover:border-gold/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 dark:bg-gold/15 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-black text-[#dfb76c] bg-gold/10 px-3 py-1 rounded-full font-sans tracking-wide">
                    {item.stat}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-accent dark:group-hover:text-[#dfb76c] transition-colors">
                  {item.title[lang]}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.desc[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0b0f17] overflow-hidden w-full max-w-full border-t border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Visual Container */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 p-1.5 sm:p-2 bg-gradient-to-tr from-white/10 via-gold/10 to-transparent">
              <Image
                src="/home.png"
                alt="About Us - Counselor Kamal Abu Ali"
                width={1360}
                height={853}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full max-w-full h-auto rounded-xl sm:rounded-2xl object-cover"
                style={{ width: '100%', height: 'auto' }}
                placeholder="blur"
                blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Mobile-safe Trust Badge (inline on mobile, floating on sm+) */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:right-6 bg-slate-950/95 text-white p-3.5 sm:p-5 rounded-2xl border border-gold/30 shadow-2xl backdrop-blur-xl max-w-full sm:max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold/20 flex items-center justify-center text-[#dfb76c] shrink-0">
                  <Scale size={18} />
                </div>
                <div className="text-start">
                  <p className="text-xs text-[#dfb76c] font-bold">المستشار كمال أبو علي</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-300">محامٍ بالنقض والدستورية العليا</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-start"
          >
            <span className="text-xs sm:text-sm font-bold text-[#dfb76c] uppercase tracking-widest mb-2 sm:mb-3 block">
              {isAr ? 'عن المؤسسة' : 'About The Firm'}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight font-arabic">
              {isAr ? 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية' : 'Kamal Abu Ali Law Firm'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-[1.9] sm:leading-[2] text-sm sm:text-base lg:text-lg">
              {isAr
                ? 'صرح قانوني رائد تأسس لتقديم حلول واستشارات قانونية متكاملة رفيعة المستوى. نجمع بين الفهم العميق لروح القوانين والتشريعات المصرية، والاحترافية المعاصرة لحماية مصالح موكلينا من الأفراد والمؤسسات والشركات.'
                : 'A premier legal institution dedicated to providing elite legal solutions and advisory. We combine deep knowledge of Egyptian jurisprudence with modern international standards to safeguard our clients.'}
            </p>
            <p className="text-slate-500 dark:text-slate-400 mb-6 sm:mb-8 leading-[1.8] text-xs sm:text-sm">
              {isAr
                ? 'فريقنا يضم نخبة من المستشارين المتخصصين في القضايا الجنائية الكبرى، حوكمة الشركات والامتثال، المنازعات التجارية، وقضايا الأسرة والتركات.'
                : 'Our firm hosts recognized practitioners in major criminal defense, corporate governance, commercial disputes, and complex estate distribution.'}
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 text-slate-900 dark:text-white font-bold hover:text-[#dfb76c] dark:hover:text-[#dfb76c] transition-all duration-300 group text-sm sm:text-base min-h-[44px]"
            >
              <span className="border-b-2 border-[#dfb76c] pb-0.5 group-hover:border-white transition-colors">
                {isAr ? 'استكشف المزيد عن المؤسسة وإنجازاتها' : 'Learn More About Our Heritage'}
              </span>
              {isAr ? (
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfb76c] group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfb76c] group-hover:translate-x-1 transition-transform" />
              )}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Teaser */}
      <section className="py-16 sm:py-24 bg-bg-soft dark:bg-[#070a10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dfb76c] mb-2 block">
              {isAr ? 'مجالات التخصص' : 'Practice Areas'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white font-arabic mb-3 sm:mb-4">
              {isAr ? 'خدماتنا القانونية المتخصصة' : 'Specialized Legal Services'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed">
              {isAr 
                ? 'تغطية قانونية شاملة تضمن أعلى مستويات الدفاع والامتثال وصياغة العقود الاستراتيجية.' 
                : 'Comprehensive legal defense, corporate compliance, and strategic contract management.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: <Gavel className="w-5 h-5 sm:w-6 sm:h-6" />, title: { ar: 'القانون الجنائي والمالي', en: 'Criminal & Financial Defense' }, desc: { ar: 'تمثيل متمرس في القضايا الجنائية والجرائم الاقتصادية وغسل الأموال.', en: 'Elite representation in criminal and economic cases.' } },
              { icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />, title: { ar: 'حوكمة وقانون الشركات', en: 'Corporate Law & Governance' }, desc: { ar: 'تأسيس الشركات، والامتثال للوائح، والاندماج وصياغة العقود التجارية.', en: 'Formation, regulatory compliance, mergers, and contracts.' } },
              { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, title: { ar: 'قضايا الأسرة والتركات', en: 'Family Law & Estates' }, desc: { ar: 'تسوية النزاعات الأسرية وقسمة المواريث والوصايا بسرية تامة.', en: 'Estate distribution, personal status, and family dispute resolution.' } },
              { icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />, title: { ar: 'القانون المدني والمنازعات', en: 'Civil Law & Litigation' }, desc: { ar: 'حماية الحقوق المالية والتعويضات وعقود المقاولات والتشييد.', en: 'Financial claims, compensation, and construction law.' } },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.35 }}
                className="bg-white dark:bg-[#111726]/80 p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-gold/50 dark:hover:border-gold/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm dark:shadow-luxury-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gold/10 text-[#dfb76c] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#dfb76c] group-hover:text-slate-950 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2 group-hover:text-accent dark:group-hover:text-[#dfb76c] transition-colors">
                    {service.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 sm:mb-6">
                    {service.desc[lang]}
                  </p>
                </div>
                <Link 
                  href="/services" 
                  className="text-xs font-bold text-[#dfb76c] inline-flex items-center gap-1 group-hover:gap-2 transition-all min-h-[36px]"
                >
                  <span>{isAr ? 'تفاصيل الخدمة' : 'View Details'}</span>
                  {isAr ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5 text-[#dfb76c]" />}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 dark:bg-white/10 hover:bg-gold dark:hover:bg-gold text-white hover:text-slate-950 dark:hover:text-slate-950 border border-transparent dark:border-white/15 px-7 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-md min-h-[48px] w-full sm:w-auto text-sm sm:text-base"
            >
              <span>{isAr ? 'عرض جميع الخدمات والتخصصات' : 'View All Legal Services'}</span>
              {isAr ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </Link>
          </div>
        </div>
      </section>

      {/* Branches Teaser */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0b0f17] overflow-hidden w-full max-w-full border-t border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="text-start">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dfb76c] mb-2 block">
                {isAr ? 'انتشارنا الجغرافي' : 'Our Locations'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 font-arabic leading-tight">
                {isAr ? 'فروعنا في مدينة السادات والشيخ زايد' : 'Our Offices in Sadat City & Sheikh Zayed'}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                {isAr 
                  ? 'نتواجد في موقعين استراتيجيين لتقديم أفضل تجربة قانونية واستقبالكم في مقرات مجهزة بأحدث أدوات العمل الاستشاري.' 
                  : 'Strategically located in Sadat City and Sheikh Zayed to welcome and advise our clients in executive office environments.'}
              </p>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-bg-soft dark:bg-[#111726]/80 border border-slate-200/80 dark:border-white/10 flex items-start gap-3.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold/15 text-[#dfb76c] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm block">
                      {isAr ? 'فرع مدينة السادات (المنوفية)' : 'Sadat City Branch - Menoufia'}
                    </span>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {isAr ? 'المنطقة الحادية عشر - حي ال 7 عمارات' : '11th District - 7 Buildings Neighborhood'}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-bg-soft dark:bg-[#111726]/80 border border-slate-200/80 dark:border-white/10 flex items-start gap-3.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold/15 text-[#dfb76c] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm block">
                      {isAr ? 'فرع الشيخ زايد (الجيزة)' : 'Sheikh Zayed Branch - Giza'}
                    </span>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {isAr ? 'الحي الثامن - المجاورة 3 - شارع الحكمة' : '8th District - Neighborhood 3 - Al Hikma Street'}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/branches"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#dfb76c] via-[#c5a880] to-[#b38f56] text-slate-950 px-7 py-3.5 rounded-xl font-bold hover:shadow-gold-sm transition-all duration-300 shadow-md w-full sm:w-auto min-h-[48px] text-sm sm:text-base"
              >
                <span>{isAr ? 'تفاصيل الفروع ومواقع الخريطة' : 'Explore Branch Details & Maps'}</span>
                {isAr ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 p-1.5 sm:p-2 bg-gradient-to-tr from-white/10 via-gold/10 to-transparent">
                <Image
                  src="/dipo.png"
                  alt="Kamal Abu Ali Law Firm Headquarters"
                  width={1280}
                  height={853}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full max-w-full h-auto rounded-xl sm:rounded-2xl object-cover"
                  style={{ width: '100%', height: 'auto' }}
                  placeholder="blur"
                  blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Consultation CTA Banner */}
      <section className="py-16 sm:py-20 bg-[#070a10] text-white relative overflow-hidden border-t border-white/10">
        <div 
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.15),transparent_70%)] pointer-events-none" 
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#dfb76c] font-bold mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'استشارات قانونية فورية وسرية' : 'Immediate & Confidential Consultation'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-arabic leading-tight">
            {isAr ? 'هل تواجه تحدياً أو استحقاقاً قانونياً؟' : 'Facing a Critical Legal Challenge?'}
          </h2>

          <p className="text-slate-300 text-xs sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'فريقنا من المستشارين المعتمدين جاهز لدراسة قضيتكم وتقديم الحلول القانونية الحاسمة بأعلى درجات السرية والاحترافية.'
              : 'Our accredited legal counselors are ready to evaluate your situation and deliver strategic solutions under strict confidentiality.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#dfb76c] via-[#c5a880] to-[#b38f56] text-slate-950 px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-black hover:shadow-gold-glow active:scale-95 transition-all duration-200 shadow-xl min-h-[48px]"
            >
              <span>{isAr ? 'تواصل معنا الآن عبر واتساب' : 'Contact Us Now via WhatsApp'}</span>
              {isAr ? <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />}
            </Link>

            <a
              href="tel:01505363697"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-gold/40 px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-bold transition-all duration-200 min-h-[48px]"
            >
              <Phone className="w-4 h-4 text-[#dfb76c]" />
              <span dir="ltr">0150 536 3697</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Gavel, 
  Users, 
  Briefcase, 
  Building2, 
  Scale, 
  BookOpen, 
  TrendingUp, 
  Shield, 
  Handshake, 
  DollarSign, 
  Lock, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { Language } from '../types';
import { cn } from '../lib/utils';

const SERVICES = [
  // خدمات الأفراد
  {
    id: 1,
    type: 'individuals',
    icon: <Gavel className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'أفراد', en: 'Individuals' },
    title: { ar: 'القانون الجنائي والجرائم الخاصة', en: 'Criminal Defense & Special Crimes' },
    desc: { ar: 'الترافع والدفاع عن المتهمين في مختلف القضايا الجنائية الكبرى، مع صياغة مذكرات النقض وإشكالات التنفيذ بحرفية عالية.', en: 'Defense for defendants in major criminal cases, drafting appeals, and cassation briefs.' }
  },
  {
    id: 17,
    type: 'individuals',
    icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'أفراد وشركات', en: 'High Stakes' },
    title: { ar: 'الجرائم الاقتصادية وغسل الأموال', en: 'Economic Crimes & Anti-Money Laundering' },
    desc: { ar: 'حلول ودفاع متكامل في القضايا المالية المعقدة، التهرب الجمركي، قضايا الإفلاس، جرائم البنوك، والاحتيال الإلكتروني والاستثماري.', en: 'Integrated defense in financial crimes, banking disputes, customs evasion, and electronic fraud.' }
  },
  {
    id: 2,
    type: 'individuals',
    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'أفراد', en: 'Individuals' },
    title: { ar: 'قانون الأسرة والأحوال الشخصية', en: 'Family Law & Personal Status' },
    desc: { ar: 'معالجة قضايا الأحوال الشخصية، النفقات، الحضانة، الطلاق، والخلع مع الحفاظ الصارم على خصوصية النزاعات العائلية وكرامة الأطراف.', en: 'Handling personal status, alimony, custody, and family disputes with utmost discretion.' }
  },
  {
    id: 8,
    type: 'individuals',
    icon: <BookOpen className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'أفراد', en: 'Individuals' },
    title: { ar: 'قانون الميراث وتصفية التركات', en: 'Inheritance & Estate Settlement' },
    desc: { ar: 'توثيق الوصايا، قسمة التركات الرضائية والقضائية، وحل النزاعات الوراثية المعقدة بما يتوافق مع الشريعة والقانون المصري.', en: 'Wills documentation, judicial estate division, and complex inheritance disputes resolution.' }
  },
  {
    id: 9,
    type: 'individuals',
    icon: <Scale className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'أفراد وشركات', en: 'Civil Law' },
    title: { ar: 'القانون المدني والتعويضات', en: 'Civil Claims & Compensation' },
    desc: { ar: 'دعم قانوني وتمثيل قضائي متكامل في النزاعات المدنية، دعاوى التعويضات المالية، وصياغة وتدقيق العقود المدنية والعقارية.', en: 'Comprehensive representation in civil disputes, financial claims, and contract drafting.' }
  },
  {
    id: 7,
    type: 'individuals',
    icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'أفراد وشركات', en: 'IP Rights' },
    title: { ar: 'حماية الملكية الفكرية والعلامات', en: 'Intellectual Property Protection' },
    desc: { ar: 'تسجيل وحماية حقوق الملكية الفكرية، براءات الاختراع، والعلامات التجارية، ومباشرة دعاوى التعدي والمنافسة غير المشروعة.', en: 'Protection of IP rights, trademarks, patents, and prosecuting infringement claims.' }
  },
  // خدمات الشركات
  {
    id: 4,
    type: 'companies',
    icon: <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'شركات', en: 'Corporate' },
    title: { ar: 'تأسيس الشركات والقانون التجاري', en: 'Company Formation & Commercial Law' },
    desc: { ar: 'تأسيس كافة أشكال الشركات، صياغة العقود التجارية والاتفاقيات، وحل النزاعات بين الشركاء وحماية الأصول الاستثمارية.', en: 'Incorporation of all company forms, commercial agreements, and shareholder dispute resolution.' }
  },
  {
    id: 16,
    type: 'companies',
    icon: <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'حوكمة وامتثال', en: 'Governance' },
    title: { ar: 'الامتثال وحوكمة الشركات الاستثمارية', en: 'Corporate Governance & Compliance' },
    desc: { ar: 'صياغة أطر الحوكمة الرشيدة التي تضمن استدامة الشركات ومطابقة أعمالها للوائح الهيئات التنظيمية وتفادي المخاطر القانونية.', en: 'Governance frameworks ensuring corporate sustainability and full regulatory compliance.' }
  },
  {
    id: 11,
    type: 'companies',
    icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'شركات', en: 'M&A' },
    title: { ar: 'عمليات الاندماج والاستحواذ (M&A)', en: 'Mergers & Acquisitions' },
    desc: { ar: 'الفحص النافي للجهالة، وهيكلة صفقات الاستحواذ والاندماج، وإجراءات الدمج النظامية وإيداع الأوراق لدى الجهات الحكومية.', en: 'Legal due diligence, structuring M&A deals, and regulatory filings.' }
  },
  {
    id: 12,
    type: 'companies',
    icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'شركات وأفراد', en: 'Labor Law' },
    title: { ar: 'قانون العمل والمنازعات العمالية', en: 'Egyptian Labor Law & Employment' },
    desc: { ar: 'صياغة لوائح العمل الداخلية، عقود التوظيف التنفيذية، والدفاع في دعاوى التعويضات والفصل وإجراءات التحقيق الإداري.', en: 'Drafting internal employment bylaws, executive contracts, and labor dispute litigation.' }
  },
  {
    id: 13,
    type: 'companies',
    icon: <Handshake className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'شركات', en: 'Construction' },
    title: { ar: 'عقود المقاولات والتشييد والـ FIDIC', en: 'Construction & FIDIC Contracts' },
    desc: { ar: 'إعداد ومراجعة عقود المقاولات الكبرى والتشييد، والتحكيم وفض منازعات التنفيذ والتسليم بين المطور والمقاول.', en: 'Reviewing major construction and FIDIC contracts, and managing contractor disputes.' }
  },
  {
    id: 14,
    type: 'companies',
    icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'شركات', en: 'Tax Law' },
    title: { ar: 'المنازعات الضريبية والامتثال المالي', en: 'Tax Disputes & Compliance' },
    desc: { ar: 'التمثيل القانوني أمام لجان الطعن الضريبي والمحاكم الاقتصادية لضمان الامتثال الضريبي العادل وتجنب الغرامات الجزافية.', en: 'Representation before tax appeal committees and courts for fair tax assessments.' }
  },
  {
    id: 15,
    type: 'companies',
    icon: <Lock className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'تكنولوجيا', en: 'Tech & Data' },
    title: { ar: 'قانون الاتصالات وحماية البيانات الرقمية', en: 'Tech Law & Data Privacy' },
    desc: { ar: 'الامتثال لقوانين حماية البيانات الشخصية، اتفاقيات تكنولوجيا المعلومات، ومكافحة جرائم تقنية المعلومات والاختراق.', en: 'Personal data protection compliance, IT agreements, and cybercrime defense.' }
  },
  {
    id: 20,
    type: 'companies',
    icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7" />,
    tag: { ar: 'شركات', en: 'Financial Fraud' },
    title: { ar: 'الاحتيال التجاري والجرائم المصرفية', en: 'Commercial Fraud & Banking Litigation' },
    desc: { ar: 'التمثيل والدفاع في قضايا الاحتيال المالي، والشيكات بدون رصيد، والتسهيلات الائتمانية والجرائم المالية للشركات.', en: 'Defense in financial fraud, credit facility disputes, and corporate economic liability.' }
  }
];

export default function Services({ lang }: { lang: Language }) {
  const [activeTab, setActiveTab] = useState<'all' | 'individuals' | 'companies'>('all');
  const isAr = lang === 'ar';

  const filteredServices = activeTab === 'all'
    ? SERVICES
    : SERVICES.filter(service => service.type === activeTab);

  return (
    <div className="pt-28 sm:pt-32 pb-20 sm:pb-24 bg-white dark:bg-[#0b0f17] min-h-screen overflow-x-hidden w-full max-w-full">
      <section className="section-padding py-0 relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div 
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(197,168,128,0.12),transparent_70%)] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-14 relative z-10 px-2 sm:px-0">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dfb76c] mb-2 sm:mb-3 block">
            {isAr ? 'منظومة الاستشارات المتكاملة' : 'Our Practice Areas'}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 font-arabic leading-tight">
            {isAr ? 'الخدمات والاستشارات القانونية المتخصصة' : 'Specialized Legal Advisory & Representation'}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            {isAr 
              ? 'نقدم باقة متكاملة من الخدمات القانونية المتخصصة للأفراد وكبرى الشركات، مدعومة بخبرة تمتد لأكثر من 20 عاماً أمام محاكم النقض والدستورية العليا.' 
              : 'Delivering comprehensive legal services for individuals and corporations, backed by over 20 years of experience before supreme judicial courts.'}
          </p>

          {/* Luxury Executive Segmented Tabs - Mobile Optimized */}
          <div className="inline-flex p-1 sm:p-1.5 bg-slate-100 dark:bg-[#111726] rounded-xl sm:rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm max-w-md w-full justify-center">
            <button
              onClick={() => setActiveTab('all')}
              className={cn(
                "flex-1 py-2 sm:py-3 px-2 sm:px-5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 min-h-[42px] flex items-center justify-center",
                activeTab === 'all' 
                  ? "bg-white dark:bg-gradient-to-r dark:from-[#dfb76c] dark:via-[#c5a880] dark:to-[#b38f56] text-slate-950 shadow-md font-black" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              {isAr ? 'الكل' : 'All Areas'}
            </button>
            <button
              onClick={() => setActiveTab('individuals')}
              className={cn(
                "flex-1 py-2 sm:py-3 px-2 sm:px-5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 min-h-[42px] flex items-center justify-center",
                activeTab === 'individuals' 
                  ? "bg-white dark:bg-gradient-to-r dark:from-[#dfb76c] dark:via-[#c5a880] dark:to-[#b38f56] text-slate-950 shadow-md font-black" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              {isAr ? 'للأفراد' : 'Individuals'}
            </button>
            <button
              onClick={() => setActiveTab('companies')}
              className={cn(
                "flex-1 py-2 sm:py-3 px-2 sm:px-5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 min-h-[42px] flex items-center justify-center",
                activeTab === 'companies' 
                  ? "bg-white dark:bg-gradient-to-r dark:from-[#dfb76c] dark:via-[#c5a880] dark:to-[#b38f56] text-slate-950 shadow-md font-black" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              )}
            >
              {isAr ? 'للشركات' : 'Companies'}
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 relative z-10">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04, duration: 0.3 }}
              className="p-6 sm:p-8 bg-white dark:bg-[#111726]/85 border border-slate-200/80 dark:border-white/10 hover:border-gold/50 dark:hover:border-gold/50 rounded-2xl sm:rounded-3xl shadow-sm dark:shadow-luxury-card hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gold/10 dark:bg-gold/15 text-[#dfb76c] rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-[#dfb76c] group-hover:text-slate-950 transition-all duration-300 shrink-0">
                    {service.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#dfb76c] bg-gold/10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-gold/20">
                    {service.tag[lang]}
                  </span>
                </div>

                <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-accent dark:group-hover:text-[#dfb76c] transition-colors leading-snug">
                  {service.title[lang]}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {service.desc[lang]}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#dfb76c] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all min-h-[36px]"
                >
                  <span>{isAr ? 'طلب استشارة في هذه المادة' : 'Consult on this practice'}</span>
                  {isAr ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="max-w-4xl mx-auto mt-14 sm:mt-20 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-950 via-[#0e1626] to-slate-950 border border-gold/30 text-center text-white relative shadow-2xl overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-3 font-arabic">
              {isAr ? 'هل تحتاج إلى استشارة قانونية مخصصة لقضيتك؟' : 'Need Tailored Counsel for Your Specific Case?'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto mb-6">
              {isAr
                ? 'فريقنا متاح لدراسة وقائع قضيتكم بدقة وتقديم الرأي القانوني الأمثل.'
                : 'Our legal counsel is available to review your case facts and provide authoritative guidance.'}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#dfb76c] via-[#c5a880] to-[#b38f56] text-slate-950 px-7 sm:px-8 py-3.5 rounded-xl font-black hover:shadow-gold-glow active:scale-95 transition-all shadow-lg text-xs sm:text-base w-full sm:w-auto min-h-[48px]"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isAr ? 'احجز استشارة سرية الآن' : 'Schedule Confidential Consultation'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

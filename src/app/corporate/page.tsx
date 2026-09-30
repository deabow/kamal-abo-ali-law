'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import {
  Building2,
  FileText,
  ShieldCheck,
  Scale,
  AlertTriangle,
  Handshake,
  RefreshCcw,
  Award,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Landmark,
  Ban,
  TrendingDown,
  Gavel,
  ArrowLeft,
} from 'lucide-react';

function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    icon: Building2,
    title: 'هندسة وتأسيس الكيانات',
    subtitle: 'Company Formation & Structuring',
    desc: 'نُصمم الهيكل القانوني الأمثل لشركتك منذ اللحظة الأولى — اختيار الشكل القانوني، صياغة عقود التأسيس، وتسجيل الشركة لدى الجهات الرسمية بما يحمي حقوق المؤسسين ويُعظّم المرونة التشغيلية.',
  },
  {
    icon: FileText,
    title: 'إدارة وهندسة العقود التجارية',
    subtitle: 'Contract Management & Engineering',
    desc: 'نصوغ ونُراجع ونُفاوض عقودك التجارية بدقة تمنع الثغرات وتحمي مصالحك — من عقود التوريد والتوزيع إلى اتفاقيات الشراكة والامتياز التجاري.',
  },
  {
    icon: ShieldCheck,
    title: 'حوكمة الشركات',
    subtitle: 'Corporate Governance',
    desc: 'نُرسي قواعد الحوكمة الرشيدة داخل شركتك — لوائح داخلية، سياسات مجلس الإدارة، آليات الرقابة والمساءلة، وحماية حقوق الأقلية من الشركاء.',
  },
  {
    icon: Scale,
    title: 'الامتثال القانوني والرقابي',
    subtitle: 'Legal & Regulatory Compliance',
    desc: 'نضمن امتثال شركتك الكامل للتشريعات المصرية — قوانين العمل، الضرائب، حماية البيانات، ومتطلبات الجهات الرقابية، لتفادي العقوبات والغرامات.',
  },
  {
    icon: AlertTriangle,
    title: 'إدارة المخاطر القانونية',
    subtitle: 'Legal Risk Management',
    desc: 'نكتشف المخاطر القانونية الكامنة في عمليات شركتك قبل أن تتحول إلى أزمات — تقييم شامل، خطط وقائية، وإدارة النزاعات قبل وصولها للقضاء.',
  },
  {
    icon: Handshake,
    title: 'الاندماج والاستحواذ',
    subtitle: 'M&A & Due Diligence',
    desc: 'نُدير عمليات الاندماج والاستحواذ من الفحص النافي للجهالة (Due Diligence) وحتى إتمام الصفقة — حماية كاملة لاستثماراتك في كل مرحلة.',
  },
  {
    icon: RefreshCcw,
    title: 'إعادة الهيكلة ومواجهة التعثر',
    subtitle: 'Restructuring & Banking Disputes',
    desc: 'نُعيد هيكلة الشركات المتعثرة مالياً وقانونياً — تسوية الديون البنكية، إعادة التفاوض مع الدائنين، وحماية الأصول من الحجز والتنفيذ.',
  },
  {
    icon: Award,
    title: 'التراخيص والامتيازات التجارية',
    subtitle: 'Franchising & Intellectual Property',
    desc: 'نُؤمّن حقوق الملكية الفكرية لعلامتك التجارية ونُهيكل عقود الامتياز التجاري (Franchise) بما يحمي توسعك ويمنع الاستغلال غير المشروع.',
  },
];

const bankingRisks = [
  {
    icon: Landmark,
    title: 'هيكلة الأصول والاستثمارات',
    desc: 'تخطيط قانوني دقيق لحماية أموال شركتك وتوجيه الفوائض المالية في مسارات استثمارية آمنة تضمن لك أقصى ربحية.',
  },
  {
    icon: TrendingDown,
    title: 'الفوائد الجزائية المركّبة',
    desc: 'تقديم دفوع قانونية لوقف احتساب الفوائد المركبة غير المشروعة والمطالبة بإعادة الحساب وفقاً للقانون.',
  },
  {
    icon: Ban,
    title: 'منع السفر وتجميد الأصول',
    desc: 'تدخل قانوني عاجل لرفع حظر السفر وفك تجميد الحسابات البنكية والأصول قبل أن تتوقف أعمالك.',
  },
  {
    icon: Gavel,
    title: 'نزاعات مجالس الإدارة والشركاء',
    desc: 'تسوية نزاعات الشركاء ومجالس الإدارة بحلول قانونية حاسمة تحافظ على استمرارية الشركة ومصالح جميع الأطراف.',
  },
];

export default function CorporatePage() {
  return (
    <div className="min-h-screen overflow-x-hidden" dir="rtl">
      {/* SECTION 1 — HERO */}
      <section className="relative bg-primary dark:bg-slate-950 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-5 md:px-8 relative z-10">
          <AnimatedSection className="text-center mb-6">
            <span className="inline-block px-5 py-2 bg-accent/10 border border-accent/20 text-accent rounded-full text-sm font-bold backdrop-blur-sm">
              الحماية والتمثيل القانوني للشركات والمستثمرين
            </span>
          </AnimatedSection>


          <AnimatedSection className="text-center mb-10 md:mb-14" delay={0.2}>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              نحن لا ننتظر وقوع الأزمة لنتحرك — نبني لشركتك درعاً قانونياً استباقياً
              يحمي نموك ويصدّ المخاطر قبل أن تتشكّل. مؤسسة كمال أبو علي:
              شريكك القانوني في كل مرحلة من مراحل عملك.
            </p>
          </AnimatedSection>

          {/* Video Section */}
          <AnimatedSection className="my-8 max-w-4xl mx-auto mb-12 md:mb-16" delay={0.3}>
            <video
              src="/videos/promo-video.mp4"
              autoPlay
              controls
              loop
              playsInline
              className="w-full h-[300px] md:h-[500px] rounded-2xl border border-white/10 shadow-2xl shadow-black/50 object-cover"
            />
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="tel:01505363698"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all text-base md:text-lg shadow-xl shadow-accent/30 hover:-translate-y-1 min-w-[260px]"
              >
                <Phone className="w-5 h-5" />
                <span>فرع الشيخ زايد: 01505363698</span>
              </a>
              <a
                href="tel:01505363697"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base md:text-lg hover:-translate-y-1 min-w-[260px]"
              >
                <Phone className="w-5 h-5" />
                <span>فرع مدينة السادات: 01505363697</span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-12 md:mt-16" delay={0.5}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex flex-col items-center gap-2 text-white/40"
            >
              <span className="text-xs">استكشف خدماتنا</span>
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2 — 8 ELITE CORPORATE SERVICES */}
      <section className="relative py-20 md:py-28 bg-bg-soft dark:bg-slate-900 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="container mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-14 md:mb-20">
            <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-full text-xs font-bold mb-5">
              ٨ ركائز قانونية لحماية أعمالك
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white font-serif mb-5">
              خدمات قانونية <span className="text-accent">متكاملة</span> للشركات
            </h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              نُغطي كل جانب من جوانب الحماية القانونية لشركتك — من التأسيس وحتى التوسع والاستحواذ
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 0.08}>
                  <div className="group relative h-full bg-white dark:bg-white/5 rounded-2xl p-6 md:p-7 border border-gray-100 dark:border-white/10 hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-primary dark:text-white mb-1.5 font-arabic leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-accent font-medium mb-3 tracking-wide">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full group-hover:w-1/2 transition-all duration-500" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — BANKING & DEBT WARNING */}
      <section className="relative py-20 md:py-28 bg-primary dark:bg-slate-950 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-5 md:px-8 relative z-10">
          <AnimatedSection className="text-center mb-14 md:mb-20">
            <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full text-xs font-bold mb-5">
              ⚠ تحذير عاجل لأصحاب الشركات
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-5">
              المخاطر البنكية والديون التجارية{' '}
              <span className="text-accent">لا تنتظر</span>
            </h2>
            <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              كل يوم تأخير في مواجهة الأزمة المالية يُكلّف شركتك أضعاف ما تتصوّر — فوائد مركبة تتصاعد،
              أصول تُجمّد، وحرية تنقّل تُسلب. تحرّك الآن قبل فوات الأوان.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto mb-14">
            {bankingRisks.map((risk, idx) => {
              const Icon = risk.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-white/10 hover:border-accent/30 transition-all duration-500 hover:bg-white/[0.08] h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-bold text-white mb-2 font-arabic">
                          {risk.title}
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed">
                          {risk.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="text-center" delay={0.4}>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10">
              <p className="text-white/80 text-sm md:text-base font-medium">
                لا تدع الأزمة المالية تُدمّر ما بنيته — تواصل مع فريقنا القانوني الآن
              </p>
              <a
                href="tel:01505363698"
                className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all text-sm shadow-lg shadow-accent/20 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4" />
                اتصل الآن
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 — BRANCHES & CONTACT */}
      <section className="relative py-20 md:py-28 bg-bg-soft dark:bg-slate-900 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="container mx-auto px-5 md:px-8">
          <AnimatedSection className="text-center mb-14 md:mb-20">
            <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-full text-xs font-bold mb-5">
              فروعنا ومعلومات التواصل
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white font-serif mb-5">
              نحن <span className="text-accent">بالقرب منك</span> دائماً
            </h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              زُرنا في أقرب فرع أو تواصل معنا مباشرة — فريقنا جاهز لخدمتك
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-10">
            {/* Sheikh Zayed */}
            <AnimatedSection delay={0.1}>
              <div className="relative bg-white dark:bg-white/5 rounded-2xl md:rounded-3xl p-7 md:p-8 border border-gray-100 dark:border-white/10 hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-bold text-accent">الفرع الرئيسي</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-6 font-arabic">
                  فرع الشيخ زايد
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:01505363698"
                    className="flex items-center gap-3 p-3 rounded-xl bg-accent/5 dark:bg-accent/10 hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors group/link"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary dark:text-white">اتصل بنا</p>
                      <p className="text-sm text-gray-600 dark:text-slate-400" dir="ltr">0150 536 3698</p>
                    </div>
                    <ArrowLeft className="w-4 h-4 text-accent mr-auto opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary dark:text-white">العنوان</p>
                      <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                        الحي الثامن - المجاورة 3 - شارع الحكمة - الشيخ زايد - الجيزة
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Sadat City */}
            <AnimatedSection delay={0.2}>
              <div className="relative bg-white dark:bg-white/5 rounded-2xl md:rounded-3xl p-7 md:p-8 border border-gray-100 dark:border-white/10 hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 h-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 dark:bg-white/10 rounded-full mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary dark:bg-white/60" />
                  <span className="text-xs font-bold text-primary dark:text-white/60">فرع السادات</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white mb-6 font-arabic">
                  فرع مدينة السادات
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:01505363697"
                    className="flex items-center gap-3 p-3 rounded-xl bg-accent/5 dark:bg-accent/10 hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors group/link"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary dark:text-white">اتصل بنا</p>
                      <p className="text-sm text-gray-600 dark:text-slate-400" dir="ltr">0150 536 3697</p>
                    </div>
                    <ArrowLeft className="w-4 h-4 text-accent mr-auto opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary dark:text-white">العنوان</p>
                      <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                        المنطقة الحادية عشر - حي ال 7 عمارات - مدينة السادات - المنوفية
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center" delay={0.3}>
            <a
              href="mailto:ceo@aboalilawfirm.com"
              className="inline-flex items-center gap-3 bg-white dark:bg-white/5 rounded-2xl px-7 py-5 border border-gray-100 dark:border-white/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-primary dark:text-white">البريد الإلكتروني الرسمي</p>
                <p className="text-sm text-gray-600 dark:text-slate-400" dir="ltr">ceo@aboalilawfirm.com</p>
              </div>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-accent py-8 md:py-10">
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-right">
              <h3 className="text-xl md:text-2xl font-bold text-white font-arabic mb-1">
                لا تؤجّل حماية شركتك
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                استشارتك الأولى قد تكون الفارق بين النجاح والأزمة
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:01505363698"
                className="flex items-center justify-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-bold hover:bg-white/90 transition-all text-sm shadow-lg hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                الشيخ زايد
              </a>
              <a
                href="tel:01505363697"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-7 py-3.5 rounded-xl font-bold hover:bg-white/20 transition-all text-sm hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                مدينة السادات
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

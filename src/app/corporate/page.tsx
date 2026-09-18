'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Play,
  Phone,
  MessageCircle,
  ShieldAlert,
  FileWarning,
  Scale,
  Building2,
  FileText,
  Landmark,
  AlertTriangle,
  BadgeCheck,
  Handshake,
  BookOpenCheck,
  Gavel,
  ScrollText,
  BriefcaseBusiness,
  MapPin,
  Mail,
  Send,
  ChevronLeft,
  ShieldCheck,
  Banknote,
  CircleDollarSign,
  CreditCard,
  Lock,
  PlaneTakeoff,
  ArrowDownRight,
  Sparkles,
  Users,
  FileCheck2,
  Award,
  ChevronDown,
} from 'lucide-react';
import type { Metadata } from 'next';

/* ──────────────────────────────────────────────
   ANIMATION HOOK — Intersection Observer
   ────────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ──────────────────────────────────────────────
   SECTION WRAPPER — fade/slide animation
   ────────────────────────────────────────────── */
function Section({
  children,
  className = '',
  id,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

/* ──────────────────────────────────────────────
   STAGGERED CARD WRAPPER
   ────────────────────────────────────────────── */
function StaggerCard({
  children,
  index,
  className = '',
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.97]'
      } ${className}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────
   GOLD DIVIDER
   ────────────────────────────────────────────── */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      <span className="h-px w-12 bg-gradient-to-l from-gold/60 to-transparent" />
      <Sparkles className="w-4 h-4 text-gold/50" />
      <span className="h-px w-12 bg-gradient-to-r from-gold/60 to-transparent" />
    </div>
  );
}

/* ══════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ══════════════════════════════════════════════ */
export default function CorporatePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    companyName: '',
    representativeName: '',
    representativeTitle: '',
    phone: '',
    legalScope: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form data
    const msg = encodeURIComponent(
      `🏢 استفسار شركات\nاسم الشركة: ${formData.companyName}\nالممثل: ${formData.representativeName} - ${formData.representativeTitle}\nالهاتف: ${formData.phone}\nالخدمة: ${formData.legalScope}`
    );
    window.open(`https://wa.me/201505363698?text=${msg}`, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  /* ── PAIN POINT CARDS DATA ── */
  const painPoints = [
    {
      icon: <ShieldAlert className="w-7 h-7" />,
      title: 'البداية بالشكل القانوني الخاطئ',
      desc: 'اختيار الكيان الخطأ يهدد مسؤوليتك المالية ويورطك في التزامات ضريبية غير محسوبة.',
      severity: 'عالي الخطورة',
    },
    {
      icon: <FileWarning className="w-7 h-7" />,
      title: 'العقود الناقصة ونزاعات الشركاء',
      desc: 'الثغرات التعاقدية التي توقف نمو المؤسسة فجأة.',
      severity: 'متكرر',
    },
    {
      icon: <AlertTriangle className="w-7 h-7" />,
      title: 'الامتثال والتراخيص المتأخرة',
      desc: 'الغرامات وتجميد النشاط بسبب الفاتورة الإلكترونية أو تأخر التراخيص والامتيازات التجارية.',
      severity: 'عاجل',
    },
  ];

  /* ── PRACTICE AREAS DATA ── */
  const pillars = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'تأسيس الشركات',
      desc: 'اختيار الشكل القانوني الأنسب — أموال / أشخاص / سجل تجاري.',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'العقود والاتفاقيات',
      desc: 'إدارة وصياغة وتدقيق العقود والاتفاقيات التجارية.',
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'الحوكمة والامتثال',
      desc: 'حوكمة الشركات والامتثال القانوني والضريبي — الفاتورة الإلكترونية.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'إدارة المخاطر',
      desc: 'تفادي النزاعات قبل حدوثها وحماية أصول الشركة.',
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'الاندماج والاستحواذ',
      desc: 'صفقات الاندماج والاستحواذ (M&A) بتمثيل قانوني متكامل.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'التراخيص والامتيازات',
      desc: 'التراخيص والامتيازات التجارية (Franchising) والتوسع.',
    },
  ];

  /* ── ARTICLES / INSIGHTS DATA ── */
  const articles = [
    {
      title: 'دليل اختيار الكيان القانوني لشركتك',
      subtitle: 'مساهمة أم ذات مسؤولية محدودة؟',
      preview:
        'قبل أن تبدأ مشروعك، يجب أن تعرف الفرق الجوهري بين الشركة المساهمة وذات المسؤولية المحدودة. الاختيار الخاطئ يعرضك لمخاطر مالية وضريبية لا حصر لها. هذا التحليل يوضح لك أي الأشكال القانونية يناسب حجم استثمارك وطبيعة نشاطك.',
      icon: <BookOpenCheck className="w-6 h-6" />,
    },
    {
      title: 'المخاطر الجنائية للشيكات',
      subtitle: 'في المعاملات المصرفية للشركات',
      preview:
        'كثير من رجال الأعمال لا يدركون أن الشيك المرتجع يمكن أن يتحول من نزاع مالي إلى قضية جنائية. تعرّف على آليات الحماية القانونية وكيفية التعامل مع الشيكات وإيصالات الأمانة لتجنب الحبس.',
      icon: <Gavel className="w-6 h-6" />,
    },
    {
      title: 'كيف تحمي شركتك من إخلال العقود',
      subtitle: 'وتراكم الفوائد؟',
      preview:
        'إخلال العقود وتراكم الفوائد المركبة من أخطر التحديات التي تواجه الشركات الناشئة والقائمة. اكتشف الاستراتيجيات القانونية لحماية ذمتك المالية وضمان استمرارية نشاطك التجاري.',
      icon: <ScrollText className="w-6 h-6" />,
    },
  ];

  /* ── BANKING RISKS DATA ── */
  const bankingRisks = [
    { icon: <CreditCard className="w-6 h-6" />, text: 'سداد الأقساط المتعثرة' },
    {
      icon: <Lock className="w-6 h-6" />,
      text: 'تجنب تحويل شيكات وإيصالات الأمانة إلى قضايا جنائية وحبس',
    },
    { icon: <CircleDollarSign className="w-6 h-6" />, text: 'تفادي الفوائد المركبة' },
    {
      icon: <PlaneTakeoff className="w-6 h-6" />,
      text: 'وقف إجراءات الحجز والمنع من السفر',
    },
  ];

  return (
    <div className="bg-obsidian min-h-screen font-arabic text-slate-100 overflow-x-hidden">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. HERO CINEMA SECTION
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative bg-glow-gold-top pt-28 md:pt-36 pb-12 md:pb-20 px-4 sm:px-6 lg:px-12">
        {/* Ambient particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full bg-gold/[0.04] blur-[100px]" />
          <div className="absolute bottom-10 left-[10%] w-80 h-80 rounded-full bg-gold/[0.03] blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium backdrop-blur-sm">
              <Landmark className="w-4 h-4" />
              القسم القانوني للشركات والمستثمرين
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.6] md:leading-[1.55] max-w-4xl mx-auto mb-10">
            <span className="text-gradient-gold">درعك القانوني الاستباقي</span>
            <span className="text-slate-300 font-medium block mt-2 text-lg sm:text-xl md:text-2xl leading-relaxed">
              لأن معظم الشركات تكتشف أزماتها بعد أن تكبر
            </span>
          </h1>

          {/* Video Container */}
          <div className="relative w-full max-w-5xl mx-auto aspect-video md:max-h-[75vh] rounded-2xl overflow-hidden border border-gold/20 shadow-gold-glow group">
            {/* Poster / Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-card via-obsidian-surface to-obsidian flex items-center justify-center">
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(197,168,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(197,168,128,0.3) 1px, transparent 1px)',
                  backgroundSize: '60px 60px',
                }}
              />

              {/* Play Button */}
              <button
                className="relative z-10 flex flex-col items-center gap-4 cursor-pointer group/play"
                aria-label="شاهد كلمة المستشار كمال أبو علي"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gold/20 animate-beacon" />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-gold-glow transition-transform duration-300 group-hover/play:scale-110">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-obsidian fill-obsidian mr-[-3px]" />
                  </div>
                </div>
                <span className="text-sm md:text-base text-gold/80 font-medium text-center max-w-xs leading-relaxed">
                  شاهد كلمة المستشار كمال أبو علي
                  <br />
                  <span className="text-gold/50 text-xs">لأصحاب الشركات والمستثمرين</span>
                </span>
              </button>
            </div>
          </div>

          {/* CTA Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8">
            <a
              href="tel:+201505363698"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-l from-gold to-gold-dark text-obsidian font-bold text-sm transition-all duration-300 hover:shadow-gold-glow hover:scale-[1.03] cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              فرع الشيخ زايد
              <span className="text-obsidian/70 font-medium mr-1 text-xs" dir="ltr">
                01505363698
              </span>
            </a>
            <a
              href="tel:+201505363697"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-obsidian-card border border-gold/25 text-gold font-bold text-sm transition-all duration-300 hover:border-gold/50 hover:bg-obsidian-elevated cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              فرع السادات
              <span className="text-gold/60 font-medium mr-1 text-xs" dir="ltr">
                01505363697
              </span>
            </a>
            <a
              href="https://wa.me/201505363698?text=%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9%20%D9%84%D9%84%D8%B4%D8%B1%D9%83%D8%A7%D8%AA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600/90 text-white font-bold text-sm transition-all duration-300 hover:bg-emerald-500 hover:scale-[1.03] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              واتساب فوري
            </a>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. CORPORATE WAKE-UP CALL
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Section className="section-padding bg-obsidian-deep" id="threats">
        <div className="max-w-6xl mx-auto">
          <GoldDivider />
          <h2 className="text-center text-2xl md:text-3xl font-bold mt-4 mb-3">
            <span className="text-gradient-gold">تهديدات قانونية</span>{' '}
            <span className="text-slate-200">تواجه شركتك الآن</span>
          </h2>
          <p className="text-center text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            هذه ليست مخاطر نظرية — بل حالات يومية نعالجها في مؤسسة كمال أبو علي للمحاماة
          </p>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {painPoints.map((point, i) => (
              <StaggerCard key={i} index={i}>
                <div className="group relative h-full rounded-2xl bg-obsidian-card border border-obsidian-border p-6 md:p-8 card-luxury-hover cursor-default overflow-hidden">
                  {/* Top glow accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                  {/* Severity badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    {point.severity}
                  </span>

                  <div className="text-gold mb-4 transition-transform duration-300 group-hover:scale-110">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-relaxed">
                    {point.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-[1.8]">{point.desc}</p>

                  {/* Bottom corner decorative */}
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gold/[0.03] rounded-tr-3xl" />
                </div>
              </StaggerCard>
            ))}
          </div>
        </div>
      </Section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3. BANKING DISPUTES MODULE
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Section className="section-padding bg-obsidian" id="banking">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-gold/15 bg-gradient-to-br from-obsidian-card via-obsidian-surface to-obsidian-card">
            {/* Background decorative */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-red-500/[0.04] blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-gold/[0.04] blur-[100px]" />
            </div>

            <div className="relative z-10 p-6 md:p-10 lg:p-14">
              {/* Urgency badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  تحذير عاجل
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Left — Problem */}
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-[1.6]">
                    إدارة المخاطر المصرفية
                    <br />
                    <span className="text-gradient-gold">وحماية الذمة المالية للشركات</span>
                  </h2>
                  <p className="text-slate-400 text-sm md:text-base leading-[1.9] mb-6">
                    التعامل مع البنوك بدون حماية قانونية يعرّض مؤسستك لمخاطر جسيمة. نرى
                    يومياً حالات تحولت فيها قروض عادية إلى قضايا جنائية.
                  </p>

                  <div className="space-y-4">
                    {bankingRisks.map((risk, i) => (
                      <StaggerCard key={i} index={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                          {risk.icon}
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed pt-2">
                          {risk.text}
                        </p>
                      </StaggerCard>
                    ))}
                  </div>
                </div>

                {/* Right — Solution */}
                <div className="flex flex-col justify-center">
                  <div className="rounded-2xl bg-obsidian/60 border border-gold/15 p-6 md:p-8 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                        <BadgeCheck className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="text-lg font-bold text-gold">حلولنا القانونية</h3>
                    </div>

                    <ul className="space-y-4">
                      {[
                        'التفاوض المصرفي الاحترافي مع البنوك',
                        'إعادة جدولة الديون وهيكلة الالتزامات',
                        'التمثيل القضائي الحاسم ضد البنوك',
                        'وقف إجراءات التنفيذ والحجوزات',
                      ].map((sol, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ArrowDownRight className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-slate-200 text-sm leading-relaxed">{sol}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://wa.me/201505363698?text=%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D9%86%D8%B2%D8%A7%D8%B9%20%D9%85%D8%B5%D8%B1%D9%81%D9%8A"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-l from-gold to-gold-dark text-obsidian font-bold text-sm transition-all duration-300 hover:shadow-gold-glow hover:scale-[1.02] cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      استشارة عاجلة — نزاعات مصرفية
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          4. CORPORATE PILLARS — Practice Areas
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Section className="section-padding bg-obsidian-deep" id="services">
        <div className="max-w-6xl mx-auto">
          <GoldDivider />
          <h2 className="text-center text-2xl md:text-3xl font-bold mt-4 mb-3">
            <span className="text-gradient-gold">خدماتنا القانونية</span>{' '}
            <span className="text-slate-200">للشركات</span>
          </h2>
          <p className="text-center text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            ستة أعمدة قانونية أساسية لحماية مؤسستك وتسريع نموها
          </p>

          {/* 6-Pillar Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar, i) => (
              <StaggerCard key={i} index={i}>
                <div className="group relative h-full rounded-2xl bg-obsidian-card border border-obsidian-border p-6 md:p-7 card-luxury-hover cursor-default overflow-hidden">
                  {/* Top line accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/15 flex items-center justify-center text-gold mb-5 transition-all duration-300 group-hover:bg-gold/15 group-hover:border-gold/30 group-hover:shadow-gold-sm">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-relaxed">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-[1.8]">{pillar.desc}</p>
                </div>
              </StaggerCard>
            ))}
          </div>
        </div>
      </Section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          5. EXECUTIVE LEGAL INSIGHTS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Section className="section-padding bg-obsidian" id="insights">
        <div className="max-w-6xl mx-auto">
          <GoldDivider />
          <h2 className="text-center text-2xl md:text-3xl font-bold mt-4 mb-3">
            <span className="text-gradient-gold">مقالات واستشارات سريعة</span>{' '}
            <span className="text-slate-200">للشركات</span>
          </h2>
          <p className="text-center text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            تحليلات قانونية مختصرة من خبرة المستشار كمال أبو علي
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {articles.map((article, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === i
                    ? 'bg-gold/15 border border-gold/30 text-gold shadow-gold-sm'
                    : 'bg-obsidian-card border border-obsidian-border text-slate-400 hover:text-slate-200 hover:border-white/10'
                }`}
              >
                {article.icon}
                <span className="hidden sm:inline">{article.title}</span>
                <span className="sm:hidden">مقال {i + 1}</span>
              </button>
            ))}
          </div>

          {/* Article Card */}
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-2xl bg-obsidian-card border border-obsidian-border p-6 md:p-10 transition-all duration-500"
            >
              {/* White paper header strip */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                  {articles[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-relaxed">
                    {articles[activeTab].title}
                  </h3>
                  <p className="text-gold/70 text-sm mt-1">{articles[activeTab].subtitle}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-gold/20 via-gold/10 to-transparent mb-6" />

              <p className="text-slate-300 text-sm md:text-base leading-[2] mb-8">
                {articles[activeTab].preview}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/201505363698?text=%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D8%AD%D9%84%D9%8A%D9%84%20%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-l from-gold to-gold-dark text-obsidian font-bold text-sm transition-all duration-300 hover:shadow-gold-glow hover:scale-[1.02] cursor-pointer"
                >
                  <BookOpenCheck className="w-5 h-5" />
                  قراءة التحليل القانوني
                </a>
                <a
                  href="tel:+201505363698"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-obsidian border border-gold/20 text-gold font-medium text-sm transition-all duration-300 hover:border-gold/40 cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  استشارة هاتفية
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          6. DUAL HEADQUARTERS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Section className="section-padding bg-obsidian-deep" id="branches">
        <div className="max-w-6xl mx-auto">
          <GoldDivider />
          <h2 className="text-center text-2xl md:text-3xl font-bold mt-4 mb-3">
            <span className="text-gradient-gold">مقراتنا</span>{' '}
            <span className="text-slate-200">وبيانات الاتصال المباشر</span>
          </h2>
          <p className="text-center text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
            تواصل مباشر مع مكاتب مؤسسة كمال أبو علي للمحاماة
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Sheikh Zayed Branch */}
            <StaggerCard index={0}>
              <div className="group relative rounded-2xl bg-obsidian-card border border-obsidian-border p-6 md:p-8 card-luxury-hover overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">فرع الشيخ زايد</h3>
                    <p className="text-gold/60 text-xs">المقر الرئيسي</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold/60 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      الحي الثامن — المجاورة 3 — شارع الحكمة — الشيخ زايد — الجيزة
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold/60 flex-shrink-0" />
                    <span className="text-slate-200 text-sm font-medium" dir="ltr">
                      01505363698
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold/60 flex-shrink-0" />
                    <span className="text-slate-200 text-sm" dir="ltr">
                      ceo@aboalilawfirm.com
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="tel:+201505363698"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-l from-gold to-gold-dark text-obsidian font-bold text-sm transition-all duration-300 hover:shadow-gold-glow hover:scale-[1.02] cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    اتصل الآن
                  </a>
                  <a
                    href="https://wa.me/201505363698"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600/90 text-white font-bold text-sm transition-all duration-300 hover:bg-emerald-500 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    واتساب
                  </a>
                </div>
              </div>
            </StaggerCard>

            {/* Sadat City Branch */}
            <StaggerCard index={1}>
              <div className="group relative rounded-2xl bg-obsidian-card border border-obsidian-border p-6 md:p-8 card-luxury-hover overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/15 flex items-center justify-center">
                    <Landmark className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">فرع مدينة السادات</h3>
                    <p className="text-gold/60 text-xs">المنوفية</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold/60 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm leading-relaxed">
                      المنطقة الحادية عشر — حي ال 7 عمارات — مدينة السادات — المنوفية
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold/60 flex-shrink-0" />
                    <span className="text-slate-200 text-sm font-medium" dir="ltr">
                      01505363697
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold/60 flex-shrink-0" />
                    <span className="text-slate-200 text-sm" dir="ltr">
                      ceo@aboalilawfirm.com
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="tel:+201505363697"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-l from-gold to-gold-dark text-obsidian font-bold text-sm transition-all duration-300 hover:shadow-gold-glow hover:scale-[1.02] cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    اتصل الآن
                  </a>
                  <a
                    href="https://wa.me/201505363697"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600/90 text-white font-bold text-sm transition-all duration-300 hover:bg-emerald-500 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    واتساب
                  </a>
                </div>
              </div>
            </StaggerCard>
          </div>
        </div>
      </Section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          7. CORPORATE INQUIRY FORM
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <Section className="section-padding bg-obsidian" id="inquiry">
        <div className="max-w-3xl mx-auto">
          <GoldDivider />
          <h2 className="text-center text-2xl md:text-3xl font-bold mt-4 mb-3">
            <span className="text-gradient-gold">طلب استشارة</span>{' '}
            <span className="text-slate-200">قانونية للشركات</span>
          </h2>
          <p className="text-center text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            أرسل بياناتك وسيتواصل معك فريقنا القانوني خلال 24 ساعة
          </p>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-obsidian-card border border-obsidian-border p-6 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-slate-300 mb-2">
                  اسم الشركة / المؤسسة
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleFormChange}
                  required
                  placeholder="مثال: شركة النور للاستثمار"
                  className="w-full px-4 py-3 rounded-xl bg-obsidian border border-gold/15 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  placeholder="01xxxxxxxxx"
                  dir="ltr"
                  className="w-full px-4 py-3 rounded-xl bg-obsidian border border-gold/15 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-300 text-right"
                />
              </div>

              {/* Representative Name */}
              <div>
                <label htmlFor="representativeName" className="block text-sm font-medium text-slate-300 mb-2">
                  اسم الممثل القانوني
                </label>
                <input
                  type="text"
                  id="representativeName"
                  name="representativeName"
                  value={formData.representativeName}
                  onChange={handleFormChange}
                  required
                  placeholder="الاسم الكامل"
                  className="w-full px-4 py-3 rounded-xl bg-obsidian border border-gold/15 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                />
              </div>

              {/* Representative Title */}
              <div>
                <label htmlFor="representativeTitle" className="block text-sm font-medium text-slate-300 mb-2">
                  المسمى الوظيفي
                </label>
                <input
                  type="text"
                  id="representativeTitle"
                  name="representativeTitle"
                  value={formData.representativeTitle}
                  onChange={handleFormChange}
                  placeholder="مثال: المدير التنفيذي"
                  className="w-full px-4 py-3 rounded-xl bg-obsidian border border-gold/15 text-slate-100 placeholder:text-slate-600 text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Legal Scope */}
            <div className="mb-8">
              <label htmlFor="legalScope" className="block text-sm font-medium text-slate-300 mb-2">
                نطاق الخدمة القانونية المطلوبة
              </label>
              <select
                id="legalScope"
                name="legalScope"
                value={formData.legalScope}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-obsidian border border-gold/15 text-slate-100 text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-300 cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23c5a880' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'left 1rem center',
                }}
              >
                <option value="" disabled>
                  اختر نوع الخدمة
                </option>
                <option value="retainer">اشتراك استشاري دائم (Retainer)</option>
                <option value="formation">تأسيس شركة جديدة</option>
                <option value="banking">نزاع مصرفي أو إعادة جدولة ديون</option>
                <option value="contracts">عقود واتفاقيات</option>
                <option value="compliance">حوكمة وامتثال قانوني</option>
                <option value="ma">اندماج واستحواذ</option>
                <option value="other">أخرى</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formSubmitted}
              className={`w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                formSubmitted
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gradient-to-l from-gold to-gold-dark text-obsidian hover:shadow-gold-glow hover:scale-[1.01]'
              }`}
            >
              {formSubmitted ? (
                <>
                  <BadgeCheck className="w-5 h-5" />
                  تم الإرسال بنجاح — جارٍ فتح واتساب
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  إرسال طلب الاستشارة
                </>
              )}
            </button>

            <p className="text-center text-slate-500 text-xs mt-4 leading-relaxed">
              بيانتك محمية ولن تُستخدم إلا للتواصل بخصوص طلبك القانوني
            </p>
          </form>
        </div>
      </Section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BOTTOM CTA STRIP
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="border-t border-gold/10 bg-obsidian-deep py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية — حماية قانونية استباقية لأعمالك
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+201505363698"
              className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-gold-light transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              01505363698
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="tel:+201505363697"
              className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-gold-light transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              01505363697
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="mailto:ceo@aboalilawfirm.com"
              className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:text-gold-light transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              ceo@aboalilawfirm.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

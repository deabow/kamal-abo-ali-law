import { motion } from 'motion/react';
import { Target, Lock, Scale, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';
import OrbitGallery from '../components/OrbitGallery';

export default function About({ lang }: { lang: Language }) {
  const isAr = lang === 'ar';

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 bg-white dark:bg-[#0b0f17] min-h-screen overflow-x-hidden w-full max-w-full">
      <section className="section-padding py-0 overflow-hidden w-full max-w-full relative">
        {/* Subtle Ambient Radial Glow */}
        <div 
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(197,168,128,0.12),transparent_70%)] pointer-events-none" 
        />

        <div className="flex flex-col items-center max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dfb76c] mb-3 block">
              {isAr ? 'نبذة عن المؤسسة ومؤسسها' : 'About The Firm & Leadership'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-arabic leading-tight">
              {isAr ? 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية' : 'Kamal Abu Ali Law Firm'}
            </h1>

            {/* Credential Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/10 border border-gold/30 text-xs sm:text-sm text-[#dfb76c] font-bold mb-10 shadow-sm">
              <Scale className="w-4 h-4" />
              <span>{isAr ? 'المستشار كمال أبو علي — محامٍ بالنقض والدستورية العليا' : 'Counselor Kamal Abu Ali — Cassation & Constitutional Court Attorney'}</span>
            </div>

            <div
              className="text-slate-700 dark:text-slate-300 mb-14 text-base sm:text-lg space-y-6 flex flex-col items-center max-w-4xl mx-auto leading-[2.1] text-start sm:text-justify"
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {isAr ? (
                <>
                  <p className="bg-slate-50 dark:bg-[#111726]/60 p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 shadow-sm">
                    تأسست مؤسستنا القانونية المتكاملة على يد <strong>المستشار / كمال أبوعلي</strong>، المحامي المقيد أمام محاكم النقض والإدارية العليا والدستورية العليا، والخبير القانوني المعتمد في حوكمة الشركات والامتثال التشريعي وإدارة العقود والمنازعات الجنائية والمدنية والتجارية.
                  </p>
                  <p>
                    تضم مؤسستنا نخبة رفيعة من المتخصصين والمستشارين في تقديم كافة الخدمات والاستشارات القانونية المتقدمة، مما جعلنا شريكاً استراتيجياً موثوقاً للأفراد ورواد الأعمال وكبرى الشركات والمؤسسات الاستثمارية في جمهورية مصر العربية والمنطقة.
                  </p>
                  <p>
                    ترتكز فلسفتنا المهنية على أسس راسخة من الشفافية المطلقة، الدقة القانونية الحاسمة، والسرية التامة التي تضمن لعملائنا أفضل سبل الحماية القضائية والنتائج الإيجابية السليمة في شتى النزاعات والقضايا المعاصرة.
                  </p>
                </>
              ) : (
                <>
                  <p className="bg-slate-50 dark:bg-[#111726]/60 p-6 rounded-2xl border border-slate-200/80 dark:border-white/5 shadow-sm">
                    Our comprehensive legal institution was founded by <strong>Counselor Kamal Abu Ali</strong>, Attorney before the Court of Cassation and Supreme Constitutional Court, and accredited expert in corporate governance, compliance, and dispute resolution.
                  </p>
                  <p>
                    Our firm brings together an elite assembly of seasoned practitioners delivering sophisticated legal services, establishing us as a trusted strategic partner for individuals, business leaders, and corporations across Egypt.
                  </p>
                  <p>
                    Our institutional vision rests upon unwavering foundations of total transparency, rigorous precision, and strict confidentiality, safeguarding our clients' interests in contemporary legal matters.
                  </p>
                </>
              )}
            </div>

            {/* Three Institutional Pillars */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-6">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-[#111726]/80 border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-luxury-card">
                <div className="w-14 h-14 mb-4 bg-gold/10 text-[#dfb76c] rounded-2xl flex items-center justify-center">
                  <Target className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{isAr ? 'الدقة القانونية' : 'Legal Precision'}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'دراسة متعمقة وتأصيل قضائي وافٍ لكل قضية لضمان بناء دفاع لا تشوبه شائبة.'
                    : 'Meticulous legal research and strategic analysis for every case brief.'}
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-[#111726]/80 border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-luxury-card">
                <div className="w-14 h-14 mb-4 bg-gold/10 text-[#dfb76c] rounded-2xl flex items-center justify-center">
                  <Lock className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{isAr ? 'السرية والأمان' : 'Confidentiality'}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'بروتوكولات سرية صارمة تحمي أسرار ووثائق الموكلين بمنتهى الأمانة والنزاهة.'
                    : 'Strict confidentiality protocols safeguarding all client records.'}
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-[#111726]/80 border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-luxury-card">
                <div className="w-14 h-14 mb-4 bg-gold/10 text-[#dfb76c] rounded-2xl flex items-center justify-center">
                  <Award className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{isAr ? 'النزاهة والريادة' : 'Integrity & Heritage'}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {isAr
                    ? 'التزام مطلق بميثاق الشرف القضائي وتحقيق العدالة كأولوية عليا لا تقبل المساومة.'
                    : 'Uncompromising commitment to judicial ethics and legal advocacy.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Orbit Gallery – Certificates & Accreditations */}
      <div className="mt-16">
        <OrbitGallery />
      </div>
    </div>
  );
}
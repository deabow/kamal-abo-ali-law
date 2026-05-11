import { motion } from 'motion/react';
import { Target, Lock } from 'lucide-react';
import Image from 'next/image';
import { Language } from '../types';
import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';

export default function About({ lang }: { lang: Language }) {
  return (
    <div className="pt-32 pb-20">
      <section className="section-padding overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <Image
              src="/2.png"
              alt="About Us"
              width={1280}
              height={853}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full max-w-full h-auto rounded-3xl shadow-xl"
              style={{ width: '100%', height: 'auto' }}
              placeholder="blur"
              blurDataURL={BLUR_IMAGE_PLACEHOLDER}
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent font-bold uppercase tracking-widest mb-4 block">
              {lang === 'ar' ? 'من نحن' : 'About Us'}
            </span>
            <h2 className="text-4xl font-bold text-primary mb-6">
              {lang === 'ar' ? 'مؤسسة كمال أبو علي للمحاماة' : 'Kamal Abu Ali Law Firm'}
            </h2>

            <div
              className="text-gray-600 mb-8 text-lg space-y-6"
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
              style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
            >
              {lang === 'ar' ? (
                <>
                  <p className="leading-[1.8]">
                    نحن مؤسسة قانونية متكاملة تأسست على يد المستشار / كمال أبوعلي، المحامي بالنقض والدستورية العليا، والخبير المعتمد في حوكمة الشركات والامتثال وإدارة العقود والقضايا الجنائية والعسكرية والمنازعات المدنية والتجارية.
                  </p>
                  <p className="leading-[1.8]">
                    تضم مؤسستنا نخبة من المتخصصين في تقديم كافة الخدمات والاستشارات القانونية، مما يجعلنا شريكاً موثوقاً فيه للأفراد والشركات على حد سواء، حيث نسخر خبراتنا الطويلة لتحقيق مصالح موكلينا بأعلى معايير الجودة.
                  </p>
                </>
              ) : (
                <>
                  <p className="leading-[1.8]">
                    We are a comprehensive legal institution founded by Counselor Kamal Abu Ali, Lawyer before the Court of Cassation and the Supreme Constitutional Court, and a certified expert in Corporate Governance, Compliance, Contract Management, as well as Criminal, Military, Civil, and Commercial disputes.
                  </p>
                  <p className="leading-[1.8]">
                    Our firm brings together an elite group of specialists providing all legal services and consultations, making us a trusted partner for both individuals and corporations alike, leveraging our extensive expertise to achieve our clients' best interests.
                  </p>
                  <p className="leading-[1.8]">
                    Our vision is built on solid foundations of transparency, precision, and confidentiality, ensuring sound results for all clients. We operate through a dedicated team of specialized lawyers and consultants to provide accurate and successful legal solutions.
                  </p>
                </>
              )}
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className={`flex items-start gap-4 ${lang === 'ar' ? 'flex-row' : 'flex-row'}`}>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent shrink-0 border border-gray-100">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{lang === 'ar' ? 'الدقة' : 'Precision'}</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {lang === 'ar'
                      ? 'دراسة وافية وشاملة لكل قضية لضمان نتائج ترقى لتطلعاتكم.'
                      : 'Comprehensive and meticulous analysis of every case to ensure optimal results.'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent shrink-0 border border-gray-100">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{lang === 'ar' ? 'السرية' : 'Confidentiality'}</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {lang === 'ar'
                      ? 'بيئة آمنة تماماً تضمن حماية أسراركم والتعامل معها بمنتهى المهنية.'
                      : 'A fully secure environment ensuring the highest level of confidentiality and professionalism.'}
                  </p>
                </div>
              </div>
            </div>
            <p className="leading-[1.8]">
              لقد تأسست رؤيتنا على أسس صلبة من الشفافية والدقة والسرية التي تضمن لكافة العملاء النتائج السليمة، حيث نعمل بفريق من المحامين والمستشارين المتخصصين لتقديم حلول قانونية دقيقة وناجحة تتناسب مع تعقيدات القضايا المعاصرة.
            </p>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
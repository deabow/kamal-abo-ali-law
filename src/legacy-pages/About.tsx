import { motion } from 'motion/react';
import { Target, Lock } from 'lucide-react';
import { Language } from '../types';
import OrbitGallery from '../components/OrbitGallery';

export default function About({ lang }: { lang: Language }) {
  return (
    <div className="pt-32 pb-20">
      <section className="section-padding overflow-hidden w-full max-w-full">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <span className="text-accent font-bold uppercase tracking-widest mb-4 block">
              {lang === 'ar' ? 'من نحن' : 'About Us'}
            </span>
            <h2 className="text-4xl font-bold text-primary mb-10">
              {lang === 'ar' ? 'مؤسسة كمال أبو علي للمحاماة' : 'Kamal Abu Ali Law Firm'}
            </h2>

            <div
              className="text-gray-600 mb-12 text-lg md:text-xl space-y-6 flex flex-col items-center"
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
            >
              {lang === 'ar' ? (
                <>
                  <p className="leading-[2.2]">
                    نحن مؤسسة قانونية متكاملة تأسست على يد المستشار / كمال أبوعلي، المحامي بالنقض والدستورية العليا، والخبير المعتمد في حوكمة الشركات والامتثال وإدارة العقود والقضايا الجنائية والعسكرية والمنازعات المدنية والتجارية.
                  </p>
                  <p className="leading-[2.2]">
                    تضم مؤسستنا نخبة من المتخصصين في تقديم كافة الخدمات والاستشارات القانونية، مما يجعلنا شريكاً موثوقاً فيه للأفراد والشركات على حد سواء، حيث نسخر خبراتنا الطويلة لتحقيق مصالح موكلينا بأعلى معايير الجودة.
                  </p>
                  <p className="leading-[2.2]">
                    لقد تأسست رؤيتنا على أسس صلبة من الشفافية والدقة والسرية التي تضمن لكافة العملاء النتائج السليمة، حيث نعمل بفريق من المحامين والمستشارين المتخصصين لتقديم حلول قانونية دقيقة وناجحة تتناسب مع تعقيدات القضايا المعاصرة.
                  </p>
                </>
              ) : (
                <>
                  <p className="leading-[2.2]">
                    We are a comprehensive legal institution founded by Counselor Kamal Abu Ali, Lawyer before the Court of Cassation and the Supreme Constitutional Court, and a certified expert in Corporate Governance, Compliance, Contract Management, as well as Criminal, Military, Civil, and Commercial disputes.
                  </p>
                  <p className="leading-[2.2]">
                    Our firm brings together an elite group of specialists providing all legal services and consultations, making us a trusted partner for both individuals and corporations alike, leveraging our extensive expertise to achieve our clients' best interests.
                  </p>
                  <p className="leading-[2.2]">
                    Our vision is built on solid foundations of transparency, precision, and confidentiality, ensuring sound results for all clients. We operate through a dedicated team of specialized lawyers and consultants to provide accurate and successful legal solutions.
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 mb-4 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent border border-gray-100">
                  <Target className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl text-primary mb-2">{lang === 'ar' ? 'الدقة' : 'Precision'}</h4>
                <p className="text-base text-gray-500 leading-relaxed">
                  {lang === 'ar'
                    ? 'دراسة وافية وشاملة لكل قضية لضمان نتائج ترقى لتطلعاتكم.'
                    : 'Comprehensive and meticulous analysis of every case to ensure optimal results.'}
                </p>
              </div>
              <div className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 mb-4 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent border border-gray-100">
                  <Lock className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-xl text-primary mb-2">{lang === 'ar' ? 'السرية' : 'Confidentiality'}</h4>
                <p className="text-base text-gray-500 leading-relaxed">
                  {lang === 'ar'
                    ? 'بيئة آمنة تماماً تضمن حماية أسراركم والتعامل معها بمنتهى المهنية.'
                    : 'A fully secure environment ensuring the highest level of confidentiality and professionalism.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Orbit Gallery – Certificates */}
      <OrbitGallery />
    </div>
  );
}
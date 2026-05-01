import { motion } from 'motion/react';
import { Target, Lock } from 'lucide-react';
import { Language } from '../types';

export default function About({ lang }: { lang: Language }) {
  return (
    <div className="pt-32 pb-20">
      <section className="section-padding overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="order-2 lg:order-1"
          >
            <img 
              src="/2.png" 
              alt="About Us"
              className="w-full max-w-full h-auto rounded-3xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent font-bold uppercase tracking-widest mb-4 block">
              {lang === 'ar' ? 'من نحن' : 'About Us'}
            </span>
            <h2 className="text-4xl font-bold text-primary mb-6">
              {lang === 'ar' ? 'مؤسسة كمال أبو علي للمحاماة' : 'Kamal Abu Ali Law Firm'}
            </h2>
            <div className="text-gray-600 mb-8 leading-relaxed text-lg space-y-4">
              {lang === 'ar' ? (
                <>
                  <p>
                    نحن مؤسسة قانونية متكاملة تأسست على يد المستشار كمال أبو علي، المحامي أمام محكمة النقض والمحكمة الدستورية العليا، وخبير في حوكمة الشركات والامتثال وإدارة العقود، بالإضافة إلى القضايا الجنائية والعسكرية والمنازعات المدنية والتجارية.
                  </p>
                  <p>
                    تضم مؤسستنا نخبة من المتخصصين في تقديم كافة الخدمات والاستشارات القانونية، مما يجعلنا شريكًا موثوقًا لكل من الأفراد والشركات على حد سواء.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    We are a full-service law firm founded by Counselor Kamal Abu Ali, a lawyer admitted before the Court of Cassation and the Supreme Constitutional Court, and an expert in corporate governance, compliance, contract management, as well as criminal, military, and civil and commercial disputes.
                  </p>
                  <p>
                    Our firm brings together an elite team of specialists dedicated to providing comprehensive legal services and consultations, making us a trusted partner for both individuals and businesses.
                  </p>
                </>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
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

            <div className="space-y-4 text-gray-600">
              <p>
                {lang === 'ar'
                  ? 'وقد تأسست مؤسستنا على مبادئ الشفافية والدقة والسرية، بما يضمن تحقيق نتائج سليمة وموثوقة لجميع عملائنا. كما نعمل من خلال فريق من المحامين والمستشارين المتخصصين في مختلف فروع القانون، لتقديم حلول قانونية دقيقة وناجحة.'
                  : 'Our firm is built on the principles of transparency, precision, and confidentiality, ensuring sound and reliable outcomes for all clients. We operate through a team of highly qualified lawyers and legal advisors across various fields of law to deliver precise and effective legal solutions.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

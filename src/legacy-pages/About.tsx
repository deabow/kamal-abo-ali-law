import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';
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
              {lang === 'ar' ? 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية' : 'Kamal Abu Ali Law Firm for Legal Services and Consultations'}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              {lang === 'ar' 
                ? 'نلتزم بتقديم أفضل الخدمات القانونية للأفراد والشركات بكفاءة عالية وسرية تامة. خبرتنا تمتد لأكثر من 15 عاماً في مختلف المجالات القانونية، مما يجعلنا الخيار الأول لمن يبحث عن العدالة والاحترافية.'
                : 'We are committed to providing the best legal services to individuals and companies with high efficiency and complete confidentiality. Our experience spans over 15 years in various legal fields, making us the first choice for those seeking justice and professionalism.'}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent shrink-0 border border-gray-100">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{lang === 'ar' ? 'التميز' : 'Excellence'}</h4>
                  <p className="text-sm text-gray-500">{lang === 'ar' ? 'نسعى دائماً للأفضل' : 'Always striving for the best'}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent shrink-0 border border-gray-100">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{lang === 'ar' ? 'النزاهة' : 'Integrity'}</h4>
                  <p className="text-sm text-gray-500">{lang === 'ar' ? 'الصدق هو أساسنا' : 'Honesty is our foundation'}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>{lang === 'ar' ? 'تأسست المؤسسة على يد الأستاذ كمال أبو علي، المحامي بالنقض والدستورية العليا، لتكون منارة للحق والعدل.' : 'The firm was founded by Mr. Kamal Abu Ali, Lawyer at the Court of Cassation and Supreme Constitutional Court, to be a beacon of truth and justice.'}</p>
              <p>{lang === 'ar' ? 'نحن نؤمن بأن كل قضية هي أمانة، ونسعى جاهدين لتحقيق أفضل النتائج لعملائنا.' : 'We believe that every case is a trust, and we strive to achieve the best results for our clients.'}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

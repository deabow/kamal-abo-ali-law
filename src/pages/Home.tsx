import { Hero } from '../components/Hero';
import { Language } from '../types';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ChevronLeft, ChevronRight, Gavel, Users, Briefcase, Building2, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home({ lang }: { lang: Language }) {
  return (
    <div className="pt-20">
      <Hero lang={lang} />
      
      {/* Quick Stats / Features */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Award className="w-8 h-8 text-accent" />,
              title: { ar: 'خبرة واسعة', en: 'Wide Experience' },
              desc: { ar: 'أكثر من 15 عاماً في المحاماة والاستشارات القانونية.', en: 'Over 15 years in law practice and legal consultations.' }
            },
            {
              icon: <CheckCircle2 className="w-8 h-8 text-accent" />,
              title: { ar: 'نتائج مضمونة', en: 'Guaranteed Results' },
              desc: { ar: 'نسبة نجاح عالية في القضايا المعقدة.', en: 'High success rate in complex legal cases.' }
            },
            {
              icon: <Award className="w-8 h-8 text-accent" />,
              title: { ar: 'سرية تامة', en: 'Full Confidentiality' },
              desc: { ar: 'نحافظ على خصوصية عملائنا وسرية بياناتهم.', en: 'We protect our clients privacy and data confidentiality.' }
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{item.title[lang]}</h3>
              <p className="text-gray-500">{item.desc[lang]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="/2.png" 
              alt="About Us"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold uppercase tracking-widest mb-4 block">
              {lang === 'ar' ? 'من نحن' : 'About Us'}
            </span>
            <h2 className="text-4xl font-bold text-primary mb-6">
              {lang === 'ar' ? 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية' : 'Kamal Abu Ali Law Firm for Legal Services and Consultations'}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {lang === 'ar' 
                ? 'نحن مؤسسة قانونية رائدة تلتزم بتقديم حلول مبتكرة وفعالة لعملائنا. نجمع بين الخبرة العميقة والنزاهة المهنية لتحقيق العدالة.'
                : 'We are a leading legal institution committed to providing innovative and effective solutions to our clients. We combine deep expertise and professional integrity to achieve justice.'}
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
            >
              {lang === 'ar' ? 'اقرأ المزيد عنا' : 'Read More About Us'}
              {lang === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-widest mb-4 block">
              {lang === 'ar' ? 'خدماتنا' : 'Our Services'}
            </span>
            <h2 className="text-4xl font-bold text-primary mb-4">
              {lang === 'ar' ? 'مجالات التخصص القانوني' : 'Legal Specialization Areas'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Gavel />, title: { ar: 'القانون الجنائي', en: 'Criminal Law' } },
              { icon: <Users />, title: { ar: 'قانون الأسرة', en: 'Family Law' } },
              { icon: <Briefcase />, title: { ar: 'قانون العمل', en: 'Labor Law' } },
              { icon: <Building2 />, title: { ar: 'القانون التجاري', en: 'Commercial Law' } },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center group"
              >
                <div className="w-12 h-12 mx-auto bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="font-bold text-primary mb-2">{service.title[lang]}</h3>
                <Link to="/services" className="text-xs text-accent font-bold">{lang === 'ar' ? 'التفاصيل' : 'Details'}</Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
            >
              {lang === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
            </Link>
          </div>
        </div>
      </section>

      {/* Branches Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                {lang === 'ar' ? 'فروعنا في خدمتكم' : 'Our Branches at Your Service'}
              </h2>
              <p className="text-gray-600 mb-8">
                {lang === 'ar' ? 'نتواجد في أهم المناطق لنسهل عليكم الوصول إلينا والحصول على الدعم القانوني.' : 'We are located in key areas to make it easier for you to reach us and get legal support.'}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <MapPin className="text-accent" />
                  <span className="font-bold text-primary">{lang === 'ar' ? 'فرع مدينة السادات - المنوفية' : 'Sadat City Branch - Menoufia'}</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-accent" />
                  <span className="font-bold text-primary">{lang === 'ar' ? 'فرع الشيخ ذايد - الجيزة' : 'Sheikh Zayed Branch - Giza'}</span>
                </div>
              </div>
              <Link 
                to="/branches"
                className="bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all"
              >
                {lang === 'ar' ? 'تفاصيل الفروع' : 'Branch Details'}
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/3.jpg" 
                alt="Branches"
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Teaser */}
      <section className="py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-accent font-bold uppercase tracking-widest mb-4 block">
                {lang === 'ar' ? 'المدونة' : 'Blog'}
              </span>
              <h2 className="text-4xl font-bold text-primary">
                {lang === 'ar' ? 'آخر المقالات القانونية' : 'Latest Legal Articles'}
              </h2>
            </div>
            <Link to="/articles" className="hidden md:block text-accent font-bold hover:underline">
              {lang === 'ar' ? 'عرض الكل' : 'View All'}
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 2, title: { ar: 'كيفية صياغة عقد تجاري يحمي مصالحك', en: 'How to Draft a Commercial Contract' }, image: '/11.png' },
              { id: 1, title: { ar: 'أهم حقوق المتهم أمام النيابة العامة', en: 'Rights of the Accused Before Public Prosecution' }, image: '/10.jpg' },
              { id: 3, title: { ar: 'إجراءات الطلاق في القانون المصري', en: 'Divorce Procedures in Egyptian Law' }, image: '/22.jpg' }
            ].map((article) => (
              <Link 
                key={article.id}
                to={`/articles/${article.id}`}
                className="no-underline"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: article.id * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer h-full"
                >
                  <img src={article.image} alt={article.title[lang]} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
                  <div className="p-6">
                    <h3 className="font-bold text-primary mb-4 line-clamp-2">
                      {article.title[lang]}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{lang === 'ar' ? 'منذ يومين' : '2 days ago'}</span>
                      </div>
                      <span className="text-accent font-bold">{lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            {lang === 'ar' ? 'هل تحتاج إلى استشارة قانونية؟' : 'Do You Need Legal Consultation?'}
          </h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto">
            {lang === 'ar' 
              ? 'فريقنا من الخبراء القانونيين جاهز لمساعدتك في حل جميع قضاياك بكفاءة واحترافية.'
              : 'Our team of legal experts is ready to help you solve all your cases efficiently and professionally.'}
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-accent/90 transition-all shadow-xl shadow-accent/20"
          >
            {lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
            {lang === 'ar' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </Link>
        </div>
      </section>
    </div>
  );
}

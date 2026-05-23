import { Hero } from '../components/Hero';
import { Language } from '../types';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ChevronLeft, ChevronRight, Gavel, Users, Briefcase, Building2, MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';

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
              desc: { ar: 'أكثر من 20 عاماً في المحاماة والاستشارات القانونية.', en: 'Over 20 years in law practice and legal consultations.' }
            },
            {
              icon: <CheckCircle2 className="w-8 h-8 text-accent" />,
              title: { ar: 'الدقة', en: 'Accuracy' },
              desc: { ar: 'دراسة وافية وشاملة لكل قضية لضمان نتائج ترقى لتطلعاتكم.', en: 'Comprehensive and meticulous analysis of every case to ensure results that meet your expectations.' }
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
      <section className="py-20 bg-white overflow-hidden w-full max-w-full">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/home.png"
              alt="About Us"
              width={1280}
              height={853}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full max-w-full h-auto rounded-3xl shadow-2xl"
              style={{ width: '100%', height: 'auto' }}
              placeholder="blur"
              blurDataURL={BLUR_IMAGE_PLACEHOLDER}
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
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 text-start">
              {lang === 'ar' ? 'مؤسسة كمال أبو علي للمحاماة' : 'Kamal Abu Ali Law Firm'}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl text-start">
              {lang === 'ar'
                ? 'نحن مؤسسة قانونية رائدة تلتزم بتقديم حلول مبتكرة وفعالة لعملائنا. نجمع بين الخبرة العميقة والنزاهة المهنية لتحقيق العدالة.'
                : 'We are a leading legal institution committed to providing innovative and effective solutions to our clients. We combine deep expertise and professional integrity to achieve justice.'}
            </p>
            <Link
              href="/about"
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
                <Link href="/services" className="text-xs text-accent font-bold">{lang === 'ar' ? 'التفاصيل' : 'Details'}</Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all"
            >
              {lang === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
            </Link>
          </div>
        </div>
      </section>

      {/* Branches Teaser */}
      <section className="py-20 bg-white overflow-hidden w-full max-w-full">
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
                  <span className="font-bold text-primary">{lang === 'ar' ? 'فرع الشيخ زايد - الجيزة' : 'Sheikh Zayed Branch - Giza'}</span>
                </div>
              </div>
              <Link
                href="/branches"
                className="bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all"
              >
                {lang === 'ar' ? 'تفاصيل الفروع' : 'Branch Details'}
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/sadat-office.jpeg"
                alt="Branches"
                width={1280}
                height={853}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full max-w-full h-auto rounded-3xl shadow-xl"
                style={{ width: '100%', height: 'auto' }}
                placeholder="blur"
                blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            {lang === 'ar' ? 'هل تحتاج إلى استشارة قانونية؟' : 'Do You Need Legal Consultation?'}
          </h2>
          <p className="text-white/90 mb-10 max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'فريقنا من الخبراء القانونيين جاهز لمساعدتك في حل جميع قضاياك بكفاءة واحترافية.'
              : 'Our team of legal experts is ready to help you solve all your cases efficiently and professionally.'}
          </p>
          <Link
            href="/contact"
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

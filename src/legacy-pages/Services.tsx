import { useState } from 'react';
import { motion } from 'motion/react';
import { Gavel, Users, Briefcase, Building2, Scale, FileText, BookOpen, TrendingUp, Shield, Handshake, DollarSign, Lock } from 'lucide-react';
import { Language } from '../types';
import { cn } from '../lib/utils';

const SERVICES = [
  // خدمات الأفراد
  {
    id: 1,
    type: 'individuals',
    icon: <Gavel className="w-8 h-8" />,
    title: { ar: 'القانون الجنائي', en: 'Criminal Law' },
    desc: { ar: 'الدفاع عن المتهمين في القضايا الجنائية المختلفة والحصول على أفضل الحقوق القانونية.', en: 'Defense for defendants in various criminal cases and securing the best legal protection.' }
  },
  {
    id: 2,
    type: 'individuals',
    icon: <Users className="w-8 h-8" />,
    title: { ar: 'قانون الأسرة', en: 'Family Law' },
    desc: { ar: 'قضايا الأحوال الشخصية، النفقة، الحضانة، والطلاق والخلع والنزاعات الأسرية.', en: 'Personal status cases, alimony, custody, divorce, and family disputes.' }
  },
  {
    id: 3,
    type: 'individuals',
    icon: <Briefcase className="w-8 h-8" />,
    title: { ar: 'قانون العمل', en: 'Labor Law' },
    desc: { ar: 'قضايا العمال وأصحاب الأعمال، عقود العمل، والتعويضات عن الفصل التعسفي.', en: 'Labor cases, employment contracts, and compensation for unfair dismissal.' }
  },
  {
    id: 7,
    type: 'individuals',
    icon: <Shield className="w-8 h-8" />,
    title: { ar: 'قانون الملكية الفكرية', en: 'Intellectual Property Law' },
    desc: { ar: 'حماية حقوق الملكية الفكرية والعلامات التجارية والنزاعات المتعلقة بها.', en: 'Protection of intellectual property rights, trademarks, and related disputes.' }
  },
  {
    id: 8,
    type: 'individuals',
    icon: <BookOpen className="w-8 h-8" />,
    title: { ar: 'قانون الميراث والوصايا', en: 'Inheritance & Wills' },
    desc: { ar: 'توثيق الوصايا وقسمة التركات والتعامل مع نزاعات الوراثة والميراث.', en: 'Documentation of wills, estate distribution, and inheritance disputes.' }
  },
  {
    id: 9,
    type: 'individuals',
    icon: <Scale className="w-8 h-8" />,
    title: { ar: 'المطالبات المدنية', en: 'Civil Claims' },
    desc: { ar: 'رفع دعاوى التعويضات والمطالبات المالية والقضايا العقارية الشخصية.', en: 'Filing compensation claims, financial disputes, and personal property cases.' }
  },
  // خدمات الشركات
  {
    id: 4,
    type: 'companies',
    icon: <Building2 className="w-8 h-8" />,
    title: { ar: 'القانون التجاري', en: 'Commercial Law' },
    desc: { ar: 'تأسيس الشركات، صياغة العقود التجارية، والنزاعات بين الشركاء والعلامات التجارية.', en: 'Company formation, drafting commercial contracts, and partnership disputes.' }
  },
  {
    id: 10,
    type: 'companies',
    icon: <Building2 className="w-8 h-8" />,
    title: { ar: 'قانون الشركات', en: 'Corporate Law' },
    desc: { ar: 'تسجيل الشركات والمتطلبات التنظيمية والامتثال للقوانين الحكومية والنظامية.', en: 'Company registration, regulatory requirements, and compliance with government laws.' }
  },
  {
    id: 11,
    type: 'companies',
    icon: <TrendingUp className="w-8 h-8" />,
    title: { ar: 'الاندماج والاستحواذ', en: 'Mergers & Acquisitions' },
    desc: { ar: 'تسهيل عمليات الاندماج والاستحواذ والدمج بين الشركات وإجراءاتها القانونية.', en: 'Facilitating mergers and acquisitions, company consolidations and legal procedures.' }
  },
  {
    id: 12,
    type: 'companies',
    icon: <Briefcase className="w-8 h-8" />,
    title: { ar: 'قانون العمل للشركات', en: 'Corporate Labor Law' },
    desc: { ar: 'الاستشارات القانونية للعاملين والنزاعات الجماعية والسياسات الإدارية.', en: 'Legal advice for employees, collective disputes, and HR policies.' }
  },
  {
    id: 13,
    type: 'companies',
    icon: <Handshake className="w-8 h-8" />,
    title: { ar: 'قانون المقاولات', en: 'Construction Law' },
    desc: { ar: 'عقود المقاولات والنزاعات بين المقاول والعميل والتسليم والمواد.', en: 'Construction contracts, contractor-client disputes, delivery, and material issues.' }
  },
  {
    id: 14,
    type: 'companies',
    icon: <DollarSign className="w-8 h-8" />,
    title: { ar: 'الاستشارات الضريبية', en: 'Tax Consulting' },
    desc: { ar: 'الاستشارات الضريبية والالتزام بالقوانين الضريبية والتخطيط الضريبي للشركات.', en: 'Tax consulting, tax compliance, and corporate tax planning.' }
  },
  {
    id: 15,
    type: 'companies',
    icon: <Lock className="w-8 h-8" />,
    title: { ar: 'قانون البيانات والخصوصية', en: 'Data & Privacy Law' },
    desc: { ar: 'حماية البيانات الشخصية والامتثال لقوانين الخصوصية والأمان السيبراني.', en: 'Personal data protection, privacy law compliance, and cybersecurity.' }
  }
];

export default function Services({ lang }: { lang: Language }) {
  const [activeTab, setActiveTab] = useState<'all' | 'individuals' | 'companies'>('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(service => service.type === activeTab);

  return (
    <div className="pt-32 pb-20">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <span className="text-accent font-bold uppercase tracking-widest mb-4 block">
            {lang === 'ar' ? 'خدماتنا' : 'Our Services'}
          </span>
          <h2 className="text-4xl font-bold text-primary mb-4">
            {lang === 'ar' ? 'خدماتنا القانونية المتخصصة' : 'Our Specialized Legal Services'}
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            {lang === 'ar' ? 'نقدم مجموعة متكاملة من الخدمات القانونية التي تغطي كافة المجالات لضمان حماية حقوقكم.' : 'We offer a comprehensive range of legal services covering all fields to ensure your rights are protected.'}
          </p>

          <div className="inline-flex p-1 bg-gray-100 rounded-xl mb-12">
            <button 
              onClick={() => setActiveTab('all')}
              className={cn(
                "px-8 py-2 rounded-lg text-sm font-bold transition-all",
                activeTab === 'all' ? "bg-accent text-white shadow-md" : "text-gray-500 hover:text-primary"
              )}
            >
              {lang === 'ar' ? 'الكل' : 'All'}
            </button>
            <button 
              onClick={() => setActiveTab('individuals')}
              className={cn(
                "px-8 py-2 rounded-lg text-sm font-bold transition-all",
                activeTab === 'individuals' ? "bg-accent text-white shadow-md" : "text-gray-500 hover:text-primary"
              )}
            >
              {lang === 'ar' ? 'للأفراد' : 'For Individuals'}
            </button>
            <button 
              onClick={() => setActiveTab('companies')}
              className={cn(
                "px-8 py-2 rounded-lg text-sm font-bold transition-all",
                activeTab === 'companies' ? "bg-accent text-white shadow-md" : "text-gray-500 hover:text-primary"
              )}
            >
              {lang === 'ar' ? 'للشركات' : 'For Companies'}
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-16 h-16 bg-bg-soft text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{service.title[lang]}</h3>
              <p className="text-gray-500 leading-relaxed">
                {service.desc[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

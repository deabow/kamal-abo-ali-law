import { useState } from 'react';
import { motion } from 'motion/react';
import { Gavel, Users, Briefcase, Building2, Scale, FileText, BookOpen, TrendingUp, Shield, Handshake, DollarSign, Lock, ShieldCheck } from 'lucide-react';
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
    title: { ar: 'القانون المدني ', en: 'Civil Claims' },
    desc: { ar: '  كافة القضايا المدنية ودعاوى التعويضات والمطالبات المالية والقضايا العقارية والشخصية. ', en: 'Filing compensation claims, financial disputes, and personal property cases.' }
  },
  {
    id: 18,
    type: 'individuals',
    icon: <Scale className="w-8 h-8" />,
    title: { ar: 'القانون المدني', en: 'Civil Law' },
    desc: { ar: 'تقديم الدعم القانوني والتمثيل القضائي في النزاعات المدنية، العقود، التعويضات والالتزامات وحماية الحقوق.', en: 'Providing legal support and judicial representation in civil disputes, contracts, damages, obligations, and protection of rights.' }
  },
  {
    id: 17,
    type: 'individuals',
    icon: <ShieldCheck className="w-8 h-8" />,
    title: { ar: 'الجرائم الاقتصادية و غسل الاموال', en: 'Money Laundering Crimes' },
    desc: { ar: 'نقدم حلولاً متكاملة في القضايا الماليه والمعقدة مثل منازعات الشركات وقضايا الافلاس وجرائم البنوك وغسل الاموال والاحتيال الالكتروني والاستثماري .', en: 'We provide integrated solutions in complex financial cases such as corporate disputes, bankruptcy, banking crimes, money laundering, and electronic/investment fraud.' }
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
    id: 19,
    type: 'companies',
    icon: <Building2 className="w-8 h-8" />,
    title: { ar: 'قانون الشركات', en: 'Corporate Law' },
    desc: { ar: 'الاستشارات القانونية المتخصصة في تأسيس الشركات وحوكمتها وإدارتها وحل نزاعاتها التجارية والتشغيلية.', en: 'Specialized legal consultations in company establishment, governance, management, and resolving commercial and operational disputes.' }
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
    title: { ar: 'قانون العمل المصري', en: 'Egyptian Labor Law' },
    desc: { ar: 'قضايا العمال واصحاب الاعمال وصياغه عقود العمل ودعاوي التعويضات عن حالات الفصل التعسفي والنزاعاتالعماليه', en: 'Labor and employer issues, drafting employment contracts, claims for compensation for unfair dismissal, and labor disputes..' }
  },
  {
    id: 13,
    type: 'companies',
    icon: <Handshake className="w-8 h-8" />,
    title: { ar: 'اعمال المقاولات والتشييد', en: 'Construction Law' },
    desc: { ar: 'عقود المقاولات والنزاعات بين المقاول والعميل والتسليم و عقود التشييد والهدم.', en: 'Construction contracts, disputes between contractor and client, delivery, and construction and demolition contracts.' }
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
    title: { ar: ' مجال الاتصالات وتكنولوجيا المعلومات', en: 'Communications and Information Technology' },
    desc: { ar: 'حماية البيانات الشخصية والامتثال لقوانين الخصوصية والأمن السيبراني.', en: 'Personal data protection, privacy law compliance, and cybersecurity.' }
  },
  {
    id: 16,
    type: 'companies',
    icon: <ShieldCheck className="w-8 h-8" />,
    title: { ar: 'الامتثال وحوكمة الشركات', en: 'Corporate Governance & Compliance' },
    desc: { ar: 'نقدم حلولاً متكاملة لضمان توافق أعمالكم مع القوانين واللوائح، مع صياغة أطر الحوكمة التي تضمن استدامة الشركات وحمايتها من المخاطر القانونية.', en: 'We provide integrated solutions to ensure your business complies with laws and regulations, while drafting governance frameworks that guarantee corporate sustainability and protection from legal risks.' }
  },
  {
    id: 20,
    type: 'companies',
    icon: <DollarSign className="w-8 h-8" />,
    title: { ar: 'قانون الجرائم الاقتصادية', en: 'Economic Crimes Law' },
    desc: { ar: 'التمثيل والدفاع في قضايا الاحتيال المالي، والتهرب الضريبي، والرشوة، ومكافحة غسل الأموال والجرائم التجارية الاقتصادية.', en: 'Representation and defense in financial fraud cases, tax evasion, bribery, anti-money laundering, and commercial/economic crimes.' }
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

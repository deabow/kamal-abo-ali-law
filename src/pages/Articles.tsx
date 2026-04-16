'use client';

import { motion } from 'motion/react';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import { Language } from '../types';
import { cn } from '../lib/utils';
import { useState } from 'react';

const ARTICLES = [
  // جنائي
  {
    id: 1,
    title: { ar: 'أهم حقوق المتهم أمام النيابة العامة', en: 'Rights of the Accused Before Public Prosecution' },
    category: { ar: 'قانون جنائي', en: 'Criminal Law' },
    categoryId: 'criminal',
    date: '2024-03-15',
    image: '/10.jpg'
  },
  {
    id: 4,
    title: { ar: 'الأحكام الجنائية والطعن فيها', en: 'Criminal Judgments and Appeals' },
    category: { ar: 'قانون جنائي', en: 'Criminal Law' },
    categoryId: 'criminal',
    date: '2024-03-20',
    image: '/12.jpg'
  },
  {
    id: 5,
    title: { ar: 'الجرائم الإلكترونية وعقوباتها', en: 'Cybercrime and Penalties' },
    category: { ar: 'قانون جنائي', en: 'Criminal Law' },
    categoryId: 'criminal',
    date: '2024-03-18',
    image: '/13.png'
  },
  // تجاري
  {
    id: 2,
    title: { ar: 'كيفية صياغة عقد تجاري يحمي مصالحك', en: 'How to Draft a Commercial Contract' },
    category: { ar: 'قانون تجاري', en: 'Commercial Law' },
    categoryId: 'commercial',
    date: '2024-03-10',
    image: '/11.png'
  },
  {
    id: 6,
    title: { ar: 'حقوق المستهلك في العقود التجارية', en: 'Consumer Rights in Commercial Contracts' },
    category: { ar: 'قانون تجاري', en: 'Commercial Law' },
    categoryId: 'commercial',
    date: '2024-03-12',
    image: '/15.jpg'
  },
  {
    id: 7,
    title: { ar: 'الضمانات والشروط في البيع والشراء', en: 'Warranties and Terms in Sales' },
    category: { ar: 'قانون تجاري', en: 'Commercial Law' },
    categoryId: 'commercial',
    date: '2024-03-08',
    image: '/14.jpg'
  },
  // أسرة
  {
    id: 3,
    title: { ar: 'إجراءات الطلاق في القانون المصري', en: 'Divorce Procedures in Egyptian Law' },
    category: { ar: 'قانون الأسرة', en: 'Family Law' },
    categoryId: 'family',
    date: '2024-03-05',
    image: '/16.jpg'
  },
  {
    id: 8,
    title: { ar: 'حضانة الأطفال وحقوق الوالدين', en: 'Child Custody and Parental Rights' },
    category: { ar: 'قانون الأسرة', en: 'Family Law' },
    categoryId: 'family',
    date: '2024-03-14',
    image: '/17.jpg'
  },
  {
    id: 9,
    title: { ar: 'الميراث والوصية في الشريعة الإسلامية', en: 'Inheritance and Wills in Islamic Law' },
    category: { ar: 'قانون الأسرة', en: 'Family Law' },
    categoryId: 'family',
    date: '2024-03-11',
    image: '/18.jpg'
  },
  // عمل
  {
    id: 10,
    title: { ar: 'حقوق الموظف وواجباته', en: 'Employee Rights and Duties' },
    category: { ar: 'قانون العمل', en: 'Labor Law' },
    categoryId: 'labor',
    date: '2024-03-09',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 11,
    title: { ar: 'الإنهاء والاستقالة من العمل', en: 'Termination and Resignation' },
    category: { ar: 'قانون العمل', en: 'Labor Law' },
    categoryId: 'labor',
    date: '2024-03-07',
    image: '/19.jpg'
  },
  {
    id: 12,
    title: { ar: 'التأمين الاجتماعي والمعاشات', en: 'Social Insurance and Pensions' },
    category: { ar: 'قانون العمل', en: 'Labor Law' },
    categoryId: 'labor',
    date: '2024-03-06',
    image: '/20.png'
  }
];

export default function Articles({ lang }: { lang: Language }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { ar: 'الكل', en: 'All' } },
    { id: 'criminal', label: { ar: 'جنائي', en: 'Criminal' } },
    { id: 'family', label: { ar: 'أسرة', en: 'Family' } },
    { id: 'commercial', label: { ar: 'تجاري', en: 'Commercial' } },
    { id: 'labor', label: { ar: 'عمل', en: 'Labor' } },
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? ARTICLES 
    : ARTICLES.filter(article => article.categoryId === selectedCategory);

  return (
    <div className="pt-32 pb-20">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {lang === 'ar' ? 'المقالات القانونية' : 'Legal Articles'}
          </h2>
          <p className="text-gray-500 mb-8">
            {lang === 'ar' ? 'نشارككم أحدث المستجدات والنصائح القانونية لتوعيتكم بحقوقكم.' : 'We share the latest legal updates and tips to raise awareness of your rights.'}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  selectedCategory === cat.id ? "bg-accent text-white shadow-md" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                )}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
              <Link
              key={article.id}
                href={`/articles/${article.id}`}
              className="no-underline"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group h-full cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title[lang]} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-[10px] font-bold mb-4">
                    {article.category[lang]}
                  </div>
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors leading-tight mb-4">
                    {article.title[lang]}
                  </h3>
                  <div className="flex items-center justify-between text-[10px] text-gray-400 border-t border-gray-50 pt-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{lang === 'ar' ? '5 دقائق قراءة' : '5 min read'}</span>
                    </div>
                    <span className="font-bold text-primary group-hover:text-accent transition-colors">
                      {lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

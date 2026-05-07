'use client';

import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Language } from '../types';
import { ARTICLES_MAP } from '../data/articles';

export default function ArticleDetail({ lang }: { lang: Language }) {
  const params = useParams();
  const articleIdParam = params?.articleId;
  const articleId = Array.isArray(articleIdParam) ? articleIdParam[0] : articleIdParam;
  const article = articleId ? ARTICLES_MAP[articleId] : null;

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold text-primary">{lang === 'ar' ? 'المقال غير موجود' : 'Article not found'}</h2>
        <Link href="/articles" className="text-accent mt-4 inline-block">{lang === 'ar' ? 'العودة للمقالات' : 'Back to Articles'}</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link href="/articles" className="text-accent font-bold inline-flex items-center gap-2 hover:gap-4 transition-all">
          <ChevronLeft className="w-5 h-5" />
          {lang === 'ar' ? 'العودة للمقالات' : 'Back to Articles'}
        </Link>
      </div>

      <section className="section-padding w-full max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Header Image — loaded from article.image in src/data/articles.ts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl overflow-hidden shadow-xl mb-12 aspect-video"
          >
            <img
              src={article.image}
              alt={article.title[lang]}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
              {article.category[lang]}
            </div>
            <h1 className="text-4xl font-bold text-primary mb-6 leading-tight">
              {article.title[lang]}
            </h1>


          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className={`text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-8 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {article.content[lang]}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-accent/10 rounded-3xl border-2 border-accent/20"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              {lang === 'ar' ? 'هل تحتاج إلى استشارة قانونية؟' : 'Need Legal Advice?'}
            </h3>
            <p className="text-gray-600 mb-6">
              {lang === 'ar' ? 'فريقنا من المحامين المتخصصين جاهزون لمساعدتك. تواصل معنا اليوم.' : 'Our team of specialized lawyers is ready to help you. Contact us today.'}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent text-white px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all"
            >
              {lang === 'ar' ? 'اطلب استشارة' : 'Request Consultation'}
            </Link>
          </motion.div>

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">
              {lang === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}
            </h3>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
            >
              {lang === 'ar' ? 'عرض جميع المقالات' : 'View All Articles'}
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

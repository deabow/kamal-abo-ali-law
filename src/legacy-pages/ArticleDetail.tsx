'use client';

import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar, User, Scale, Sparkles, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';
import { useParams } from 'next/navigation';
import { Language } from '../types';
import { ARTICLES_MAP } from '../data/articles';

export default function ArticleDetail({ lang }: { lang: Language }) {
  const params = useParams();
  const articleIdParam = params?.articleId;
  const articleId = Array.isArray(articleIdParam) ? articleIdParam[0] : articleIdParam;
  const article = articleId ? ARTICLES_MAP[articleId] : null;
  const isAr = lang === 'ar';

  if (!article) {
    return (
      <div className="pt-40 pb-28 text-center bg-white dark:bg-[#0b0f17] min-h-screen">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          {isAr ? 'المقال المطلوب غير موجود' : 'Article not found'}
        </h2>
        <Link 
          href="/articles" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#dfb76c] via-[#c5a880] to-[#b38f56] text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm"
        >
          {isAr ? 'العودة للمقالات القانونية' : 'Back to Articles'}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 bg-white dark:bg-[#0b0f17] min-h-screen overflow-x-hidden w-full max-w-full">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
        <Link 
          href="/articles" 
          className="text-[#dfb76c] font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 sm:gap-2 hover:gap-3 transition-all duration-300 min-h-[36px]"
        >
          {isAr ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          <span>{isAr ? 'العودة لجميع المقالات والتوعية' : 'Back to All Articles'}</span>
        </Link>
      </div>

      <section className="section-padding py-0 w-full max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Header Image with Luxury Bezel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl mb-10 aspect-video w-full border border-slate-200 dark:border-white/10 bg-slate-950"
          >
            <Image
              src={article.image}
              alt={article.title[lang]}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover filter brightness-95"
              placeholder="blur"
              blurDataURL={BLUR_IMAGE_PLACEHOLDER}
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 text-start"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-4 py-1.5 bg-gold/10 text-[#dfb76c] rounded-full text-xs font-bold border border-gold/20">
                {article.category[lang]}
              </span>
              {article.date && (
                <span className="text-xs text-slate-400 font-sans flex items-center gap-1" dir="ltr">
                  <Calendar className="w-3.5 h-3.5 text-[#dfb76c]" />
                  {article.date}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight font-arabic">
              {article.title[lang]}
            </h1>

            {/* Author Credit */}
            <div className="flex items-center gap-3 py-4 border-t border-b border-slate-200/80 dark:border-white/10 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <div className="w-8 h-8 rounded-full bg-gold/15 text-[#dfb76c] flex items-center justify-center">
                <Scale className="w-4 h-4" />
              </div>
              <span className="font-semibold text-slate-900 dark:text-white">
                {article.author[lang]}
              </span>
            </div>
          </motion.div>

          {/* Article Long-form Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            <div className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-[2.3] whitespace-pre-line text-justify font-sans">
              {article.content[lang]}
            </div>
          </motion.div>

          {/* Consultation CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 p-8 sm:p-10 bg-gradient-to-tr from-slate-950 via-[#111726] to-slate-950 rounded-3xl border border-gold/30 text-white text-center shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-[#dfb76c] text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isAr ? 'حماية حقوقك تبدأ هنا' : 'Protect Your Legal Rights'}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-arabic">
                {isAr ? 'هل تحتاج إلى استشارة متخصصة في هذا الشأن؟' : 'Need Specialized Legal Advice on This Matter?'}
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                {isAr 
                  ? 'فريقنا من الخبراء القانونيين جاهز لدراسة قضيتكم وحمايتكم من أي أخطاء إجرائية أو تشابه في الأسماء أو نزاعات مالية.' 
                  : 'Our legal experts are ready to examine your case under strict confidentiality and ensure maximum protection.'}
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#dfb76c] via-[#c5a880] to-[#b38f56] text-slate-950 px-8 py-3.5 rounded-xl font-black hover:shadow-gold-glow hover:-translate-y-0.5 transition-all duration-300 shadow-lg text-sm sm:text-base"
              >
                <span>{isAr ? 'طلب استشارة فورية مع المحامي' : 'Request Consultation with Counselor'}</span>
              </Link>
            </div>
          </motion.div>

          {/* Related Articles Navigation */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#dfb76c] hover:underline"
            >
              {isAr ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              <span>{isAr ? 'تصفح باقي المقالات القانونية' : 'Browse All Legal Articles'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

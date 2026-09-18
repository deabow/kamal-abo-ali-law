'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Language } from '../types';
import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { BookOpen, ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';

export default function Articles({ lang }: { lang: Language }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const isAr = lang === 'ar';

  const filteredArticles = selectedCategory === 'all'
    ? ARTICLES
    : ARTICLES.filter(article => article.categoryId === selectedCategory);

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 bg-white dark:bg-[#0b0f17] min-h-screen overflow-x-hidden w-full max-w-full">
      <section className="section-padding py-0 w-full max-w-full overflow-hidden relative">
        {/* Ambient Top Glow */}
        <div 
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(197,168,128,0.12),transparent_70%)] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-14 relative z-10 px-2">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dfb76c] mb-2 sm:mb-3 block">
            {isAr ? 'المركز المعرفي والتوعية' : 'Legal Knowledge Center'}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 font-arabic leading-tight">
            {isAr ? 'المقالات والتحليلات القانونية' : 'Legal Articles & Judicial Insights'}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10">
            {isAr 
              ? 'نشارككم أحدث التعديلات التشريعية والنصائح القانونية لنشر الوعي بحقوقكم وحماية معاملاتكم.' 
              : 'Sharing the latest legislative amendments, judicial rulings, and authoritative legal analyses.'}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 min-h-[38px] flex items-center justify-center",
                  selectedCategory === cat.id 
                    ? "bg-gradient-to-r from-[#dfb76c] via-[#c5a880] to-[#b38f56] text-slate-950 shadow-md font-black" 
                    : "bg-slate-100 dark:bg-[#111726] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10"
                )}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {filteredArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="no-underline block h-full group"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-white dark:bg-[#111726]/85 rounded-3xl overflow-hidden shadow-sm dark:shadow-luxury-card border border-slate-200/80 dark:border-white/10 hover:border-gold/50 dark:hover:border-gold/50 transition-all duration-300 h-full flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden shrink-0 bg-slate-950">
                    <Image
                      src={article.image}
                      alt={article.title[lang]}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? undefined : 'lazy'}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                      placeholder="blur"
                      blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  </div>

                  <div className="p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3.5 py-1 bg-gold/10 text-[#dfb76c] rounded-full text-xs font-bold border border-gold/20">
                        {article.category[lang]}
                      </span>
                      {article.date && (
                        <span className="text-[11px] text-slate-400 font-sans flex items-center gap-1" dir="ltr">
                          <Calendar className="w-3 h-3 text-[#dfb76c]" />
                          {article.date}
                        </span>
                      )}
                    </div>

                    <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-accent dark:group-hover:text-[#dfb76c] transition-colors leading-snug mb-3">
                      {article.title[lang]}
                    </h2>

                    {article.summary && (
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-6">
                        {article.summary[lang]}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-7 pb-7 pt-0">
                  <div className="flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-4">
                    <span className="text-xs font-bold text-[#dfb76c] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      <span>{isAr ? 'قراءة التحليل بالكامل' : 'Read Full Analysis'}</span>
                      {isAr ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
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

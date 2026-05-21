'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Language } from '../types';
import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { ARTICLES, CATEGORIES } from '../data/articles';

export default function Articles({ lang }: { lang: Language }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredArticles = selectedCategory === 'all'
    ? ARTICLES
    : ARTICLES.filter(article => article.categoryId === selectedCategory);

  return (
    <div className="pt-32 pb-20">
      <section className="section-padding w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {lang === 'ar' ? 'المقالات القانونية' : 'Legal Articles'}
          </h2>
          <p className="text-gray-600 mb-8">
            {lang === 'ar' ? 'نشارككم أحدث المستجدات والنصائح القانونية لتوعيتكم بحقوقكم.' : 'We share the latest legal updates and tips to raise awareness of your rights.'}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map(cat => (
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
          {filteredArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/articles/${article.id}`}
              className="no-underline block h-full"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group h-full cursor-pointer flex flex-col"
              >
                <div className="relative aspect-video w-full overflow-hidden shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title[lang]}
                    fill
                    priority={index === 0}
                    loading={index === 0 ? undefined : 'lazy'}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="self-start inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-4">
                    {article.category[lang]}
                  </div>
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors leading-snug mb-3">
                    {article.title[lang]}
                  </h3>
                  {article.summary && (
                    <p className="text-sm text-gray-800 leading-relaxed line-clamp-2 mb-6">
                      {article.summary[lang]}
                    </p>
                  )}
                  <div className="flex items-center justify-end border-t border-gray-100 pt-5 mt-auto">
                    <span className="text-xs font-bold text-primary group-hover:text-accent transition-colors">
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

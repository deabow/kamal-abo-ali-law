'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale, Globe, X, Menu } from 'lucide-react';
import { cn } from '../lib/utils';
import { Language, NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', path: '/', label: { ar: 'الرئيسية', en: 'Home' } },
  { id: 'about', path: '/about', label: { ar: 'من نحن', en: 'About Us' } },
  { id: 'services', path: '/services', label: { ar: 'الخدمات', en: 'Services' } },
  { id: 'branches', path: '/branches', label: { ar: 'الفروع', en: 'Branches' } },
  { id: 'articles', path: '/articles', label: { ar: 'المقالات', en: 'Articles' } },
  { id: 'contact', path: '/contact', label: { ar: 'تواصل معنا', en: 'Contact Us' } },
];

export const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
            <Scale className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight text-primary">
              {lang === 'ar' ? 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية' : 'Kamal Abu Ali Law Firm for Legal Services and Consultations'}
            </span>
            <span className="text-[10px] text-accent uppercase tracking-widest font-semibold">
              {lang === 'ar' ? 'للمحاماة والاستشارات القانونية' : 'Law & Legal Consultations'}
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.id} 
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                pathname === item.path 
                  ? "text-accent font-bold" 
                  : "text-gray-600"
              )}
            >
              {item.label[lang]}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className="text-sm font-semibold hover:text-accent transition-colors flex items-center gap-1 text-gray-700"
          >
            <Globe className="w-4 h-4" />
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
          <button 
            className="border-2 border-primary text-primary px-6 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all"
          >
            {lang === 'ar' ? 'تسجيل الدخول العملاء ' : 'Login'}
          </button>
          <Link 
            href="/contact"
            className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20"
          >
            {lang === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
          </Link>
        </div>

        <button 
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 lg:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.id} 
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium border-b border-gray-100 pb-2",
                  pathname === item.path 
                    ? "text-accent font-bold" 
                    : "text-gray-900"
                )}
              >
                {item.label[lang]}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
              <button 
                onClick={toggleLang} 
                className="font-bold text-accent transition-colors text-left"
              >
                {lang === 'ar' ? 'English' : 'العربية'}
              </button>
              <button 
                className="border-2 border-primary text-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all w-full"
              >
                {lang === 'ar' ? 'تسجيل الدخول' : 'Login'}
              </button>
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-accent text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-accent/90 transition-all text-center"
              >
                {lang === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, X, Menu, Sun, Moon, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { Language, NavItem } from '../types';
import { useTheme } from 'next-themes';
import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';

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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8",
        scrolled
          ? "bg-[#0b0f17]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] py-2 sm:py-2.5"
          : "bg-[#0b0f17]/80 sm:bg-gradient-to-b sm:from-slate-950/90 sm:via-slate-950/40 sm:to-transparent backdrop-blur-lg sm:backdrop-blur-md border-b border-white/5 sm:border-transparent py-2.5 sm:py-4"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-accent rounded-xl p-1 shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 rounded-xl bg-white/10 border border-white/15 dark:border-gold/30 p-1 group-hover:border-gold transition-all duration-300 group-hover:shadow-gold-sm">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={48}
                height={48}
                priority
                sizes="(max-width: 640px) 40px, 48px"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                placeholder="blur"
                blurDataURL={BLUR_IMAGE_PLACEHOLDER}
              />
            </div>

            <div className="flex flex-col text-start">
              <span className="font-bold text-sm sm:text-base lg:text-lg leading-tight text-white tracking-tight transition-colors group-hover:text-[#dfb76c]">
                {lang === 'ar' ? 'مؤسسة كمال أبو علي' : 'Kamal Abu Ali Law Firm'}
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#dfb76c] uppercase tracking-widest font-semibold">
                {lang === 'ar' ? 'للمحاماة والاستشارات القانونية' : 'Law & Legal Consultations'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 bg-white/[0.04] backdrop-blur-md px-6 py-2 rounded-full border border-white/10" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={cn(
                    "text-sm transition-all duration-200 relative py-1 px-1",
                    isActive
                      ? "text-[#dfb76c] font-bold"
                      : "text-slate-300 hover:text-white font-medium"
                  )}
                >
                  {item.label[lang]}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#dfb76c] to-transparent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions & Utilities */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="text-xs font-semibold hover:text-[#dfb76c] transition-all flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/15 text-slate-300 hover:bg-white/10"
              aria-label="Change language"
            >
              <Globe className="w-3.5 h-3.5 text-[#dfb76c]" />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-white/15 text-slate-300 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Toggle dark/light mode"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-[#dfb76c]" /> : <Moon className="w-4 h-4 text-slate-200" />}
              </button>
            )}

            {/* Client Portal Login */}
            <a
              href="https://aboalilawfirm.mysuits.app"
              target="_blank"
              rel="noreferrer"
              className="border border-gold/40 text-[#dfb76c] px-4 py-2 rounded-full text-xs font-bold hover:bg-gold hover:text-slate-950 transition-all duration-300 shadow-sm"
            >
              {lang === 'ar' ? 'بوابة العملاء' : 'Client Portal'}
            </a>

            {/* Consultation CTA */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#dfb76c] via-[#c5a880] to-[#b38f56] text-slate-950 px-5 py-2 rounded-full text-xs font-extrabold hover:shadow-gold-glow hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-1.5 shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'احجز استشارة' : 'Book Consultation'}</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Fast Call + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Call Button on Mobile */}
            <a
              href="tel:01505363697"
              className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 text-[#dfb76c] flex items-center justify-center active:scale-95 transition-transform"
              aria-label="اتصال سريع"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white flex items-center justify-center active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-5 h-5 text-[#dfb76c]" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Sheet */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 bg-[#0b0f17]/98 backdrop-blur-3xl border-b border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] px-5 py-6 flex flex-col gap-4 lg:hidden max-h-[calc(100dvh-4.5rem)] overflow-y-auto"
            >
              <div className="flex flex-col gap-1.5">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.id}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-base font-semibold py-3 px-4 rounded-xl transition-colors min-h-[48px] flex items-center justify-between",
                        isActive
                          ? "bg-gold/15 text-[#dfb76c] font-black border border-gold/30"
                          : "text-slate-200 hover:bg-white/5 active:bg-white/10"
                      )}
                    >
                      <span>{item.label[lang]}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#dfb76c]" />}
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between bg-white/[0.03] p-2 rounded-xl border border-white/5">
                  <button
                    onClick={toggleLang}
                    className="font-bold text-sm text-[#dfb76c] flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-white/10 transition-colors min-h-[44px]"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
                  </button>

                  {mounted && (
                    <button
                      onClick={toggleTheme}
                      className="flex items-center gap-2 font-bold text-sm text-slate-300 py-2 px-3 rounded-lg hover:bg-white/10 transition-colors min-h-[44px]"
                      aria-label="Toggle theme"
                    >
                      {theme === 'dark' ? <Sun className="w-4 h-4 text-[#dfb76c]" /> : <Moon className="w-4 h-4 text-slate-300" />}
                      <span>{theme === 'dark' ? (lang === 'ar' ? 'النهاري' : 'Light') : (lang === 'ar' ? 'الداكن' : 'Dark')}</span>
                    </button>
                  )}
                </div>

                <a
                  href="https://aboalilawfirm.mysuits.app"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-gold/40 text-[#dfb76c] px-4 py-3 rounded-xl text-sm font-bold hover:bg-gold hover:text-slate-950 transition-all w-full text-center min-h-[48px] flex items-center justify-center shadow-sm"
                >
                  {lang === 'ar' ? 'تسجيل الدخول للعملاء (بوابة القضايا)' : 'Client Portal Login'}
                </a>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-[#dfb76c] via-[#c5a880] to-[#b38f56] text-slate-950 px-4 py-3 rounded-xl text-sm font-black hover:shadow-gold-glow transition-all text-center min-h-[48px] flex items-center justify-center gap-2 shadow-xl"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'احجز استشارة قانونية فورية' : 'Book Immediate Consultation'}</span>
                </Link>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href="tel:01505363697"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-200 active:bg-white/10"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#dfb76c]" />
                    <span>فرع السادات</span>
                  </a>
                  <a
                    href="tel:01505363698"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-200 active:bg-white/10"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#dfb76c]" />
                    <span>فرع زايد</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          aria-hidden="true"
        />
      )}
    </>
  );
};

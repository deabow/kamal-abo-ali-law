/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import About from './pages/About';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import BranchDetail from './pages/BranchDetail';
import Branches from './pages/Branches';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import { Language } from './types';

const ScrollToTop = ({ pathname }: { pathname: string }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [pathname, setPathname] = useState<string>(window.location.pathname);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onLocationChange = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  const renderCurrentPage = () => {
    if (pathname === '/') return <Home lang={lang} />;
    if (pathname === '/about') return <About lang={lang} />;
    if (pathname === '/services') return <Services lang={lang} />;
    if (pathname === '/branches') return <Branches lang={lang} />;
    if (pathname.startsWith('/branches/')) return <BranchDetail lang={lang} />;
    if (pathname === '/articles') return <Articles lang={lang} />;
    if (pathname.startsWith('/articles/')) return <ArticleDetail lang={lang} />;
    if (pathname === '/contact') return <Contact lang={lang} />;
    return <Home lang={lang} />;
  };

  return (
    <>
      <ScrollToTop pathname={pathname} />
      <div className="min-h-screen font-sans selection:bg-accent selection:text-white transition-colors duration-300">
        <Navbar lang={lang} setLang={setLang} />

        <main>{renderCurrentPage()}</main>

        <Footer lang={lang} />
        <WhatsAppButton />
      </div>
    </>
  );
}

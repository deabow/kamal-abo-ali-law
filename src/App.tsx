/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Branches from './pages/Branches';
import BranchDetail from './pages/BranchDetail';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import { Language } from './types';
import { cn } from './lib/utils';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen font-sans selection:bg-accent selection:text-white transition-colors duration-300">
        <Navbar lang={lang} setLang={setLang} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/services" element={<Services lang={lang} />} />
            <Route path="/branches" element={<Branches lang={lang} />} />
            <Route path="/branches/:branchId" element={<BranchDetail lang={lang} />} />
            <Route path="/articles" element={<Articles lang={lang} />} />
            <Route path="/articles/:articleId" element={<ArticleDetail lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
          </Routes>
        </main>

        <Footer lang={lang} />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

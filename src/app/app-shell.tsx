'use client';

import { useState } from 'react';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Language } from '../types';
import { LangProvider } from './lang-context';

export function AppShell({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('ar');

  return (
    <LangProvider value={{ lang, setLang }}>
      <div className="min-h-screen font-sans selection:bg-accent selection:text-white transition-colors duration-300 overflow-x-hidden w-full max-w-full">
        <Navbar lang={lang} setLang={setLang} />
        <main>{children}</main>
        <Footer lang={lang} />
        <WhatsAppButton />
      </div>
    </LangProvider>
  );
}

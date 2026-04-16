'use client';

import { createContext, useContext } from 'react';

import { Language } from '../types';

type LangContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({
  value,
  children
}: {
  value: LangContextValue;
  children: React.ReactNode;
}) {
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within LangProvider.');
  }
  return context;
}

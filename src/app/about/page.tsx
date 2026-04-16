'use client';

import About from '../../legacy-pages/About';
import { useLang } from '../lang-context';

export default function AboutPage() {
  const { lang } = useLang();
  return <About lang={lang} />;
}

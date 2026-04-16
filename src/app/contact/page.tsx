'use client';

import Contact from '../../legacy-pages/Contact';
import { useLang } from '../lang-context';

export default function ContactPage() {
  const { lang } = useLang();
  return <Contact lang={lang} />;
}

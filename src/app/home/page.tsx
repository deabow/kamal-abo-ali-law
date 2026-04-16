'use client';

import Home from '../../legacy-pages/Home';
import { useLang } from '../lang-context';

export default function HomePage() {
  const { lang } = useLang();
  return <Home lang={lang} />;
}

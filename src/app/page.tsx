'use client';

import Home from '../legacy-pages/Home';
import { useLang } from './lang-context';

export default function Page() {
  const { lang } = useLang();
  return <Home lang={lang} />;
}

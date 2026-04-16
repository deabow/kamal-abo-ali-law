'use client';

import Home from '../pages/Home';
import { useLang } from './lang-context';

export default function Page() {
  const { lang } = useLang();
  return <Home lang={lang} />;
}

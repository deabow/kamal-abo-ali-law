'use client';

import Services from '../../legacy-pages/Services';
import { useLang } from '../lang-context';

export default function ServicesPage() {
  const { lang } = useLang();
  return <Services lang={lang} />;
}

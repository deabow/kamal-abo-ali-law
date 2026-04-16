'use client';

import Articles from '../../legacy-pages/Articles';
import { useLang } from '../lang-context';

export default function ArticlesPage() {
  const { lang } = useLang();
  return <Articles lang={lang} />;
}

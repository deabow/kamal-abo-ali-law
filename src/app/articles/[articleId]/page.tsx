'use client';

import ArticleDetail from '../../../legacy-pages/ArticleDetail';
import { useLang } from '../../lang-context';

export default function ArticleDetailPage() {
  const { lang } = useLang();
  return <ArticleDetail lang={lang} />;
}

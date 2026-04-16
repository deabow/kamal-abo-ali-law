'use client';

import BranchDetail from '../../../legacy-pages/BranchDetail';
import { useLang } from '../../lang-context';

export default function BranchDetailPage() {
  const { lang } = useLang();
  return <BranchDetail lang={lang} />;
}

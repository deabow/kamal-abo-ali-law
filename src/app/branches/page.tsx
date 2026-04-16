'use client';

import Branches from '../../legacy-pages/Branches';
import { useLang } from '../lang-context';

export default function BranchesPage() {
  const { lang } = useLang();
  return <Branches lang={lang} />;
}

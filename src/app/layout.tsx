import type { Metadata } from 'next';
import './globals.css';

import { AppShell } from './app-shell';

export const metadata: Metadata = {
  title: 'مؤسسة كمال أبوعلي للمحاماة والاستشارات القانونية',
  description: 'افضل مكتب محاماة في مدينة السادات والشيخ زايد، متخصصون في الاستشارات القانونية، القضايا المدنية، الجنائية، والتجارية.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

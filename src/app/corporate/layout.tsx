import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'القسم القانوني للشركات | مؤسسة كمال أبو علي للمحاماة',
  description:
    'خدمات قانونية متكاملة للشركات والمستثمرين: تأسيس الشركات، العقود، الحوكمة، الاندماج والاستحواذ، النزاعات المصرفية، التراخيص التجارية. فرع الشيخ زايد: 01505363698 | فرع السادات: 01505363697',
  openGraph: {
    title: 'القسم القانوني للشركات | مؤسسة كمال أبو علي للمحاماة',
    description:
      'درعك القانوني الاستباقي — حماية قانونية شاملة للشركات والمستثمرين في مصر.',
    type: 'website',
    locale: 'ar_EG',
  },
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

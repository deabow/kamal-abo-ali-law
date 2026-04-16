export type Language = 'ar' | 'en';

export interface NavItem {
  id: string;
  path: string;
  label: { ar: string; en: string };
}

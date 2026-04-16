import { Scale, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Language } from '../types';

export const Footer = ({ lang }: { lang: Language }) => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white">
              <Scale className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl">{lang === 'ar' ? 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية' : 'Kamal Abu Ali Law Firm for Legal Services and Consultations'}</span>
          </div>
          <p className="text-white/60 leading-relaxed">
            {lang === 'ar' 
              ? 'نحن هنا لحماية حقوقك وتقديم الدعم القانوني اللازم بكل احترافية ونزاهة.'
              : 'We are here to protect your rights and provide the necessary legal support with all professionalism and integrity.'}
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="/" className="hover:text-accent transition-colors">{lang === 'ar' ? 'الرئيسية' : 'Home'}</a></li>
            <li><a href="/about" className="hover:text-accent transition-colors">{lang === 'ar' ? 'من نحن' : 'About Us'}</a></li>
            <li><a href="/services" className="hover:text-accent transition-colors">{lang === 'ar' ? 'الخدمات' : 'Services'}</a></li>
            <li><a href="/branches" className="hover:text-accent transition-colors">{lang === 'ar' ? 'الفروع' : 'Branches'}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">{lang === 'ar' ? 'خدماتنا' : 'Our Services'}</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="/services" className="hover:text-accent transition-colors">{lang === 'ar' ? 'القانون الجنائي' : 'Criminal Law'}</a></li>
            <li><a href="/services" className="hover:text-accent transition-colors">{lang === 'ar' ? 'قانون الأسرة' : 'Family Law'}</a></li>
            <li><a href="/services" className="hover:text-accent transition-colors">{lang === 'ar' ? 'قانون العمل' : 'Labor Law'}</a></li>
            <li><a href="/services" className="hover:text-accent transition-colors">{lang === 'ar' ? 'القانون التجاري' : 'Commercial Law'}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">{lang === 'ar' ? 'النشرة البريدية' : 'Newsletter'}</h4>
          <p className="text-white/60 mb-4 text-sm">
            {lang === 'ar' ? 'اشترك لتصلك أحدث المقالات القانونية.' : 'Subscribe to receive the latest legal articles.'}
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder={lang === 'ar' ? 'بريدك الإلكتروني' : 'Your Email'}
              className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-accent flex-1"
            />
            <button className="bg-accent px-4 py-2 rounded-lg font-bold text-sm">
              {lang === 'ar' ? 'اشتراك' : 'Join'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
        <p>© 2026 {lang === 'ar' ? 'مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.' : 'Kamal Abu Ali Law Firm for Legal Services and Consultations. All Rights Reserved.'}</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
          <a href="#" className="hover:text-white transition-colors">{lang === 'ar' ? 'شروط الاستخدام' : 'Terms of Use'}</a>
        </div>
      </div>
    </footer>
  );
};

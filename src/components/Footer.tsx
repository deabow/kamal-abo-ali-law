import {
  Facebook,
  Instagram,
  Linkedin,
  Phone
} from "lucide-react";

import { Language } from "../types";

export const Footer = ({ lang }: { lang: Language }) => {
  const isAr = lang === "ar";

  return (
    <footer className="bg-primary text-white/70 pt-20 pb-10 relative overflow-hidden border-t border-white/5">

      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">

          {/* BRAND */}
          <div className="space-y-6">

            <div className="flex items-center gap-3 group">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-14 h-14 object-contain"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black text-white">
                  {isAr ? "مؤسسة كمال" : "Kamal Abu Ali"}
                </span>
                <span className="text-sm text-accent uppercase mt-1">
                  {isAr ? "أبو علي للمحاماة" : "Law Firm"}
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-sm">
              {isAr
                ? "نحن وجهتك الموثوقة للحماية القانونية والدفاع عن حقوقك بخبرة واحترافية عالية."
                : "Your trusted destination for legal protection and advocacy with professional excellence."}
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent/20 transition cursor-pointer text-white hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">
              {isAr ? "روابط سريعة" : "Quick Links"}
            </h4>

            <ul className="space-y-4 text-sm">
              {[
                isAr ? "من نحن" : "About Us",
                isAr ? "تخصصاتنا القانونية" : "Legal Specialties",
                isAr ? "فروعنا" : "Branches",
                isAr ? "تواصل معنا" : "Contact"
              ].map((item, i) => (
                <li key={i} className="hover:text-white transition cursor-pointer">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">
              {isAr ? "خدماتنا" : "Services"}
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                {isAr ? "القانون الجنائي" : "Criminal Law"}
              </li>
              <li className="hover:text-white transition cursor-pointer">
                {isAr ? "قانون الأسرة" : "Family Law"}
              </li>
              <li className="hover:text-white transition cursor-pointer">
                {isAr ? "قانون العمل" : "Labor Law"}
              </li>
              <li className="hover:text-white transition cursor-pointer">
                {isAr ? "القانون التجاري" : "Commercial Law"}
              </li>
            </ul>
          </div>

          {/* CONTACT CARD */}
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm max-w-sm">

            <h4 className="text-white font-bold text-lg mb-6 text-center">
              {isAr ? "تواصل معنا" : "Contact Us"}
            </h4>

            <div className="space-y-5">

              {/* فرع السادات */}
              <div className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/5">

                <div className="text-right">
                  <p className="text-white font-semibold text-sm">
                    {isAr ? "فرع السادات" : "Sadat Branch"}
                  </p>
                  <p className="text-white/60 text-xs mt-1" dir="ltr">
                    0111 910 2542
                  </p>
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10">
                  <Phone size={18} className="text-accent" />
                </div>

              </div>

              {/* فرع زايد */}
              <div className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/5">

                <div className="text-right">
                  <p className="text-white font-semibold text-sm">
                    {isAr ? "فرع زايد" : "Zayed Branch"}
                  </p>
                  <p className="text-white/60 text-xs mt-1" dir="ltr">
                    0100 123 4567
                  </p>
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10">
                  <Phone size={18} className="text-accent" />
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* SIMPLE BOTTOM BAR */}
        <div className="border-t border-white/10 mt-10 pt-5">

          <div className="flex items-center justify-center gap-3 text-sm">

            <span className="text-white font-semibold">
              {isAr
                ? "مؤسسة كمال أبو علي للمحاماة"
                : "Kamal Abu Ali Law Firm"}
            </span>

            <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>

            <span className="text-white/60">
              © {new Date().getFullYear()}{" "}
              {isAr ? "جميع الحقوق محفوظة" : "All rights reserved"}
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};
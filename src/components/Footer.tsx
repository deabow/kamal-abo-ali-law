import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Building2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BLUR_IMAGE_PLACEHOLDER } from "../lib/blur-placeholder";
import { Language } from "../types";

export const Footer = ({ lang }: { lang: Language }) => {
  const isAr = lang === "ar";

  return (
    <footer className="bg-primary dark:bg-slate-950 text-white/70 pt-20 pb-10 relative overflow-hidden border-t border-white/5 w-full max-w-full">

      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">

          {/* BRAND */}
          <div className="space-y-6">

            <div className="flex items-center gap-3 group">
              <div className="relative p-2 rounded-xl bg-white/5 border border-white/10 w-[72px] h-[72px] flex items-center justify-center shrink-0">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={56}
                  height={56}
                  sizes="56px"
                  className="object-contain"
                  placeholder="blur"
                  blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black text-white dark:text-slate-100">
                  {isAr ? "مؤسسة كمال أبو علي" : "Kamal Abu Ali"}
                </span>
                <span className="text-sm text-accent uppercase mt-1">
                  {isAr ? "للمحاماة والاستشارات القانونية" : "Law Firm"}
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed max-w-sm text-slate-300 dark:text-slate-400">
              {isAr
                ? "نحن وجهتك الموثوقة للحماية القانونية والدفاع عن حقوقك بخبرة واحترافية عالية."
                : "Your trusted destination for legal protection and advocacy with professional excellence."}
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/kamal.aboali.law.firm" },
                { Icon: Instagram, href: "https://www.instagram.com/kamal.aboali.law.firm/" },
                { Icon: Linkedin, href: "#" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent/20 transition cursor-pointer text-white hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white dark:text-slate-100 font-bold mb-6 text-lg">
              {isAr ? "روابط سريعة" : "Quick Links"}
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="hover:text-white transition">
                <Link href="/about" className="text-slate-300 dark:text-slate-400 hover:text-accent">
                  {isAr ? "من نحن" : "About Us"}
                </Link>
              </li>
              <li className="hover:text-white transition">
                <Link href="/corporate" className="text-slate-300 dark:text-slate-400 hover:text-accent flex items-center gap-1.5">
                  <span>{isAr ? "خدمات الشركات والمستثمرين" : "Corporate & Investors"}</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-accent/20 text-accent">VIP</span>
                </Link>
              </li>
              <li className="hover:text-white transition">
                <Link href="/services" className="text-slate-300 dark:text-slate-400 hover:text-accent">
                  {isAr ? "تخصصاتنا القانونية" : "Legal Specialties"}
                </Link>
              </li>
              <li className="hover:text-white transition">
                <Link href="/branches" className="text-slate-300 dark:text-slate-400 hover:text-accent">
                  {isAr ? "فروعنا" : "Branches"}
                </Link>
              </li>
              <li className="hover:text-white transition">
                <Link href="/contact" className="text-slate-300 dark:text-slate-400 hover:text-accent">
                  {isAr ? "تواصل معنا" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white dark:text-slate-100 font-bold mb-6 text-lg">
              {isAr ? "خدماتنا" : "Services"}
            </h4>

            <ul className="space-y-4 text-sm">
              {[
                { ar: "خدمات الشركات والمستثمرين", en: "Corporate & Investor Services", href: "/corporate", isVip: true },
                { ar: "القانون التجاري وتأسيس الشركات", en: "Commercial & Corporate Law", href: "/corporate", isVip: false },
                { ar: "القانون الجنائي", en: "Criminal Law", href: "/services", isVip: false },
                { ar: "قانون الأسرة", en: "Family Law", href: "/services", isVip: false },
                { ar: "قانون العمل", en: "Labor Law", href: "/services", isVip: false },
                { ar: "القانون المدني", en: "Civil Law", href: "/services", isVip: false },
                { ar: "قانون الجرائم الاقتصادية", en: "Economic Crimes Law", href: "/services", isVip: false }
              ].map((item, idx) => (
                <li key={idx} className="hover:text-white transition text-slate-300 dark:text-slate-400">
                  <Link href={item.href} className="hover:text-accent cursor-pointer flex items-center justify-between">
                    <span>{isAr ? item.ar : item.en}</span>
                    {item.isVip && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent/20 text-accent font-bold">VIP</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT CARD */}
          <div className="bg-white/5 dark:bg-slate-900/50 p-6 rounded-3xl border border-white/10 backdrop-blur-sm max-w-sm">

            <h4 className="text-white dark:text-slate-100 font-bold text-lg mb-6 text-center">
              {isAr ? "تواصل معنا" : "Contact Us"}
            </h4>

            <div className="space-y-4" dir="rtl">

              {/* Business Desk / Corporate Inquiries */}
              <Link
                href="/corporate"
                className="flex items-center gap-3 bg-accent/15 hover:bg-accent/25 rounded-xl p-3.5 border border-accent/30 transition text-accent group cursor-pointer"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-accent text-white shadow-sm">
                  <Building2 size={18} />
                </div>
                <div className="text-right flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-bold text-xs truncate">
                      {isAr ? "قطاع الشركات والمؤسسات" : "Corporate & Business Desk"}
                    </p>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent text-white font-bold">VIP</span>
                  </div>
                  <p className="text-accent text-[11px] font-medium mt-0.5 group-hover:underline">
                    {isAr ? "منظومة الحماية والاستشارات ←" : "Explore Corporate Protection →"}
                  </p>
                </div>
              </Link>

              {/* فرع السادات */}
              <a href="tel:01505363697" className="flex items-start gap-3 bg-white/5 rounded-xl p-3.5 border border-white/5 cursor-pointer hover:bg-white/10 transition">

                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-accent/10 mt-0.5">
                  <Phone size={18} className="text-accent" />
                </div>

                <div className="text-right flex-1">
                  <p className="text-white font-semibold text-sm">
                    {isAr ? "فرع مدينة السادات" : "Sadat City Branch"}
                  </p>
                  <p className="text-white/60 text-xs mt-1" dir="ltr">
                    0150 536 3697
                  </p>
                </div>

              </a>

              {/* فرع زايد */}
              <a href="tel:01505363698" className="flex items-start gap-3 bg-white/5 rounded-xl p-3.5 border border-white/5 cursor-pointer hover:bg-white/10 transition">

                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-accent/10 mt-0.5">
                  <Phone size={18} className="text-accent" />
                </div>

                <div className="text-right flex-1">
                  <p className="text-white font-semibold text-sm">
                    {isAr ? "فرع الشيخ زايد" : "Sheikh Zayed Branch"}
                  </p>
                  <p className="text-white/60 text-xs mt-1" dir="ltr">
                    0150 536 3698
                  </p>
                </div>

              </a>

            </div>

          </div>

        </div>

        {/* SIMPLE BOTTOM BAR */}
        <div className="border-t border-white/10 mt-10 pt-5">

          <div className="flex items-center justify-center gap-3 text-sm">

            <span className="text-white dark:text-slate-100 font-semibold">
              {isAr
                ? "مؤسسة كمال أبو علي للمحاماة"
                : "Kamal Abu Ali Law Firm"}
            </span>

            <span className="w-1.5 h-1.5 bg-white/40 dark:bg-slate-500 rounded-full"></span>

            <span className="text-white/60 dark:text-slate-400">
              © {new Date().getFullYear()}{" "}
              {isAr ? "جميع الحقوق محفوظة" : "All rights reserved"}
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};
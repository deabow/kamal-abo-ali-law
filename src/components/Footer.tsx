import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  ShieldCheck,
  Scale
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BLUR_IMAGE_PLACEHOLDER } from "../lib/blur-placeholder";
import { Language } from "../types";

export const Footer = ({ lang }: { lang: Language }) => {
  const isAr = lang === "ar";

  return (
    <footer className="bg-[#070a10] text-slate-400 pt-20 pb-12 relative overflow-hidden border-t border-white/10 w-full max-w-full">
      {/* Ambient Top Glow */}
      <div 
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[radial-gradient(ellipse_at_top,rgba(197,168,128,0.12),transparent_70%)] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* BRAND COLUMN */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative p-2 rounded-2xl bg-white/[0.04] border border-white/10 dark:border-gold/20 w-[68px] h-[68px] flex items-center justify-center shrink-0 group-hover:border-gold/50 transition-colors shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={52}
                  height={52}
                  sizes="52px"
                  className="object-contain"
                  placeholder="blur"
                  blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                />
              </div>

              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white tracking-tight">
                  {isAr ? "مؤسسة كمال أبو علي" : "Kamal Abu Ali"}
                </span>
                <span className="text-xs text-[#dfb76c] font-semibold tracking-wider mt-0.5">
                  {isAr ? "للمحاماة والاستشارات القانونية" : "Law & Legal Consultations"}
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-300">
              {isAr
                ? "وجهتكم الموثوقة للحماية القانونية المتكاملة والدفاع عن الحقوق أمام كافة المحاكم المصرية، بخبرة دستورية وتجارية عريقة."
                : "Your trusted destination for comprehensive legal defense and strategic advocacy across all Egyptian courts."}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#dfb76c] font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>{isAr ? "محامٍ بالنقض والدستورية العليا" : "Cassation & Constitutional Lawyer"}</span>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-2.5 pt-2">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/kamal.aboali.law.firm", label: "Facebook" },
                { Icon: Instagram, href: "https://www.instagram.com/kamal.aboali.law.firm/", label: "Instagram" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold/40 hover:text-gold-light text-slate-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-4 bg-gradient-to-b from-[#dfb76c] to-[#c5a880] rounded-full inline-block" />
              <span>{isAr ? "روابط سريعة" : "Quick Links"}</span>
            </h4>

            <ul className="space-y-3.5 text-sm">
              {[
                { href: "/about", labelAr: "من نحن وتاريخ المؤسسة", labelEn: "About Us" },
                { href: "/services", labelAr: "التخصصات والاستشارات", labelEn: "Legal Specialties" },
                { href: "/branches", labelAr: "فروعنا ومواقعنا", labelEn: "Our Branches" },
                { href: "/articles", labelAr: "المقالات والتوعية القانونية", labelEn: "Legal Articles" },
                { href: "/contact", labelAr: "احجز استشارة سرية", labelEn: "Book Consultation" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-[#dfb76c] transition-colors duration-200 inline-block py-1 hover:translate-x-1"
                  >
                    {isAr ? item.labelAr : item.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6 text-base tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-4 bg-gradient-to-b from-[#dfb76c] to-[#c5a880] rounded-full inline-block" />
              <span>{isAr ? "المجالات القانونية" : "Practice Areas"}</span>
            </h4>

            <ul className="space-y-3.5 text-sm">
              {[
                { ar: "القضايا الجنائية والجرائم المالية", en: "Criminal & Financial Crimes", href: "/services" },
                { ar: "حوكمة الشركات والامتثال", en: "Corporate Governance & Compliance", href: "/services" },
                { ar: "قضايا الأسرة والأحوال الشخصية", en: "Family & Personal Status", href: "/services" },
                { ar: "المنازعات المدنية والتعويضات", en: "Civil Claims & Compensation", href: "/services" },
                { ar: "عقود المقاولات والتشييد", en: "Construction & Real Estate", href: "/services" },
                { ar: "قضايا العمل والموظفين", en: "Labor & Employment", href: "/services" }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 hover:text-[#dfb76c] transition-colors duration-200 inline-block py-0.5"
                  >
                    {isAr ? item.ar : item.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & BRANCH CARDS */}
          <div className="bg-white/[0.03] p-6 rounded-3xl border border-white/10 backdrop-blur-md">
            <h4 className="text-white font-bold text-base mb-5 flex items-center justify-between">
              <span>{isAr ? "الاتصال المباشر" : "Direct Contact"}</span>
              <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                {isAr ? "دعم مستمر" : "Active"}
              </span>
            </h4>

            <div className="space-y-3.5" dir="rtl">
              {/* فرع السادات */}
              <a 
                href="tel:01505363697" 
                className="flex items-center gap-3 bg-white/[0.04] hover:bg-gold/15 rounded-2xl p-3.5 border border-white/5 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gold/15 text-[#dfb76c] group-hover:bg-[#dfb76c] group-hover:text-slate-950 transition-all">
                  <Phone size={18} />
                </div>
                <div className="text-right flex-1">
                  <p className="text-white font-semibold text-xs">
                    {isAr ? "فرع مدينة السادات (المنوفية)" : "Sadat City Branch"}
                  </p>
                  <p className="text-[#dfb76c] font-bold text-xs mt-1 font-sans tracking-wider" dir="ltr">
                    0150 536 3697
                  </p>
                </div>
              </a>

              {/* فرع زايد */}
              <a 
                href="tel:01505363698" 
                className="flex items-center gap-3 bg-white/[0.04] hover:bg-gold/15 rounded-2xl p-3.5 border border-white/5 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gold/15 text-[#dfb76c] group-hover:bg-[#dfb76c] group-hover:text-slate-950 transition-all">
                  <Phone size={18} />
                </div>
                <div className="text-right flex-1">
                  <p className="text-white font-semibold text-xs">
                    {isAr ? "فرع الشيخ زايد (الجيزة)" : "Sheikh Zayed Branch"}
                  </p>
                  <p className="text-[#dfb76c] font-bold text-xs mt-1 font-sans tracking-wider" dir="ltr">
                    0150 536 3698
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & COMPLIANCE BAR */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#dfb76c]" />
            <span>
              {isAr
                ? "مؤسسة كمال أبو علي للمحاماة والاستشارات القانونية — معتمدة ومسجلة رسمياً"
                : "Kamal Abu Ali Law Firm — Officially Registered & Certified"}
            </span>
          </div>

          <div>
            © {new Date().getFullYear()}{" "}
            {isAr ? "جميع الحقوق محفوظة ومحمية قانونياً" : "All Rights Reserved"}
          </div>
        </div>
      </div>
    </footer>
  );
};
import { FormEvent, useState } from 'react';
import { MapPin, Phone, Facebook, Instagram, Linkedin, Sparkles, Send, ShieldCheck, Clock } from 'lucide-react';
import { Language } from '../types';

export default function Contact({ lang }: { lang: Language }) {
  const isAr = lang === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'OTHER',
    serviceType: '',
    problem: '',
    branch: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    try {
      const trimmedPhone = formData.phone.trim();
      const trimmedProblem = formData.problem.trim();

      if (trimmedPhone.length < 7 || trimmedPhone.length > 20) {
        throw new Error(lang === 'ar' ? 'رقم الهاتف يجب أن يكون بين 7 و20 رقماً.' : 'Phone number must be between 7 and 20 digits.');
      }

      if (trimmedProblem.length < 10) {
        throw new Error(lang === 'ar' ? 'وصف المشكلة يجب أن يكون أكثر من 10 أحرف.' : 'Problem description must be at least 10 characters.');
      }

      if (!formData.branch) {
        throw new Error(lang === 'ar' ? 'الرجاء اختيار الفرع الأقرب إليك.' : 'Please select a branch.');
      }

      if (!formData.serviceType) {
        throw new Error(lang === 'ar' ? 'الرجاء اختيار نوع القضية أو الخدمة المطلوبة.' : 'Please select a service type.');
      }

      const branchNameAr = formData.branch === 'SADAT' ? 'فرع مدينة السادات' : 'فرع الشيخ زايد';

      const serviceTypeNameAr = 
        formData.serviceType === 'CIVIL' ? 'مدني وتعويضات' :
        formData.serviceType === 'CRIMINAL' ? 'جنائي وجرائم مالية' :
        formData.serviceType === 'CORPORATE' ? 'شركات وحوكمة' :
        formData.serviceType === 'FAMILY' ? 'أسرة وميراث' :
        formData.serviceType === 'COMMERCIAL' ? 'تجاري ومقاولات' :
        'أخرى';

      const message = `طلب استشارة قانونية جديدة:
الاسم: ${formData.name}
الهاتف: ${trimmedPhone}
الفرع: ${branchNameAr}
المجال القانوني: ${serviceTypeNameAr}
تفاصيل الاستفسار:
${trimmedProblem}`;

      const phoneTarget = formData.branch === 'SADAT' ? '201505363697' : '201505363698';
      const whatsappUrl = `https://wa.me/${phoneTarget}?text=${encodeURIComponent(message)}`;

      // Submit to API for audit/logging (optional/non-blocking)
      try {
        await fetch('/api/consultations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            phone: trimmedPhone,
            problem: trimmedProblem
          })
        });
      } catch (e) {
        console.error("API Logging note", e);
      }

      window.location.href = whatsappUrl;
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'حدث خطأ غير متوقع، يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 bg-white dark:bg-[#0b0f17] min-h-screen overflow-x-hidden w-full max-w-full">
      <section className="section-padding py-0 w-full max-w-full overflow-hidden relative">
        {/* Ambient Top Glow */}
        <div 
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(197,168,128,0.12),transparent_70%)] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-16 relative z-10 px-2">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dfb76c] mb-2 sm:mb-3 block">
            {isAr ? 'قنوات التواصل المباشر' : 'Direct Channels'}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 font-arabic leading-tight">
            {isAr ? 'احجز استشارة قانونية سرية' : 'Book a Confidential Legal Consultation'}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            {isAr 
              ? 'يسعدنا استقبال استفساراتكم ودراسة قضاياكم بأقصى درجات السرية والاحترافية والسرعة.' 
              : 'Our legal experts are ready to evaluate your legal matter with absolute confidentiality and prompt attention.'}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {/* Main Booking Form */}
          <div className="lg:col-span-2 bg-slate-50 dark:bg-[#111726]/85 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-luxury-card">
            <div className="flex items-center gap-2 mb-5 sm:mb-6 pb-3 sm:pb-4 border-b border-slate-200/80 dark:border-white/10">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfb76c]" />
              <h2 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white font-arabic">
                {isAr ? 'نموذج طلب الاستشارة السريعة' : 'Consultation Request Form'}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 sm:gap-5" dir={isAr ? 'rtl' : 'ltr'}>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2">
                  {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder={isAr ? 'أدخل اسمك بالكامل' : 'Enter your full name'}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131b2e] text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-200 text-base sm:text-sm min-h-[48px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2">
                  {isAr ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                  placeholder={isAr ? '01xxxxxxxxx' : '+20 1xxxxxxxxx'}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131b2e] text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-200 text-base sm:text-sm min-h-[48px]"
                  dir="ltr"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 sm:mb-2">
                  {isAr ? 'الفرع الأقرب إليك *' : 'Preferred Branch *'}
                </label>
                <select
                  required
                  value={formData.branch}
                  onChange={(event) => setFormData((prev) => ({ ...prev, branch: event.target.value }))}
                  className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131b2e] text-slate-900 dark:text-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-200 text-base sm:text-sm min-h-[48px]"
                >
                  <option value="" disabled>{isAr ? 'اختر الفرع المناسب' : 'Select Branch'}</option>
                  <option value="SADAT">{isAr ? 'فرع مدينة السادات (المنوفية)' : 'Sadat City Branch'}</option>
                  <option value="ZAYED">{isAr ? 'فرع الشيخ زايد (الجيزة)' : 'Sheikh Zayed Branch'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  {isAr ? 'المجال القانوني *' : 'Legal Practice Area *'}
                </label>
                <select
                  required
                  value={formData.serviceType}
                  onChange={(event) => {
                    const val = event.target.value;
                    let catVal = 'OTHER';
                    if (val === 'CIVIL') catVal = 'CIVIL';
                    else if (val === 'CRIMINAL') catVal = 'CRIMINAL';
                    else if (val === 'CORPORATE') catVal = 'CORPORATE';
                    else if (val === 'FAMILY') catVal = 'FAMILY';
                    else if (val === 'COMMERCIAL') catVal = 'CORPORATE';
                    
                    setFormData((prev) => ({
                      ...prev,
                      serviceType: val,
                      category: catVal
                    }));
                  }}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131b2e] text-slate-900 dark:text-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-200 text-sm"
                >
                  <option value="" disabled>{isAr ? 'اختر نوع القضية أو الخدمة' : 'Select Case Type'}</option>
                  <option value="CIVIL">{isAr ? 'القانون المدني والمنازعات المالية' : 'Civil & Financial Law'}</option>
                  <option value="CRIMINAL">{isAr ? 'القانون الجنائي والجرائم الاقتصادية' : 'Criminal & Economic Law'}</option>
                  <option value="CORPORATE">{isAr ? 'حوكمة وقانون الشركات والاندماج' : 'Corporate Law & Governance'}</option>
                  <option value="FAMILY">{isAr ? 'قانون الأسرة وتصفية المواريث' : 'Family Law & Estates'}</option>
                  <option value="COMMERCIAL">{isAr ? 'القانون التجاري والمقاولات' : 'Commercial & Construction'}</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  {isAr ? 'تفاصيل الاستفسار أو القضية (بسرية تامة) *' : 'Details of Your Legal Issue (Strictly Confidential) *'}
                </label>
                <textarea
                  required
                  minLength={10}
                  value={formData.problem}
                  onChange={(event) => setFormData((prev) => ({ ...prev, problem: event.target.value }))}
                  placeholder={isAr ? 'اكتب ملخصاً موجزاً للمشكلة القانونية وسنقوم بدراستها والرد عليكم فوراً...' : 'Provide a brief summary of your legal matter...'}
                  rows={4}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#131b2e] text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all duration-200 text-sm resize-none"
                />
              </div>

              {errorMessage && (
                <div className="md:col-span-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="md:col-span-2 bg-gradient-to-r from-[#dfb76c] via-[#c5a880] to-[#b38f56] text-slate-950 py-4 rounded-xl font-black text-base hover:shadow-gold-glow hover:-translate-y-0.5 transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>
                  {isSubmitting
                    ? (isAr ? 'جاري التحويل للمستشار...' : 'Redirecting...')
                    : (isAr ? 'إرسال الاستشارة والتواصل عبر واتساب فوراً' : 'Send & Chat on WhatsApp')}
                </span>
              </button>

              <p className="md:col-span-2 text-center text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>{isAr ? 'بياناتك مشفرة ومحمية بموجب قانون المحاماة وسرية المهنة' : 'Your data is encrypted and strictly protected by legal privilege.'}</span>
              </p>
            </form>
          </div>

          {/* Side Cards: Branches & Direct Contact */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-[#111726]/85 border border-slate-200/80 dark:border-white/10 p-6 rounded-3xl shadow-sm dark:shadow-luxury-card space-y-5" dir="rtl">
              <h3 className="font-bold text-base text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-white/10 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#dfb76c]" />
                <span>{isAr ? 'أرقام الاتصال المباشر' : 'Direct Call Contacts'}</span>
              </h3>

              {/* Sadat Branch Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#131b2e] border border-slate-200/60 dark:border-white/5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/15 text-[#dfb76c] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div className="flex-1 text-right">
                    <p className="font-bold text-sm text-slate-900 dark:text-white">
                      {isAr ? "فرع مدينة السادات" : "Sadat City Branch"}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                      {isAr ? 'المنطقة الحادية عشر - حي ال 7 عمارات - المنوفية' : '11th District - 7 Buildings Neighborhood'}
                    </p>
                    <a href="tel:01505363697" className="text-[#dfb76c] font-bold text-xs mt-2 inline-block font-sans" dir="ltr">
                      0150 536 3697
                    </a>
                  </div>
                </div>
                <a 
                  href="https://wa.me/201505363697" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl py-2.5 px-3 font-bold text-xs transition-colors w-full"
                >
                  <span>{isAr ? "واتساب - فرع السادات" : "WhatsApp - Sadat Branch"}</span>
                </a>
              </div>

              {/* Zayed Branch Card */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#131b2e] border border-slate-200/60 dark:border-white/5 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/15 text-[#dfb76c] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div className="flex-1 text-right">
                    <p className="font-bold text-sm text-slate-900 dark:text-white">
                      {isAr ? "فرع الشيخ زايد" : "Sheikh Zayed Branch"}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1 leading-relaxed">
                      {isAr ? 'الحي الثامن - المجاورة 3 - شارع الحكمة - الجيزة' : '8th District - Neighborhood 3 - Al Hikma Street'}
                    </p>
                    <a href="tel:01505363698" className="text-[#dfb76c] font-bold text-xs mt-2 inline-block font-sans" dir="ltr">
                      0150 536 3698
                    </a>
                  </div>
                </div>
                <a 
                  href="https://wa.me/201505363698" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl py-2.5 px-3 font-bold text-xs transition-colors w-full"
                >
                  <span>{isAr ? "واتساب - فرع الشيخ زايد" : "WhatsApp - Zayed Branch"}</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex justify-center gap-2.5">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/kamal.aboali.law.firm" },
                  { Icon: Instagram, href: "https://www.instagram.com/kamal.aboali.law.firm/" },
                  { Icon: Linkedin, href: "#" }
                ].map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target={href !== "#" ? "_blank" : undefined}
                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-gold/20 text-slate-700 dark:text-slate-300 hover:text-gold transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Branch Interactive Maps Section */}
        <div className="max-w-7xl mx-auto mt-20 relative z-10">
          <div className="text-center mb-8">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#dfb76c] mb-2 block">
              {isAr ? 'خرائط الوصول' : 'Location Maps'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-arabic">
              {isAr ? 'مواقع فروعنا على خرائط جوجل' : 'Our Branch Locations on Google Maps'}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sadat Map */}
            <div className="bg-white dark:bg-[#111726]/85 rounded-3xl overflow-hidden shadow-sm dark:shadow-luxury-card border border-slate-200/80 dark:border-white/10 p-2">
              <div className="p-3 font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between">
                <span>{isAr ? 'فرع مدينة السادات - المنوفية' : 'Sadat City Branch'}</span>
                <span className="text-xs text-[#dfb76c]">{isAr ? 'عرض الاتجاهات' : 'Get Directions'}</span>
              </div>
              <div className="h-80 w-full rounded-2xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps?q=30.360565185546875,30.529327392578125&z=17&hl=en&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sadat City Branch Map"
                />
              </div>
            </div>

            {/* Zayed Map */}
            <div className="bg-white dark:bg-[#111726]/85 rounded-3xl overflow-hidden shadow-sm dark:shadow-luxury-card border border-slate-200/80 dark:border-white/10 p-2">
              <div className="p-3 font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between">
                <span>{isAr ? 'فرع الشيخ زايد - الجيزة' : 'Sheikh Zayed Branch'}</span>
                <span className="text-xs text-[#dfb76c]">{isAr ? 'عرض الاتجاهات' : 'Get Directions'}</span>
              </div>
              <div className="h-80 w-full rounded-2xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.5!2d30.978201!3d30.029134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2090f85913898a73%3A0x56606c39555aa86e!2z2KfZhNix2KfYsSDYp9mE2LPYp9ixINin2YTYs9ix2KfYqCDZhdit2LPZhtin2K0g2KfZhNmF2YXYp9i52KfYsSDZgdin2LTYs9mE2Kkg2KfZhNmF2LnYp9mE2YrYp9mEINin2YTYsdmE2KfYsNmK2KfYrNivINin2YTYsdmE2YrYp9it2KfYrNiv!5e0!3m2!1sar!2seg!4v1234567890"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sheikh Zayed Branch Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

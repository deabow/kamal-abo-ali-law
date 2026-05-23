import { FormEvent, useState } from 'react';
import { MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
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
        throw new Error(lang === 'ar' ? 'رقم الهاتف يجب أن يكون بين 7 و20 حرفًا.' : 'Phone number must be between 7 and 20 characters.');
      }

      if (trimmedProblem.length < 10) {
        throw new Error(lang === 'ar' ? 'وصف المشكلة يجب أن يكون أكثر من 10 أحرف.' : 'Problem description must be longer than 10 characters.');
      }

      if (!formData.branch) {
        throw new Error(lang === 'ar' ? 'الرجاء اختيار الفرع.' : 'Please select a branch.');
      }

      if (!formData.serviceType) {
        throw new Error(lang === 'ar' ? 'الرجاء اختيار نوع الخدمة.' : 'Please select a service type.');
      }

      const branchNameAr = formData.branch === 'SADAT' ? 'فرع مدينة السادات' : 'فرع الشيخ زايد';

      const serviceTypeNameAr = 
        formData.serviceType === 'CIVIL' ? 'مدني' :
        formData.serviceType === 'CRIMINAL' ? 'جنائي' :
        formData.serviceType === 'CORPORATE' ? 'شركات' :
        formData.serviceType === 'FAMILY' ? 'أسرة' :
        formData.serviceType === 'COMMERCIAL' ? 'تجاري' :
        'أخرى';

      const message = `اسم العميل: ${formData.name}
رقم الهاتف: ${trimmedPhone}
الفرع: ${branchNameAr}
نوع الخدمة: ${serviceTypeNameAr}
المشكلة: ${trimmedProblem}`;

      const phoneTarget = formData.branch === 'SADAT' ? '201505363697' : '201505363698';
      const whatsappUrl = `https://wa.me/${phoneTarget}?text=${encodeURIComponent(message)}`;

      // Optional: submit to API just for record-keeping
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
        console.error("API Logging failed", e);
      }

      window.location.href = whatsappUrl;
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <section className="section-padding bg-white w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h2>
          <p className="text-gray-500">
            {lang === 'ar' ? 'يسعدنا الرد على استفساراتكم وتقديم الدعم القانوني اللازم.' : 'We are happy to answer your inquiries and provide the necessary legal support.'}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-bg-soft p-8 md:p-10 rounded-3xl">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                className="w-full px-4 py-3 rounded-xl border-none bg-white shadow-sm outline-none focus:ring-2 focus:ring-accent transition-all"
              />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                placeholder={lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                className="w-full px-4 py-3 rounded-xl border-none bg-white shadow-sm outline-none focus:ring-2 focus:ring-accent transition-all"
              />
              <select
                required
                value={formData.branch}
                onChange={(event) => setFormData((prev) => ({ ...prev, branch: event.target.value }))}
                className="w-full px-4 py-3 rounded-xl border-none bg-white shadow-sm outline-none focus:ring-2 focus:ring-accent transition-all"
              >
                <option value="" disabled>{lang === 'ar' ? 'اختر الفرع' : 'Choose Branch'}</option>
                <option value="SADAT">{lang === 'ar' ? 'فرع مدينة السادات' : 'Sadat City Branch'}</option>
                <option value="ZAYED">{lang === 'ar' ? 'فرع الشيخ زايد' : 'Sheikh Zayed Branch'}</option>
              </select>
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
                className="w-full px-4 py-3 rounded-xl border border-transparent dark:border-white/20 bg-white dark:bg-primary text-primary dark:text-white shadow-sm outline-none focus:ring-2 focus:ring-accent transition-all"
              >
                <option value="" disabled className="text-gray-400 bg-white dark:bg-primary dark:text-gray-400">
                  {lang === 'ar' ? 'اختر نوع الخدمة' : 'Select Service Type'}
                </option>
                <option value="CIVIL" className="text-primary dark:text-white bg-white dark:bg-primary">
                  {lang === 'ar' ? 'مدني' : 'Civil Law'}
                </option>
                <option value="CRIMINAL" className="text-primary dark:text-white bg-white dark:bg-primary">
                  {lang === 'ar' ? 'جنائي' : 'Criminal Law'}
                </option>
                <option value="CORPORATE" className="text-primary dark:text-white bg-white dark:bg-primary">
                  {lang === 'ar' ? 'شركات' : 'Corporate Law'}
                </option>
                <option value="FAMILY" className="text-primary dark:text-white bg-white dark:bg-primary">
                  {lang === 'ar' ? 'أسرة' : 'Family Law'}
                </option>
                <option value="COMMERCIAL" className="text-primary dark:text-white bg-white dark:bg-primary">
                  {lang === 'ar' ? 'تجاري' : 'Commercial Law'}
                </option>
              </select>
              <textarea
                required
                minLength={10}
                value={formData.problem}
                onChange={(event) => setFormData((prev) => ({ ...prev, problem: event.target.value }))}
                placeholder={lang === 'ar' ? 'اكتب المشكلة القانونية بالتفصيل' : 'Describe your legal issue'}
                rows={4}
                className="md:col-span-2 w-full px-4 py-3 rounded-xl border-none bg-white shadow-sm outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
              />
              {errorMessage && (
                <p className="md:col-span-2 text-sm text-red-600">{errorMessage}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="md:col-span-2 bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? lang === 'ar' ? 'جاري التحويل...' : 'Redirecting...'
                  : lang === 'ar' ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm space-y-6">
              <div className="w-full" dir="rtl">
                <div className="space-y-4">
                  {/* فرع السادات */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition w-full">
                    <div className="flex flex-row-reverse items-start justify-end gap-3 mb-3">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-accent/10">
                        <MapPin size={18} className="text-accent" />
                      </div>
                      <div className="flex-1 text-right">
                        <p className="font-semibold text-sm text-primary mb-1">
                          {isAr ? "فرع مدينة السادات" : "Sadat City Branch"}
                        </p>
                        <p className="text-gray-500 text-xs leading-5">
                          {isAr ? 'المنطقة الحادية عشر - حي ال 7 عمارات - مدينة السادات - المنوفية' : '11th District - 7 Buildings Neighborhood - Sadat City - Menoufia'}
                        </p>
                        <a href="tel:01505363697" className="text-accent font-semibold text-xs mt-2 inline-block" dir="ltr">
                          0150 536 3697
                        </a>
                      </div>
                    </div>
                    <a href="https://wa.me/201505363697" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-accent text-white rounded-xl p-2 font-semibold text-xs hover:bg-accent/90 transition">
                      {isAr ? "واتساب - فرع السادات" : "WhatsApp - Sadat Branch"}
                    </a>
                  </div>

                  {/* فرع زايد */}
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition w-full">
                    <div className="flex flex-row-reverse items-start justify-end gap-3 mb-3">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-accent/10">
                        <MapPin size={18} className="text-accent" />
                      </div>
                      <div className="flex-1 text-right">
                        <p className="font-semibold text-sm text-primary mb-1">
                          {isAr ? "فرع الشيخ زايد" : "Sheikh Zayed Branch"}
                        </p>
                        <p className="text-gray-500 text-xs leading-5">
                          {isAr ? 'الحي الثامن - المجاورة 3 - شارع الحكمة - الشيخ زايد - الجيزة' : '8th District - Neighborhood 3 - Al Hikma Street - Sheikh Zayed - Giza'}
                        </p>
                        <a href="tel:01505363698" className="text-accent font-semibold text-xs mt-2 inline-block" dir="ltr">
                          0150 536 3698
                        </a>
                      </div>
                    </div>
                    <a href="https://wa.me/201505363698" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-accent text-white rounded-xl p-2 font-semibold text-xs hover:bg-accent/90 transition">
                      {isAr ? "واتساب - فرع الشيخ زايد" : "WhatsApp - Sheikh Zayed Branch"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">


              </div>
            </div>

            <div className="flex justify-center gap-3">
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
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-all cursor-pointer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">
            {lang === 'ar' ? 'مواقع فروعنا' : 'Our Branch Locations'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-80">
              <iframe 
                src="https://www.google.com/maps?q=30.360565185546875,30.529327392578125&z=17&hl=en&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.5!2d30.978201!3d30.029134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2090f85913898a73%3A0x56606c39555aa86e!2z2KfZhNix2KfYsSDYp9mE2LPYp9ixINin2YTYs9ix2KfYqCDZhdit2LPZhtin2K0g2KfZhNmF2YXYp9i52KfYsSDZgdin2LTYs9mE2Kkg2KfZhNmF2LnYp9mE2YrYp9mEINin2YTYsdmE2KfYsNmK2KfYrNivINin2YTYsdmE2YrYp9it2KfYrNiv!5e0!3m2!1sar!2seg!4v1234567890"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sheikh Zayed Branch Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

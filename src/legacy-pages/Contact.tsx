import { motion } from 'motion/react';
import { FormEvent, useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Language } from '../types';

export default function Contact({ lang }: { lang: Language }) {
  const isAr = lang === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'OTHER',
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

      const branchNameAr = formData.branch === 'SADAT' ? 'فرع مدينة السادات' : 'فرع الشيخ زايد';

      const message = `اسم العميل: ${formData.name}
رقم الهاتف: ${trimmedPhone}
الفرع: ${branchNameAr}
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
      <section className="section-padding bg-white">
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
                value={formData.category}
                onChange={(event) => setFormData((prev) => ({ ...prev, category: event.target.value }))}
                className="w-full px-4 py-3 rounded-xl border-none bg-white shadow-sm outline-none focus:ring-2 focus:ring-accent transition-all"
              >
                <option value="OTHER">{lang === 'ar' ? 'أخرى' : 'Other'}</option>
                <option value="CRIMINAL">{lang === 'ar' ? 'جنائي' : 'Criminal'}</option>
                <option value="CORPORATE">{lang === 'ar' ? 'تجاري' : 'Commercial'}</option>
                <option value="FAMILY">{lang === 'ar' ? 'أسرة' : 'Family'}</option>

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
              <div className="w-full">
                <div className="space-y-4">
                  {/* فرع السادات */}
                  <a href="tel:01505363697" className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition">
                    <div className="text-right">
                      <p className="font-semibold text-sm text-primary">
                        {isAr ? "فرع السادات" : "Sadat Branch"}
                      </p>
                      <p className="text-gray-500 text-xs mt-1" dir="ltr">
                        0150 536 3697
                      </p>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10">
                      <Phone size={18} className="text-accent" />
                    </div>
                  </a>

                  {/* WhatsApp Sadat */}
                  <a href="https://wa.me/201505363697" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-accent text-white rounded-xl p-3 font-semibold text-sm hover:bg-accent/90 transition">
                    {isAr ? "تواصل عبر واتساب - فرع السادات" : "WhatsApp - Sadat Branch"}
                  </a>

                  {/* فرع زايد */}
                  <a href="tel:01505363698" className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-100 shadow-sm cursor-pointer hover:shadow-md transition">
                    <div className="text-right">
                      <p className="font-semibold text-sm text-primary">
                        {isAr ? "فرع زايد" : "Zayed Branch"}
                      </p>
                      <p className="text-gray-500 text-xs mt-1" dir="ltr">
                        0150 536 3698
                      </p>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/10">
                      <Phone size={18} className="text-accent" />
                    </div>
                  </a>

                  {/* WhatsApp Zayed */}
                  <a href="https://wa.me/201505363698" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-accent text-white rounded-xl p-3 font-semibold text-sm hover:bg-accent/90 transition">
                    {isAr ? "تواصل عبر واتساب - فرع الشيخ زايد" : "WhatsApp - Sheikh Zayed Branch"}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">


              </div>
            </div>

            <div className="flex justify-center gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

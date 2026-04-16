import { motion } from 'motion/react';
import { FormEvent, useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Language } from '../types';

export default function Contact({ lang }: { lang: Language }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'OTHER',
    problem: ''
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

      const response = await fetch('http://192.168.0.101:3001/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone: trimmedPhone,
          problem: trimmedProblem
        })
      });

      const text = await response.text();
      console.log('Raw Response:', text);
      if (!text.trim()) {
        throw new Error(
          lang === 'ar'
            ? 'لم يتم استلام رد من الخادم. تأكد من تشغيل Next API عبر npm run dev:next.'
            : 'No response from server. Make sure Next API is running with npm run dev:next.'
        );
      }

      let result: any;
      try {
        result = JSON.parse(text);
      } catch {
        throw new Error(`Server returned non-JSON response: ${text}`);
      }

      if (!response.ok) {
        throw new Error(result?.error?.message || 'Failed to submit consultation request.');
      }

      const data: { whatsappLink?: string } | undefined = result?.data;
      if (!data?.whatsappLink) {
        throw new Error('Missing WhatsApp redirect link.');
      }

      window.location.href = data.whatsappLink;
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
                value={formData.category}
                onChange={(event) => setFormData((prev) => ({ ...prev, category: event.target.value }))}
                className="w-full px-4 py-3 rounded-xl border-none bg-white shadow-sm outline-none focus:ring-2 focus:ring-accent transition-all"
              >
                <option value="OTHER">{lang === 'ar' ? 'أخرى' : 'Other'}</option>
                <option value="CRIMINAL">{lang === 'ar' ? 'جنائي' : 'Criminal'}</option>
                <option value="CORPORATE">{lang === 'ar' ? 'تجاري' : 'Commercial'}</option>
                <option value="FAMILY">{lang === 'ar' ? 'أسرة' : 'Family'}</option>
                <option value="CIVIL">{lang === 'ar' ? 'مدني' : 'Civil'}</option>
                <option value="LABOR">{lang === 'ar' ? 'عمال' : 'Labor'}</option>
                <option value="REAL_ESTATE">{lang === 'ar' ? 'عقارات' : 'Real Estate'}</option>
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
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase">{lang === 'ar' ? 'اتصل بنا' : 'Call Us'}</h4>
                  <p className="text-sm font-bold text-primary">XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h4>
                  <p className="text-sm font-bold text-primary">info@aboalilawfirm.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase">{lang === 'ar' ? 'العنوان' : 'Address'}</h4>
                  <p className="text-sm font-bold text-primary">{lang === 'ar' ? 'XXXX' : 'XXXX'}</p>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-3xl overflow-hidden shadow-sm relative group">
              <img 
                src="https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&q=80&w=600" 
                alt="Map" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center animate-bounce shadow-xl">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
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

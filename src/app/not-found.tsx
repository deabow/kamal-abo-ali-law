import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-bg-soft section-padding">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">
            الصفحة غير موجودة
          </h2>
          <p className="text-gray-500 text-lg">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يرجى العودة إلى الصفحة الرئيسية لمتابعة التصفح.
          </p>
        </div>

        <div className="pt-8">
          <Link 
            href="/"
            className="inline-block px-10 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 hover:scale-105 transition-all shadow-lg"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

import { MessageCircle, Facebook } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
      {/* Facebook Button */}
      <a 
        href="https://www.facebook.com/profile.php?id=61557459359764&locale=ar_AR" 
        target="_blank" 
        rel="noreferrer"
        className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"
        title="متابعة على فيسبوك"
      >
        <Facebook className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          متابعنا على فيسبوك
        </span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/XXXX" 
        target="_blank" 
        rel="noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all group"
        title="راسلنا على واتس أب"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          تحدث معنا الآن
        </span>
      </a>
    </div>
  );
};

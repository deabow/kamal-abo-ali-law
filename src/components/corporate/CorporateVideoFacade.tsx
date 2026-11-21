'use client';

import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface CorporateVideoFacadeProps {
  videoSrc?: string;
}

export function CorporateVideoFacade({
  videoSrc = '/videos/promo-video.mp4',
}: CorporateVideoFacadeProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isVideoPlaying && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // User can interact with native controls if browser blocks autoplay
        });
      }
    }
  }, [isVideoPlaying]);

  return (
    <div className="relative w-full aspect-video md:max-h-[75vh] rounded-2xl md:rounded-3xl overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/10 group">
      {/* Gold corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-accent/50 rounded-tl-2xl md:rounded-tl-3xl pointer-events-none z-20" />
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/50 rounded-tr-2xl md:rounded-tr-3xl pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent/50 rounded-bl-2xl md:rounded-bl-3xl pointer-events-none z-20" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/50 rounded-br-2xl md:rounded-br-3xl pointer-events-none z-20" />

      {/* Lightweight pure CSS dark/gold luxury background (zero external image requests) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-slate-900 to-primary dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />

      {/* Obsidian texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(197,160,89,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(197,160,89,0.1) 0%, transparent 50%)',
        }}
      />

      {/* Subtle inline SVG architectural grid & scales watermark */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none text-accent"
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="225" r="160" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="400" cy="225" r="220" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="120" y1="225" x2="680" y2="225" stroke="currentColor" strokeWidth="1" />
        <line x1="400" y1="45" x2="400" y2="405" stroke="currentColor" strokeWidth="1" />
      </svg>

      {!isVideoPlaying ? (
        <button
          type="button"
          onClick={() => setIsVideoPlaying(true)}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 cursor-pointer group/play"
          aria-label="تشغيل الفيديو"
        >
          <div className="relative">
            {/* Pulse ring */}
            <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent/20 animate-ping" />
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent/90 flex items-center justify-center shadow-xl shadow-accent/30 group-hover/play:bg-accent group-hover/play:scale-110 transition-all duration-300">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white mr-[-3px]" />
            </div>
          </div>
          <span className="text-white/80 text-sm md:text-base font-medium text-center px-4 leading-relaxed max-w-md">
            شاهد كلمة المستشار كمال أبو علي لأصحاب الشركات والمستثمرين
          </span>
        </button>
      ) : (
        <video
          ref={videoRef}
          controls
          autoPlay
          playsInline
          preload="none"
          className="absolute inset-0 z-10 w-full h-full object-cover bg-black"
        >
          <source src={videoSrc} type="video/mp4" />
          متصفحك لا يدعم تشغيل الفيديو.
        </video>
      )}
    </div>
  );
}

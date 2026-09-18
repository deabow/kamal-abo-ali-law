'use client';

import Image from 'next/image';
import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';
import { Award } from 'lucide-react';

const SUN_SRC = '/certificate/sun.png';

const certs = [
  { id: 1, src: '/certificate/1.png', title: 'شهادة الاعتماد' },
  { id: 2, src: '/certificate/2.png', title: 'شهادة العضوية' },
  { id: 3, src: '/certificate/3.png', title: 'شهادة التقدير' },
  { id: 4, src: '/certificate/4.jpeg', title: 'شهادة الترافع' },
  { id: 5, src: '/certificate/5.jpeg', title: 'اعتماد الحوكمة' },
  { id: 6, src: '/certificate/6.jpeg', title: 'التحكيم الدولي' },
  { id: 7, src: '/certificate/7.jpeg', title: 'القيد بالنقض' },
];

const MID = 3;
const BASE_W = 220;
const BASE_H = 162;

const DISTANCE_SLOTS = [
  { translateX: 0, translateZ: 100, rotateY: 0, bottomPx: 56, scale: 1.0 },
  { translateX: 152, translateZ: 72, rotateY: 22, bottomPx: 96, scale: 0.93 },
  { translateX: 292, translateZ: 42, rotateY: 40, bottomPx: 136, scale: 0.86 },
  { translateX: 438, translateZ: 12, rotateY: 54, bottomPx: 180, scale: 0.78 },
] as const;

type CardConfig = {
  translateX: number;
  translateZ: number;
  rotateY: number;
  bottomPx: number;
  cardW: number;
  cardH: number;
};

function buildCardConfig(i: number): CardConfig {
  const dist = Math.abs(i - MID);
  const slot = DISTANCE_SLOTS[dist];
  const cardW = Math.round(BASE_W * slot.scale);
  const cardH = Math.round(BASE_H * slot.scale);

  if (i === MID) {
    return {
      translateX: 0,
      translateZ: slot.translateZ,
      rotateY: 0,
      bottomPx: slot.bottomPx,
      cardW,
      cardH,
    };
  }

  const sign = i < MID ? -1 : 1;
  return {
    translateX: sign * slot.translateX,
    translateZ: slot.translateZ,
    rotateY: i < MID ? slot.rotateY : -slot.rotateY,
    bottomPx: slot.bottomPx,
    cardW,
    cardH,
  };
}

const cardConfigs = certs.map((_, i) => buildCardConfig(i));

export default function OrbitGallery() {
  return (
    <section className="w-full overflow-hidden py-14 sm:py-20 bg-bg-soft dark:bg-[#070a10] border-t border-slate-200/80 dark:border-white/5 relative">
      {/* Background Radial Glow */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,168,128,0.1),transparent_70%)] pointer-events-none" 
      />

      <div className="mb-10 sm:mb-14 px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:py-1.5 rounded-full bg-gold/10 border border-gold/30 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#dfb76c] mb-2 sm:mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>السجل المهني والاعتمادات</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white font-arabic">
          الشهادات والاعتمادات القضائية والأكاديمية
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base mt-2 max-w-xl mx-auto">
          توثيق رسمي لمسيرة حافلة بالعطاء القانوني والخبرات المعتمدة في شتى المحاكم
        </p>
      </div>

      {/* 3D Desktop Presentation */}
      <div className="mx-auto hidden max-w-7xl px-6 lg:block relative z-10 overflow-hidden">
        <div
          className="relative min-h-screen w-full overflow-hidden"
          style={{
            perspective: '1100px',
            perspectiveOrigin: '50% 52%',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              zIndex: 4,
              background:
                'radial-gradient(ellipse 54% 60% at 50% 46%, rgba(197,168,128,0.22) 0%, rgba(197,168,128,0.08) 45%, transparent 72%)',
            }}
          />

          <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
            <div
              className="pointer-events-none absolute bottom-0 left-1/2"
              style={{
                width: 'min(820px, 94%)',
                height: '100%',
                transform: 'translateX(-50%) translateZ(-200px)',
                transformStyle: 'preserve-3d',
                zIndex: 10,
              }}
            >
              <Image
                src={SUN_SRC}
                alt="المستشار كمال أبو علي"
                fill
                className="object-contain object-bottom drop-shadow-[0_28px_60px_rgba(0,0,0,0.6)] filter brightness-95"
                sizes="820px"
                priority
                placeholder="blur"
                blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                draggable={false}
              />
            </div>

            <div
              className="pointer-events-none absolute bottom-[148px] left-1/2 flex w-full max-w-[1280px] -translate-x-1/2 translate-y-[50px] justify-center"
              style={{ height: '420px', transformStyle: 'preserve-3d' }}
            >
              <div
                className="relative h-full w-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {cardConfigs.map(
                  ({ translateX, translateZ, rotateY, bottomPx, cardW, cardH }, i) => (
                    <div
                      key={certs[i].id}
                      className="absolute left-1/2 transition-transform duration-300"
                      style={{
                        bottom: `${bottomPx}px`,
                        width: `${cardW}px`,
                        height: `${cardH}px`,
                        transform: `translateX(calc(-50% + ${translateX}px)) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                        transformStyle: 'preserve-3d',
                        zIndex: 50,
                        pointerEvents: 'none',
                      }}
                    >
                      <div
                        className="relative h-full w-full overflow-hidden rounded-2xl shadow-[0_16px_50px_rgba(0,0,0,0.65)] ring-1 ring-gold/40 border border-white/20"
                        style={{ cursor: 'default' }}
                      >
                        <Image
                          src={certs[i].src}
                          alt={`شهادة ${certs[i].id}`}
                          fill
                          className="object-cover"
                          sizes={`${cardW}px`}
                          placeholder="blur"
                          blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                          draggable={false}
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Presentation */}
      <div className="px-4 sm:px-6 lg:hidden relative z-10">
        <div className="mb-8 sm:mb-10 flex justify-center">
          <div className="relative h-64 w-52 sm:h-96 sm:w-72">
            <Image
              src={SUN_SRC}
              alt="المستشار كمال أبو علي"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              sizes="(max-width: 640px) 208px, 288px"
              priority
              placeholder="blur"
              blurDataURL={BLUR_IMAGE_PLACEHOLDER}
              draggable={false}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {certs.map((c) => (
            <div
              key={c.id}
              className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg ring-1 ring-gold/30 border border-white/10"
              style={{ cursor: 'default', pointerEvents: 'none' }}
            >
              <Image
                src={c.src}
                alt={`شهادة ${c.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

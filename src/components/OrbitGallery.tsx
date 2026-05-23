'use client';

import Image from 'next/image';
import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';

const SUN_SRC = '/certificate/sun.png';

const certs = [
  { id: 1, src: '/certificate/1.png' },
  { id: 2, src: '/certificate/2.png' },
  { id: 3, src: '/certificate/3.png' },
  { id: 4, src: '/certificate/4.jpeg' },
  { id: 5, src: '/certificate/5.jpeg' },
  { id: 6, src: '/certificate/6.jpeg' },
  { id: 7, src: '/certificate/7.jpeg' },
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
    <section className="w-full overflow-visible py-16">
      <div className="mb-8 px-4 text-center">
        <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-accent">
          الشهادات والاعتمادات
        </span>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500 md:text-base">
          اعتمادات وشهادات تؤكد التزامنا بأعلى معايير الجودة والكفاءة المهنية
        </p>
      </div>

      <div className="mx-auto hidden max-w-7xl px-6 lg:block">
        <div
          className="relative min-h-screen w-full overflow-visible"
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
                'radial-gradient(ellipse 54% 60% at 50% 46%, rgba(197,160,89,0.20) 0%, rgba(197,160,89,0.07) 45%, transparent 72%)',
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
                className="object-contain object-bottom drop-shadow-[0_28px_60px_rgba(0,0,0,0.45)]"
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
                      className="absolute left-1/2"
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
                        className="relative h-full w-full overflow-hidden rounded-xl shadow-[0_14px_48px_rgba(0,0,0,0.58)] ring-1 ring-white/28"
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

      <div className="px-4 lg:hidden">
        <div className="mb-10 flex justify-center">
          <div className="relative h-72 w-56 sm:h-96 sm:w-72">
            <Image
              src={SUN_SRC}
              alt="المستشار كمال أبو علي"
              fill
              className="object-contain object-bottom drop-shadow-xl"
              sizes="288px"
              priority
              placeholder="blur"
              blurDataURL={BLUR_IMAGE_PLACEHOLDER}
              draggable={false}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {certs.map((c) => (
            <div
              key={c.id}
              className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg ring-1 ring-white/20"
              style={{ cursor: 'default', pointerEvents: 'none' }}
            >
              <Image
                src={c.src}
                alt={`شهادة ${c.id}`}
                fill
                className="object-cover"
                sizes="33vw"
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

'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { BLUR_IMAGE_PLACEHOLDER } from '../lib/blur-placeholder';

const certs = [
  { id: 1, src: '/certificate/1.png' },
  { id: 2, src: '/certificate/2.png' },
  { id: 3, src: '/certificate/3.png' },
  { id: 4, src: '/certificate/4.jpeg' },
  { id: 5, src: '/certificate/5.jpeg' },
  { id: 6, src: '/certificate/6.jpeg' },
  { id: 7, src: '/certificate/7.jpeg' },
];

const DUR = 45;
const R = 380;
const TILT = 75;
const STEP = (2 * Math.PI) / certs.length;
const SCENE = R * 2 + 260;

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="lb-bg"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
          aria-label="Close"
        >
          <X className="w-7 h-7" />
        </button>
        <motion.div
          className="relative w-[90vw] h-[90vh] max-w-5xl cursor-default"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image src={src} alt="Certificate" fill className="object-contain" sizes="90vw" priority />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function OrbitGallery() {
  const [paused, setPaused] = useState(false);
  const [hovId, setHovId] = useState<number | null>(null);
  const [lbSrc, setLbSrc] = useState<string | null>(null);

  const hoverIn = useCallback((id: number) => { setPaused(true); setHovId(id); }, []);
  const hoverOut = useCallback(() => { setPaused(false); setHovId(null); }, []);
  const ps = paused ? 'paused' as const : 'running' as const;

  return (
    <>
      <section className="w-full min-h-[90vh] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold uppercase tracking-widest mb-4 block text-sm">
              الشهادات والاعتمادات
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">شهاداتنا المعتمدة</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              اعتمادات وشهادات تؤكد التزامنا بأعلى معايير الجودة والكفاءة المهنية
            </p>
          </motion.div>

          {/* ==================== DESKTOP 3-D ORBIT ==================== */}
          <div className="hidden md:flex items-center justify-center min-h-[800px]">
            {/* 1) perspective root */}
            <div style={{ perspective: 1200 }}>
              {/* 2) 3-D scene — preserve-3d #1 */}
              <div
                className="relative"
                style={{
                  width: SCENE,
                  height: SCENE,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* ---- THE SUN ---- */}
                <div
                  className="absolute z-30 pointer-events-none"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) translateZ(0px)',
                  }}
                >
                  <div className="relative w-[400px] sm:w-[500px] lg:w-[700px] aspect-[3/4]">
                    <Image
                      src="/certificate/The sun.png"
                      alt="المستشار كمال أبو علي"
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="700px"
                      priority
                      placeholder="blur"
                      blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                    />
                  </div>
                  <div
                    className="absolute -inset-20 rounded-full -z-10"
                    style={{
                      background:
                        'radial-gradient(circle,rgba(197,160,89,.3) 0%,rgba(197,160,89,.05) 50%,transparent 70%)',
                    }}
                  />
                </div>

                {/* ---- orbit track ring ---- */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    width: R * 2,
                    height: R * 2,
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%,-50%) rotateX(${TILT}deg)`,
                    borderRadius: '50%',
                    border: '1px dashed rgba(197,160,89,.15)',
                  }}
                />

                {/* 3) tilted orbit plane — preserve-3d #2 */}
                <div
                  className="absolute"
                  style={{
                    width: SCENE,
                    height: SCENE,
                    top: 0,
                    left: 0,
                    transform: `rotateX(${TILT}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* 4) spinning wrapper — preserve-3d #3 */}
                  <div
                    className="w-full h-full orbit-spin"
                    style={{
                      transformStyle: 'preserve-3d',
                      animationDuration: `${DUR}s`,
                      animationPlayState: ps,
                    }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={hoverOut}
                  >
                    {certs.map((c, i) => {
                      const a = STEP * i - Math.PI / 2;
                      const x = Math.cos(a) * R;
                      const y = Math.sin(a) * R;
                      const hovered = hovId === c.id;

                      return (
                        /* 5) cert position — preserve-3d #4 */
                        <div
                          key={c.id}
                          className="absolute"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                            transformStyle: 'preserve-3d',
                          }}
                        >
                          {/* 6) counter-spin (Z axis) — preserve-3d #5 */}
                          <div
                            className="orbit-counter-spin"
                            style={{
                              animationDuration: `${DUR}s`,
                              animationPlayState: ps,
                              transformStyle: 'preserve-3d',
                            }}
                          >
                            {/* 7) counter-tilt (X axis) — stands the card upright */}
                            <div style={{ transform: `rotateX(-${TILT}deg)` }}>
                              <motion.div
                                className={`relative cursor-pointer rounded-xl overflow-hidden shadow-lg
                                  ${hovered
                                    ? 'shadow-2xl shadow-accent/40 ring-4 ring-accent/60 z-50'
                                    : 'ring-2 ring-white/30 dark:ring-white/10'
                                  }`}
                                style={{ width: 192, height: 140 }}
                                whileHover={{ scale: 1.5 }}
                                onMouseEnter={() => hoverIn(c.id)}
                                onMouseLeave={hoverOut}
                                onClick={() => setLbSrc(c.src)}
                              >
                                <Image
                                  src={c.src}
                                  alt={`شهادة ${c.id}`}
                                  fill
                                  className="object-cover"
                                  sizes="192px"
                                  placeholder="blur"
                                  blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                                />
                                {hovered && (
                                  <div className="absolute inset-0 bg-accent/10 pointer-events-none" />
                                )}
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== MOBILE GRID ==================== */}
          <div className="md:hidden">
            <motion.div
              className="flex justify-center mb-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative w-64 h-80">
                <Image
                  src="/certificate/The sun.png"
                  alt="المستشار كمال أبو علي"
                  fill
                  className="object-contain"
                  sizes="256px"
                  priority
                  placeholder="blur"
                  blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                />
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {certs.map((c, i) => (
                <motion.div
                  key={c.id}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg ring-1 ring-white/20 dark:ring-white/10 cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  onClick={() => setLbSrc(c.src)}
                >
                  <Image
                    src={c.src}
                    alt={`شهادة ${c.id}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="50vw"
                    placeholder="blur"
                    blurDataURL={BLUR_IMAGE_PLACEHOLDER}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {lbSrc && <Lightbox src={lbSrc} onClose={() => setLbSrc(null)} />}
    </>
  );
}

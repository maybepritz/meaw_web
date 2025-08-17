"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";


function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// Компонент кота-маскота
function CatMascot() {
  return (
    <motion.div
      className="w-32 h-32 mx-auto mb-8"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      }}
    >
      <motion.div
        className="w-full h-full drop-shadow-lg"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {/* 
          ЗАМЕНИТЕ НА ВАШ PNG КОТ!
          Измените src="/cat-mascot.png" на путь к вашему изображению
          Например: src="/images/my-cat.png" или импортируйте как import CatImage from '/public/cat.png'
        */}
        <img
          src="/logo.png"
          alt="Кот-маскот"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </motion.div>
  );
}

export default function NotFound() {
  const title404 = "404";
  const subtitle = "СТРАНИЦА НЕ НАЙДЕНА";

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Кот-маскот */}
          <CatMascot />

          {/* 404 */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold mb-4 tracking-tighter">
            {title404.split("").map((digit, index) => (
              <motion.span
                key={index}
                initial={{ y: 1000, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150,
                  damping: 25,
                }}
                className="inline-block text-transparent bg-clip-text 
                          bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                          dark:from-white dark:to-white/80"
              >
                {digit}
              </motion.span>
            ))}
          </h1>

          {/* Подзаголовок */}
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl font-medium mb-8 tracking-wide 
                      text-neutral-600 dark:text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {subtitle.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.5 + index * 0.02,
                  duration: 0.3,
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h2>

          {/* Описание */}
          <motion.p 
            className="text-base sm:text-lg text-neutral-500 dark:text-neutral-500 mb-12 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Мяу! Кажется, эта страница убежала ловить мышек. 
            Давайте вернёмся на главную и попробуем снова.
          </motion.p>

          {/* Кнопки */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="inline-block group relative p-px overflow-hidden">
              <Button className="cursor-pointer relative z-10">
                <Link href="/" className="flex items-center">
                  <span>На главную</span>
                  <span className="ml-3 group-hover:translate-x-1.5 transition-all duration-300">
                    →
                  </span>
                </Link>
              </Button>
            </div>

            <div className="inline-block group relative p-px overflow-hidden">
              <Button variant="outline" className="cursor-pointer relative z-10">
                <Link href="https://discord.gg/rADMqKpFXx" className="flex items-center">
                  <span>Discord сервер</span>
                  <span className="ml-3 group-hover:translate-x-1.5 transition-all duration-300">
                    🎮
                  </span>
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Статус Discord */}
          <motion.div
            className="mt-12 inline-flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <span>Discord сервер онлайн</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
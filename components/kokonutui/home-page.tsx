"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { X, Moon, Sun } from "lucide-react"
import ProfessionalExperiences from "../professional-experiences"
import TechnologyBanner from "../TechnologyBanner"
import CompanyBanner from "../CompanyBanner"
import { useTheme } from "next-themes"

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
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
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
  )
}

function ContactPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
    >
      <div className="bg-white/90 dark:bg-neutral-800/90 rounded-lg p-6 max-w-md w-full relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Contact Information</h2>
        <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
          <li>
            <strong>Email:</strong> maximemolesin@icloud.com
          </li>
          <li>
            <strong>Phone:</strong> +33631267433
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/maximemolesin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              www.linkedin.com/in/maximemolesin
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default function HomePage() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState<"home" | "experiences">("home")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const name = "Maxime Molesin"
  const title = "Engineer, M. Sc."

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const techBannerY = useTransform(scrollYProgress, [0, 1], [0, 25])
  const companyBannerY = useTransform(scrollYProgress, [0, 1], [0, -25])

  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div ref={containerRef} className="relative min-h-screen w-full flex flex-col bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <nav className="sticky top-0 z-20 w-full bg-white/30 dark:bg-black/30 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex space-x-4">
          <Button
            variant="outline"
            onClick={() => setCurrentSection("home")}
            className={`text-neutral-800 dark:text-neutral-200 border-2 ${
              currentSection === "home" ? "border-neutral-800 dark:border-neutral-200" : "border-transparent"
            }`}
          >
            Home
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentSection("experiences")}
            className={`text-neutral-800 dark:text-neutral-200 border-2 ${
              currentSection === "experiences" ? "border-neutral-800 dark:border-neutral-200" : "border-transparent"
            }`}
          >
            Professional Experiences
            </Button>
          </div>
          <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <div className="flex-grow flex flex-col justify-center items-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl backdrop-blur-sm bg-white/30 dark:bg-black/30 p-8 rounded-2xl shadow-lg mb-16 border-2 border-white/40 dark:border-black/40"
        >
          {currentSection === "home" ? (
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 tracking-tighter">
                {name.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block">
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={`${wordIndex}-${letterIndex}`}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: (wordIndex * word.length + letterIndex) * 0.03,
                          type: "spring",
                          stiffness: 150,
                          damping: 25,
                        }}
                        className="inline-block text-transparent bg-clip-text 
                                 bg-gradient-to-r from-neutral-900 to-neutral-700 
                                 dark:from-white dark:to-white/90"
                      >
                        {letter}
                      </motion.span>
                    ))}
                    {wordIndex === 0 && <span className="inline-block w-[0.3em]">&nbsp;</span>}
                  </span>
                ))}
              </h1>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl font-light mb-8 text-neutral-800 dark:text-neutral-200"
              >
                {title}
              </motion.h2>

              <div className="flex flex-col items-center mb-8">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-white/50 dark:ring-black/50"
                >
                  <Image
                    src="/images/moi_photo.jpg"
                    alt="Maxime Molesin"
                    width={164}
                    height={164}
                    className="object-cover"
                  />
                </motion.div>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="text-lg text-neutral-800 dark:text-neutral-200 max-w-2xl text-center mb-8 leading-relaxed"
                >
                  Computer Engineer and M.Sc., I leverage my expertise in intelligent application development and data
                  science to serve innovative projects. My France-Quebec binational background and professional
                  internship experiences demonstrate my ability to combine rapid adaptation with essential curiosity.
                </motion.p>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                           dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                           overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Button
                  variant="ghost"
                  onClick={() => setIsContactPopupOpen(true)}
                  className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                             bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                             text-black dark:text-white transition-all duration-300 
                             group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                             hover:shadow-md dark:hover:shadow-neutral-800/50"
                >
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">Contact me</span>
                  <span
                    className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                               transition-all duration-300"
                  >
                    →
                  </span>
                </Button>
              </motion.div>
            </div>
          ) : (
            <ProfessionalExperiences />
          )}
        </motion.div>
      </div>

      <div className="w-full space-y-4">
        <motion.div 
          style={{ y: techBannerY }} 
          transition={{ type: "spring", stiffness: 50 }}
          className="relative z-10"
        >
          <TechnologyBanner />
        </motion.div>

        <motion.div 
          style={{ y: companyBannerY }} 
          transition={{ type: "spring", stiffness: 30 }}
          className="relative z-0"
        >
          <CompanyBanner />
        </motion.div>
      </div>

      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </div>
  )
}


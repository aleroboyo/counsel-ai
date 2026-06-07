'use client'

import { howItWorks } from "@/data/howItWorks"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import AnimatedContent from "../ui/AnimatedContent"

gsap.registerPlugin(ScrollTrigger)

const HowItWorks = ({ onContinue }: { onContinue: () => void }) => {
  const lineRef = useRef<HTMLDivElement>(null)
  const [isLg, setIsLg] = useState(false)

  useEffect(() => {
    setIsLg(window.innerWidth >= 1024)
    const handleResize = () => setIsLg(window.innerWidth >= 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    gsap.fromTo(lineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 3.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
        }
      }
    )
  }, [])

  return (
    <div className="flex flex-col w-full font-inter md:mt-20 md:px-6 lg:mb-30">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-75 bg-[#D4A017] rounded-full opacity-20 blur-[80px] hidden lg:block" />

      <h2 className="font-playfair text-3xl text-[#F8FAFC] mb-8 lg:text-center lg:mb-16">
        How it works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 lg:items-center">

        {/* large screen only */}
        {isLg ? (
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={true}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <div className="hidden md:flex items-center justify-center">
              <Image
                src='/images/Lease Translation - Chat UI.png'
                alt='Counsel AI Lease Translation Chat UI'
                width={320}
                height={320}
                className="rounded-xl lg:w-320"
              />
            </div>
          </AnimatedContent>
        ) : (
          <div className="hidden md:flex items-center justify-center">
            <Image
              src='/images/Lease Translation - Chat UI.png'
              alt='Counsel AI Lease Translation Chat UI'
              width={320}
              height={320}
              className="rounded-xl lg:w-320"
            />
          </div>
        )}

        <div className="relative flex flex-col gap-0 mb-10">

          <div
            ref={lineRef}
            className="absolute left-5 top-5 bottom-5 w-[2px] bg-gradient-to-b from-[#D4A017] to-[#D4A017]/10"
          />

          {howItWorks.map((item) => (
            <div key={item.step} className="flex gap-6 items-start relative z-10 mb-8 last:mb-0">
              <div className="w-10 h-10 md:font-playfair bg-[#D4A017] rounded-full flex items-center justify-center shrink-0">
                <span className="md:font-playfair font-bold text-[#0F172A]">{item.step}</span>
              </div>

              {/* large screen only */}
              {isLg ? (
                <AnimatedContent
                  distance={100}
                  direction="horizontal"
                  reverse={false}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.1}
                  delay={0}
                >
                  <div className="bg-[#1E293B] min-w-125 rounded-xl flex-2 p-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#D4A017]">
                        {item.icon && <item.icon size={20} />}
                      </span>
                      <p className="md:font-playfair font-medium">{item.label}</p>
                    </div>
                    <p className="text-[#94A3B8]">{item.longDescription}</p>
                  </div>
                </AnimatedContent>
              ) : (
                <div className="bg-[#1E293B] rounded-xl flex-2 p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#D4A017]">
                      {item.icon && <item.icon size={20} />}
                    </span>
                    <p className="md:font-playfair font-medium">{item.label}</p>
                  </div>
                  <p className="text-[#94A3B8] text-sm">{item.longDescription}</p>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>

      <button
        onClick={onContinue}
        className="self-center text-xl rounded-2xl bg-[#D4A017] px-8 py-4 text-[#1E293B] flex items-center justify-center lg:hidden"
      >
        Continue
      </button>
    </div>
  )
}

export default HowItWorks
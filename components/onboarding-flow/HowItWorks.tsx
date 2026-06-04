'use client'

import { howItWorks } from "@/data/howItWorks"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const HowItWorks = ({ onContinue }: { onContinue: () => void }) => {
  const lineRef = useRef<HTMLDivElement>(null)

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
    <div className="flex flex-col w-full font-inter md:mt-20 md:px-6">
      <h2 className="font-playfair text-3xl text-[#F8FAFC] mb-8">
        How it works
      </h2>

    <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex items-center justify-center">
        <Image
            src='/images/Lease Translation - Chat UI.png'
            alt='Counsel AI Lease Translation Chat UI'
            width={320}
            height={320}
            className="rounded-xl"
        />
      </div>

        <div className="relative flex flex-col gap-0 mb-10">

        {/* animated vertical line */}
        <div
          ref={lineRef}
          className="absolute left-5 top-5 bottom-5 w-[2px] bg-gradient-to-b from-[#D4A017] to-[#D4A017]/10"
        />

        {howItWorks.map((item) => (
          <div key={item.step} className="flex gap-6 items-start relative z-10 mb-8 last:mb-0">
            {/* number circle */}
            <div className="w-10 h-10 md:font-playfair bg-[#D4A017] rounded-full flex items-center justify-center shrink-0">
              <span className="md:font-playfair font-bold text-[#0F172A]">{item.step}</span>
            </div>
            {/* content */}
            <div className="bg-[#1E293B] rounded-xl p-4 flex-1 border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#D4A017]">
                    {item.icon  && <item.icon size={20}  />}
                </span>
                <p className="md:font-playfair font-medium">{item.label}</p>
              </div>
              <p className="text-[#94A3B8] text-sm">{item.longDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      

      <button
        onClick={onContinue}
        className="self-center text-xl rounded-2xl bg-[#D4A017] px-8 py-4 text-[#1E293B] flex items-center justify-center"
      >
        Continue
      </button>
    </div>
  )
}

export default HowItWorks
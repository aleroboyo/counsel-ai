'use client'

import { useState, useRef } from "react"
import { gsap } from "gsap"
import Welcome from "@/components/onboarding-flow/Welcome"
import Features from '@/components/onboarding-flow/Features'
import HowItWorks from "@/components/onboarding-flow/HowItWorks"
import SignUp from "@/components/onboarding-flow/SignUp"
import Image from "next/image"
import Link from "next/link"

const steps = [Welcome, Features, HowItWorks, SignUp]

const Home = () => {
  const [step, setStep] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  const goNext = () => {
    gsap.to(contentRef.current, {
      y: -20, opacity: 0, duration: 0.25, ease: 'power2.in',
      onComplete: () => {
        setStep(s => Math.min(s + 1, steps.length - 1))
        gsap.fromTo(contentRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
        )
      }
    })
  }

  const StepComponent = steps[step]
  return (
    <main className="font-inter flex items-center justify-center px-4 py-10">

      <div className="lg:hidden flex flex-col items-center justify-center">
        <div ref={contentRef} className="w-full">
          <StepComponent onContinue={goNext} />
        </div>

        <div className="fixed flex gap-2 bottom-8">
          {steps.map((_, i) => (
            <div key={i} className={`h-[6px] rounded-full transition-all duration-300 ${
              i === step ? 'w-12 bg-[#D4A017]' : 'w-3 bg-[#94A3B8]/30'
            }`} />
          ))}
        </div>
      </div>

    </main>
  )
}

export default Home

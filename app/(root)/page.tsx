'use client'

import { Sparkles } from 'lucide-react'
import { useState, useRef } from "react"
import { gsap } from "gsap"
import Welcome from "@/components/onboarding-flow/Welcome"
import Features from '@/components/onboarding-flow/Features'
import HowItWorks from "@/components/onboarding-flow/HowItWorks"
import SignUp from "@/components/onboarding-flow/SignUp"
import Link from "next/link"
import Image from 'next/image'
import FadeContent from '@/components/ui/FadeContent'
import AnimatedContent from '@/components/ui/AnimatedContent'

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
    <main className="font-inter flex flex-col items-center justify-center px-4 py-10">

      <div className="lg:hidden flex flex-col items-center justify-center">
        <div ref={contentRef} className="w-full">
          <StepComponent onContinue={goNext} />
        </div>

        <div className="fixed flex gap-2 bottom-8">
          {steps.map((_, i) => (
            <div key={i} className={`h-[6px] rounded-full transition-all duration-300 ${i === step ? 'w-12 bg-[#D4A017]' : 'w-3 bg-[#94A3B8]/30'
              }`} />
          ))}
        </div>
      </div>

      <div className='hidden lg:flex flex-col px-20 mt-20'>

        <FadeContent blur={true} duration={1000} ease="ease-out" initialOpacity={0} className='flex flex-col gap-36'>

          <section className="grid grid-cols-2 gap-10 items-center">

            <div className='flex flex-col gap-10'>
              <h4 className="w-fit text-[#D4A017] bg-[#D4A017]/10 border rounded-full flex items-center gap-2 py-2 px-4"><Sparkles />AI-powered contract analysis</h4>
              <p className='text-[70px] font-bold font-playfair leading-16'>Understand every contract <span className="text-[#D4A017]">before you sign.</span></p>
              <p className="text-[#94A3B8]">Upload any legal document and get a plain-English breakdown in seconds. No lawyers. No guesswork. No surprises</p>
              <div className='flex gap-2'>
                <p
                  className="rounded-2xl border px-8 py-4 text-[#94A3B8]"
                >
                  Analyze a contract - free
                </p >
                <Link href='/sign-up'>
                  <button
                    className="rounded-2xl bg-[#D4A017] px-8 py-4 text-[#1E293B] font-medium hover:bg-[#0F172A] hover:text-[#D4A017] hover:border hover:border-[#D4A017]"
                  >
                    Get started
                  </button>
                </Link>
              </div>
            </div>

            <div>
              <Image
                src='/images/counsel-ai-contract-card.png'
                alt='Counsel AI Contract Card'
                width={300}
                height={300}
                className='lg:w-600'
              />
            </div>

          </section>

          <section>
            <Features />
          </section>

          <section>
            <HowItWorks/>
          </section>

        </FadeContent>

      </div>



    </main>
  )
}

export default Home

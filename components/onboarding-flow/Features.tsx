'use client'

import { Steps } from "@/types"
import features from "@/data/features"
import AnimatedContent from "../ui/AnimatedContent"

const Features = ({ onContinue }: Steps) => {
  return (
    <section className="w-full font-inter md:mt-20 md:px-6 flex flex-col">

      <h1 className="font-playfair text-[40px] mb-16 md:mb-8 text-left md:text-center">
        What Counsel AI does for you
      </h1>

      <p className="hidden md:block md:mb-18 text-center">
        Counsel AI gives you the full picture - obligations, risks, and
        plain-English explanations for every clause.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {features.map((feature, index) => (
          <AnimatedContent
            key={index}
            distance={100}
            direction="vertical"
            reverse={false}
            duration={1.0}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={index * 0.1}
          >
            <div className="flex md:flex-col gap-2 lg:gap-8 md:px-6 md:py-10 md:h-60 md:bg-[#94A3B8]/10 md:rounded-xl md:border md:border-[#94A3B8]/10">

              <div className="w-10 h-10 rounded-xl bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017]">
                {feature.icon && <feature.icon size={20} />}
              </div>

              <div className="flex flex-col lg:gap-2">
                <h2 className="md:font-playfair">
                  {feature.label}
                </h2>

                <p className="text-[#94A3B8] md:hidden">
                  {feature.shortDescription}
                </p>

                <p className="text-[#94A3B8] hidden md:block">
                  {feature.longDescription}
                </p>
              </div>

            </div>
          </AnimatedContent>
        ))}
      </div>

      <button
        onClick={onContinue}
        className="lg:hidden self-center mt-16 text-xl rounded-2xl bg-[#D4A017] px-8 py-4 text-[#1E293B] flex items-center justify-center"
      >
        Continue
      </button>

    </section>
  )
}

export default Features
'use client'

import { Steps } from "@/types"
import Image from "next/image"
import Link from "next/link"
import FadeContent from "../ui/FadeContent"

const Welcome = ({ onContinue }: Steps) => {
    return (
        <section className="font-inter w-full mt-24 md:mt-50">

            <FadeContent blur={true} duration={1000} ease="ease-out" initialOpacity={0}>

                <div className="md:grid grid-cols-2 flex flex-col items-center justify-center gap-10">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-6">
                            <Image
                                src='/icons/counsel-ai-icon-coloured.png'
                                alt='Counsel AI Icon'
                                width={100}
                                height={100}
                            />
                        </div>
                        <h1 className="font-playfair text-[60px] md:font-semibold">Counsel <span className="text-[#D4A017]">AI</span></h1>
                        <p className="text-xl text-[#94A3B8] mt-4">Legal documents, explained in plain English.</p>

                        <button onClick={onContinue} className="mt-8 text-xl rounded-2xl bg-[#D4A017] px-8 py-4 text-[#1E293B]">
                            Get started
                        </button>

                        <p className="text-xl text-[#94A3B8] mt-6">Have an account? <Link href="/sign-in" className="text-[#D4A017]">Sign in</Link></p>
                    </div>

                    <div className="hidden md:flex items-center justify-center">
                        <Image
                            src='/images/counsel-ai-contract-card.png'
                            alt='Counsel AI Contract Card'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>

            </FadeContent>

        </section>

    )
}

export default Welcome